<template>
  <div class="sign-in">
    <div class="app-name">
      <h1 class="line1">Jeopardy</h1>
      <h1 class="line2">for Teachers</h1>
    </div>
    <div class="section-background1">
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
      <form @submit.prevent="handleSubmit">
        <div class="form-input">
          <label>Username</label>
          <input class="login" v-model="credentials.name">
        </div>
        <div class="form-input">
          <label>Password</label>
          <input class="login" :type="show ? 'text' : 'password'" v-model="credentials.password">
          <button
            @click="show = !show"
            type="button"
            class="button-inline"
          >{{ show ? 'Hide' : 'Show' }}</button>
        </div>
        <br>
        <p v-if="error" class="error">{{ error }}</p>
        <button type="submit" class="login button-block">Submit</button>
      </form>
    </div>
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

<style scoped>
.auth-toggle {
  text-align: center;
  margin: -1% 0 5% 0;
}

.login {
  margin-bottom: 1%;
}

.app-name {
  padding: 55px 30px 40px;
  background-image: linear-gradient(var(--theme0a), transparent);
}

h1 {
  text-align: center;
  font-weight: 900;
  color: var(--theme4);
  text-shadow: var(--theme0) 2px 2px 2px;
}

.line1 {
  font-size: 10vw;
}

.line2 {
  font-size: 7.5vw;
}
</style>
