import { defineStore } from 'pinia';
import {useFetch} from "#app";
import { ref } from 'vue';

interface Contact {
  fullName: string;
  email: string;
  message: string;
}

export const useMyContactsStore = defineStore('contacts', () => {
  const contactsCounter = ref<number>(0);
  const postError = ref<null | string>(null);

  async function init() {
    try {
        const { data, error } = await useFetch('/api/contacts');

        if(!!data.value) {
          contactsCounter.value = data.value.contactsCounter;
        } else {
          postError.value = 'An unexpected error occurred while fetching contacts data. Please try again later.';
        }
    } catch (err) {
        postError.value = 'An unexpected error occurred while fetching contacts data. Please try again later.';
    }
}

async function addContact(contact: Contact) {
    try {
      const body = JSON.stringify(contact);
      const response = await fetch('/api/contacts', {
        method: 'POST',
        body: body,
      });

      const data = await response.json();

      if (data && data.contactsCounter !== undefined) {
        contactsCounter.value = data.contactsCounter;
      } else {
        throw new Error('Response does not contain contactsCounter');
      }
    } catch (error) {
      console.error('Error adding contact:', error);
      postError.value = 'Error adding contact.';
    }
  }

  init();

  return {
    contactsCounter,
    postError,
    addContact,
  };
});
