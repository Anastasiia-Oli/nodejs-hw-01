import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
  try {
    // reading previous data
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = data ? JSON.parse(data) : [];

    // creating new contacts
    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );

    // add new contacts to previous
    const updatedContacts = [...contacts, ...newContacts];

    // rewrite file
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf-8',
    );
    console.log(`${number} of contacts successfully added`);
  } catch (error) {
    console.error('Error generating contacts:', error.message);
  }
};

generateContacts(5);
