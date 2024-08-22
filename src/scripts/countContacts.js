import fs from 'fs/promises';
import path from 'path';

import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  const pathToDB = path.join(process.cwd(), ...PATH_DB.split('/'));

  try {
    const getFile = await fs.readFile(pathToDB);
    const contacts = JSON.parse(getFile.toString('utf-8'));
    return contacts.length;
  } catch (error) {
    console.log(`Some error occured while DB file reading: ${error}`);
  }
};

console.log(await countContacts());
