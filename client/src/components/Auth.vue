<template>
  <div>
    <h2>{{ label }}</h2>
    <div class="auth-toggle">
      <button @click="type = isSignUp ? 'signIn' : 'signUp'" class="button-block">
      {{
        isSignUp
          ? "Already a user? Click here to sign in!"
          : "New? Click here to sign up!"
      }}
      </button>
    </div>
      <pre>{{ error }}</pre>
      <form @submit.prevent="handleSubmit">
        <div class="form-input">
          <label>
            Username:
            <input class="login" v-model="credentials.name">
          </label>
        </div>
        <div class="form-input">
          <label>
            Password:
            <input 
              class="login"
              :type="show ? 'text' : 'password'"
              v-model="credentials.password">
          </label>
          <button
            @click="show = !show"
            type="button"
            class="button-inline">
          {{ show ? 'Hide' : 'Show' }}
          </button>
        </div>
        <br/>
        <button type="submit" class="login button-block">
          Submit
        </button>
      </form>
  </div>
</template>

<script>

import { signUp, signIn } from '../services/api';

export default {
  props: {
    onUser: Function
  },
  data() {
    return {
      credentials: {
        name: '',
        password: ''
      },
      show: false,
      type: 'signIn',
      error: null
    };
  },
  computed: {
    isSignUp() {
      return this.type === 'signUp';
    },
    label() {
      return this.isSignUp ? 'Sign Up' : 'Sign In';
    }
  },
  watch: {
    type(newType, oldType) {
      if(newType !== oldType) {
        this.error = null;
      }
    }
  },
  methods: {
    handleSubmit() {
      this.error = null;
      const action = this.isSignUp ? signUp : signIn;
      action(this.credentials)
        .then(user => {
          this.onUser(user);
          this.$router.push('/');
        })
        .catch(err => {
          this.error = err;
        });    
    }
  }
};

</script>

<style>

  .auth-toggle {
    text-align: center;
    margin: -1% 0 5% 0;
  }

  .login {
    margin-bottom: 1%;
  }

</style>
