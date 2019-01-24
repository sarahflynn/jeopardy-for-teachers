<template>
  <div id="app">
    <header>
      <h1 id="logo">JEOPARDY FOR TEACHERS</h1>
    </header>

    <nav>
      <RouterLink v-if="user" class="navlink" to="/">My Dashboard</RouterLink>
      <RouterLink v-if="user" class="navlink" to="/" @click.prevent="handleSignOut">My Dashboard</RouterLink>
      <RouterLink v-if="!user" class="navlink" to="/auth">Sign in</RouterLink>
      <RouterLink class="navlink" to="/about">About</RouterLink>
      <RouterLink class="navlink" to="/instructions">How to Play</RouterLink>
      <RouterLink class="navlink" to="/contact">Contact</RouterLink>
    </nav>

    <span class="user" v-if="user">Hello {{ user.name }}!</span>

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
      this.$router.push('/');
    }
  },
  created() {
    this.user = checkForToken();
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Anton|Arimo:700|Crimson+Text|Fascinate|Montserrat');

* {
  margin: 0;
}

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



/* nav {
    margin: 0;
    padding: 10px 10px 10px 10px;
    width: 100%;
    background-color: rgb(59, 59, 117);
    height: 20px;
    color: white;
    text-align: center
}

nav a {
    color: white;
    padding: 8px 16px;
    text-decoration: none;
}

nav a:hover {
    background-color: rgb(82, 137, 255);
} */

.user {
  text-align: left;
  margin-right: 0;
}

</style>
