import fs from 'fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  let contacts;
  try {
    const getFile = await fs.readFile(PATH_DB);
    contacts = JSON.parse(getFile.toString('utf-8'));
  } catch (error) {
    console.log(`Some error occured while DB file reading: ${error}`);
  }

  if (contacts.length <= 0) return console.log('File have not contacts');

  //   const contactsWithoutLastOne = contacts.pop();
  const contactsWithoutLastOne = contacts.filter(
    (contact, index) => index !== contacts.length - 1,
  );

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contactsWithoutLastOne));
    console.log('Last contact has been removed from BD');
  } catch (error) {
    console.log(`Some error occured while DB file saving: ${error}`);
  }
};

removeLastContact();
