import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, updatedContacts, 'utf-8');
    console.log('Data is successfully added');
  } catch (error) {
    console.error('Error in adding data:', error);
  }
};
