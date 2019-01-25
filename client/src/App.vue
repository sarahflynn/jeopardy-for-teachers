<template>
  <div id="app">
    <header>
      <h1 id="logo">JEOPARDY FOR TEACHERS</h1>
    </header>

    <nav>
      <RouterLink v-if="user" class="navlink" to="/">My Dashboard</RouterLink>
      <RouterLink v-if="!user" class="navlink" to="/auth">Sign in</RouterLink>
      <RouterLink class="navlink" to="/how-to-play">How to Play</RouterLink>
      <RouterLink class="navlink" to="/about">About</RouterLink>
      <a v-if="user" class="navlink" href="/" @click.prevent="handleSignOut">Sign Out</a>
    </nav>
    
    <p class="user-message" v-if="!user">Welcome! Please sign in or sign up.</p>

    <RouterView class="routes" :onUser="handleUser" :user="user"></RouterView>
  </div>
</template>

<script>
import { checkForToken, signOut } from './services/api';

export default {
  name: 'app',
  components: {},
  data() {
    return {
      user: null
    };
  },
  methods: {
    handleUser(user) {
      this.user = user;
    },
    handleSignOut() {
      signOut();
      this.user = null;
      this.$router.push('/auth');
    }
  },
  created() {
    this.user = checkForToken();
    if(!this.user) {
      this.$router.push('/auth');
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Anton|Arimo:700|Crimson+Text|Fascinate|Montserrat');

header {
  background-color: rgb(6, 11, 141);
}

#logo {
  text-align: center;
  padding-top: 3%;
  padding-bottom: 3%;
  font-family: 'Fascinate', sans-serif;
  font-size: 4em;
  font-weight: bold;
  color: rgba(255, 255, 255);
}

h1 {
  text-align: center;
}

nav {
    background-color: rgba(6, 14, 233, 0.52);
    width: 100vw;
    display: flex;
    z-index: 999;
}

nav .navlink {
    flex-grow: 1;
    display: inline-block;
    text-align: center;
    font-size: 18px;
    color: white;
    line-height: 60px;
    flex-direction: row;
    width: 25vw;
    transition: background-color 1s ease;
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: 'Montserrat', serif;
    font-weight: 600;
}

nav .navlink:hover {
    background-color: rgb(163, 166, 243);
    color: rgba(6, 14, 233, 0.);
}

.user-message {
  text-align: center;
  margin-right: 0;
  margin: 45px;
}

</style>
