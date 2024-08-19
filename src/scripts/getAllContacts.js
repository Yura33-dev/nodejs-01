import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const getFile = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(getFile.toString('utf-8'));
    return contacts.length > 0 ? contacts : 'DB have not contacts';
  } catch (error) {
    console.log(`Some error occured while DB file reading: ${error}`);
  }
};

console.log(await getAllContacts());
