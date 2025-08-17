import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    if (!Array.isArray(contacts)) return 0;
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error.message);
    return 0;
  }
};

console.log(await countContacts());
