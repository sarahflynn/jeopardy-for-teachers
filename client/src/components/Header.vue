<template>
  <header>
    <img src="../../assets/img/apple.png" alt="">
    <div class="app-name">
      <h1 class="line1">Jeopardy</h1>
      <h1 class="line2">for Teachers</h1>
    </div>
    <div class="icon">
      <input id="hamburger" type="checkbox" v-model="checkboxToggle">
      <label for="hamburger" class="hamburger"></label>
    </div>
    <nav v-bind:class="{active: checkboxToggle}">
      <div v-if="checkboxToggle && (width < 600)" class="navbar" id="navbar">
        <RouterLink v-if="!user" class="navlink" to="/auth">Sign in</RouterLink>
        <RouterLink v-if="user" class="navlink" to="/">My Dashboard</RouterLink>
        <RouterLink class="navlink" to="/how-to-play">How to Play</RouterLink>
        <RouterLink class="navlink" to="/about">About</RouterLink>
        <a v-if="user" class="navlink" href="/" @click.prevent="handleSignOut">Sign Out</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    user: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      checkboxToggle: false,
      width: null
    };
  },
  created() {
    this.width = window.innerWidth;
  }
};
</script>

<style>
@font-face {
  font-family: "Gyparody";
  src: url("../../assets/font/gyparody.regular.ttf");
}

.line1 {
  font-family: "Gyparody Bold", "Times New Roman", Times, serif;
  font-size: 9vw;
}

.line2 {
  font-family: "Gyparody", "Times New Roman", Times, serif;
  font-size: 6.4vw;
}

.app-name {
  background-image: linear-gradient(var(--theme0a), transparent);
  display: inline-block;
}

header {
  position: relative;
}

nav {
  width: 100vw;
  display: flex;
  z-index: 999;
  position: relative;
  top: 100;
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
  margin: 3vw;
  position: fixed;
  right: 0;
  top: 0;
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
  nav,
  .navbar {
    display: flex;
    flex-direction: column;
    width: 100vw;
    position: relative;
  }

  nav .navlink {
    width: 100vw;
    padding-top: 20px;
  }

  .active {
    background-color: var(--theme0a);
  }

  nav {
    position: relative;
  }

  img {
    width: 70px;
  }
}
</style>
