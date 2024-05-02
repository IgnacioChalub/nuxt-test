<script setup lang="ts">
import { ref, reactive, watch } from 'vue';

const store = useMyContactsStore();

const formData = reactive({
  fullName: '',
  email: '',
  message: ''
});

const handleClick = async () => {
  try {
    await store.addContact(formData);
    
    formData.fullName = '';
    formData.email = '';
    formData.message = '';
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

watch(
  () => store.postError,
  (newValue) => {
    if (newValue) {
      alert(newValue);  // Display the error message using alert
      store.postError = null;  // Reset postError to null after alerting
    }
  }
);

</script>

<template>
  <p>
    These are our contacts:
    <ul>
      <li>E-mail: mail@shelter.it</li>
      <li>Tel: 053684864351</li>
    </ul>
  </p>
  <p v-if="store.postError === null">
    Current number of contacts: {{ store.contactsCounter }}
  </p>
  <p v-else> {{ store.postError }}</p>
  <form>
    <div>
      <label for="name">Name & Surname</label>
      <input type="text" id="name" v-model="formData.fullName" placeholder="Name & Surname" />
    </div>
    <div>
      <label for="mail">E-mail</label>
      <input type="email" id="mail" v-model="formData.email" placeholder="E-mail" />
    </div>
    <div id="message-div">
      <label for="message">Message</label>
      <textarea id="message" v-model="formData.message" placeholder="Write your message here"></textarea>
    </div>
    <button type="button" @click="handleClick">Submit</button>
  </form>
</template>

<style scoped>
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

form {
  width: 600px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 2px rgb(255, 102, 0) dashed;
  border-radius: 5px;
  row-gap: 20px;
}

form div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

textarea {
  width: 99%;
  min-height: 5.1em;
  resize: vertical;
}

input {
  width: 60%;
}

label {
  font-size: 13pt;
  font-weight: bold;
}

#message-div {
  flex-direction: column;
}

@media screen and (max-width: 650px) {
  form div {
    flex-direction: column;
  }

  input {
    width: 100%;
  }

  form {
    width: 90%;
    min-width: 400px;
  }
}
</style>