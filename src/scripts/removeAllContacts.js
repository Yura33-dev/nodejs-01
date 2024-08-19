import fs from 'fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
    console.log('All contacts have been removed from BD');
  } catch (error) {
    console.log(`Some error occured while DB file saving: ${error}`);
  }
};

removeAllContacts();
