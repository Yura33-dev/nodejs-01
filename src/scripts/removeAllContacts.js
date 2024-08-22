import fs from 'fs/promises';
import path from 'path';

import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  const pathToDB = path.join(process.cwd(), ...PATH_DB.split('/'));
  try {
    await fs.writeFile(pathToDB, JSON.stringify([]));
    console.log('All contacts have been removed from BD');
  } catch (error) {
    console.log(`Some error occured while DB file saving: ${error}`);
  }
};

removeAllContacts();
