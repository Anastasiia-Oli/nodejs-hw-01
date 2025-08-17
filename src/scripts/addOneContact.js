import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = data ? JSON.parse(data) : [];

    const newContact = Array.from({ length: 1 }, () => createFakeContact());

    const updatedContact = [...contacts, ...newContact];

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContact, null, 2),
      'utf-8',
    );
    console.log('One contact successfully added');
  } catch (error) {
    console.error('Error generating contact:', error.message);
  }
};

addOneContact();
