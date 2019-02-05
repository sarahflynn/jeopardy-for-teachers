<template>
  <div id="app">
    <Header></Header>
    <RouterView id="app-view" class="routes" :onUser="handleUser" :user="user"></RouterView>
  </div>
</template>

<script>
import { checkForToken, signOut } from './services/api';
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    Header
  },
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

<style scoped>
@import "../css/variables.css";
@import url("https://fonts.googleapis.com/css?family=Anton|Arimo:700|Crimson+Text|Fascinate|Montserrat");

#app {
  background-image: url("../assets/img/landscape-mountains.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-width: 100vw;
  min-height: 100vh;
}

</style>
