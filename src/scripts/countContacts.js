import fs from 'fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const getFile = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(getFile.toString('utf-8'));
    return contacts.length;
  } catch (error) {
    console.log(`Some error occured while DB file reading: ${error}`);
  }
};

console.log(await countContacts());
