import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    console.log('Contacts:', data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
};

console.log(await getAllContacts());
