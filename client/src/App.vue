<template>
  <div id="app">
    <nav v-bind:class="{active: checkboxToggle}">
      <div class="icon">
        <input id="hamburger" type="checkbox" v-model="checkboxToggle">
        <label for="hamburger" class="hamburger"></label>
      </div>
      <div v-if="checkboxToggle && (width < 600)" class="navbar" id="navbar">
        <RouterLink v-if="!user" class="navlink" to="/auth">Sign in</RouterLink>
        <RouterLink v-if="user" class="navlink" to="/">My Dashboard</RouterLink>
        <RouterLink class="navlink" to="/how-to-play">How to Play</RouterLink>
        <RouterLink class="navlink" to="/about">About</RouterLink>
        <a v-if="user" class="navlink" href="/" @click.prevent="handleSignOut">Sign Out</a>
      </div>
    </nav>

    <RouterView id="app-view" class="routes" :onUser="handleUser" :user="user"></RouterView>
  </div>
</template>

<script>
import { checkForToken, signOut } from "./services/api";

export default {
  name: "app",
  components: {},
  data() {
    return {
      user: null,
      checkboxToggle: false,
      width: null
    };
  },
  methods: {
    handleUser(user) {
      this.user = user;
    },
    handleSignOut() {
      signOut();
      this.user = null;
      this.$router.push("/auth");
    }
  },
  created() {
    this.user = checkForToken();
    if(!this.user) {
      this.$router.push("/auth");
    }
    this.width = window.innerWidth;
  }
};
</script>

<style scoped>
@import "../css/variables.css";
@import url("https://fonts.googleapis.com/css?family=Anton|Arimo:700|Crimson+Text|Fascinate|Montserrat");

h1 {
  text-align: center;
}

nav {
  width: 100vw;
  display: flex;
  z-index: 999;
  position: relative;
  top: 0;
}

nav .navlink {
  flex-grow: 2;
  position: relative;
  display: inline-block;
  text-align: center;
  font-size: 4.5vw;
  color: white;
  line-height: 60px;
  flex-direction: row;
  width: 25vw;
  transition: background-color 1s ease;
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: "Montserrat", serif;
  font-weight: 600;
}

nav .navlink:hover {
  background-color: var(--theme1a);

}

.user-message {
  text-align: center;
  margin-right: 0;
  margin: 45px;
}

#app {
  background-image: url("../img/landscape-mountains.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-width: 100vw;
  min-height: 100vh;
}

.hamburger {
  background: white;
  min-height: 5px;
  height: 5px;
  transition: 1s;
  width: 40px;
  border-radius: 4px;
}

.hamburger::before,
.hamburger::after {
  height: 5px;
  background: white;
  content: "";
  display: block;
  position: relative;
  transition: 1s;
  border-radius: 4px;
}

.hamburger::before {
  top: -12px;
}

.hamburger::after {
  top: 7px;
}

.icon {
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5vw 5vw 0;
  position: absolute; 
}

.icon input {
  width: 50px;
  height: 50px;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  z-index: 9999999;
}

input:checked ~ .hamburger {
  background: transparent;
}

input:checked ~ .hamburger::before {
  transform: rotate(45deg);
  top: 0;
}

input:checked ~ .hamburger::after {
  transform: rotate(-45deg);
  top: -5px;
}

@media (max-width: 600px) {
  nav, .navbar {
    display: flex;
    flex-direction: column;
    width: 100vw;
    position: relative;

  }

  nav .navlink {
    width: 100vw;
    height: 50px;
  }

  .active {
    background-color: var(--theme0a)
  }

  nav {
    position: relative;
  }
  
}
</style>
