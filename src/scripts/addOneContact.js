import fs from 'fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  let contacts;

  try {
    const getFile = await fs.readFile(PATH_DB);
    contacts = JSON.parse(getFile.toString('utf-8'));
  } catch (error) {
    console.log(`Some error occured while DB file reading: ${error}`);
  }

  contacts.push(createFakeContact());

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
    console.log('New contact in BD has been added');
  } catch (error) {
    console.log(`Some error occured while DB file saving: ${error}`);
  }
};

addOneContact();
