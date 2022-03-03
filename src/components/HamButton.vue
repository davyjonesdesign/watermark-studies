<template>
  <div id="mobileMenu">
    <div class="ham">
      <a href="#">
        <div
          class="hamburger"
          v-bind:class="{ active: myClass }"
          v-on:click="myClass = !myClass"
        >
          <p class="navbar__menu-label">Menu</p>
          <div class="menu-btn_container">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        </div>
      </a>
    </div>
    <!-- Menu Overlay -->
    <div id="myNav" class="overlay" v-bind:class="{ active: myClass }">
      <div class="overlay-content">
        <div class="nav-links">
          <router-link :to="{ name: 'Home' }" v-on:click="myClass = !myClass"
            >Home</router-link
          >
          <router-link :to="{ name: 'About' }" v-on:click="myClass = !myClass"
            >About</router-link
          >
          <router-link
            :to="{ name: 'Resources' }"
            v-on:click="myClass = !myClass"
            >Resources</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HamButton",
  data() {
    return {
      myClass: false,
    };
  },
};
</script>

<style>
.hamburger {
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  padding: 6px 10px;
  transition: var(--transition-fast);
  cursor: pointer;
  border-radius: 10px;
}
.navbar__menu-label {
  font-weight: 500;
  text-transform: capitalize;
  padding-right: 15px;
  color: var(--color-white);
  margin: 0;
}
.bar1,
.bar2,
.bar3 {
  width: 32px;
  height: 2px;
  background-color: var(--color-white);
  transition: 0.4s;
}
.bar1 {
  margin: 0 0 8px;
}
.bar2 {
  margin: 0;
}
.bar3 {
  margin: 8px 0 0;
}
.overlay {
  position: fixed;
  display: flex;
  opacity: 0;
  top: 50px;
  right: -100vw;
  /* height: auto; */
  z-index: 1000000000000;
  background: var(--color-periwinkle-dark);
  transition: var(--transition-longest);
  width: 100%;
  height: 100vh;
}
.overlay-content {
  position: relative;
  background: var(--color-periwinkle);
  border-top: 1px solid var(--color-periwinkle-light);
  width: 100%;
  margin: 0;
  text-align: center;
}
.nav-links {
  display: flex;
  flex-direction: column;
}
.nav-links a {
  color: white;
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  width: auto;
}
.nav-links a.router-link-exact-active {
  /* border-bottom: 4px solid var(--goldenrod); */
  background: var(--color-white);
  color: var(--color-periwinkle-dark);

  /* box-shadow: 0px -3px 3px var(--gray-dark); */
  /* border-top: 2px solid var(--periwinkle-dark);
  border-left: 2px solid var(--periwinkle-dark);
  border-right: 2px solid var(--periwinkle-dark); */
}

/* active */
.active {
  background: var(--color-white);
  color: var(--color-periwinkle-dark);
  opacity: 1;
  right: 0;
  /* display: flex; */
}
.active .bar1 {
  background-color: var(--color-periwinkle-dark);
  transform: rotate(-45deg) translate(-3px, 3px);
}

.active .bar2 {
  display: none;
}

.active .bar3 {
  background-color: var(--color-periwinkle-dark);
  transform: rotate(45deg) translate(-4px, -4px);
}

.active .navbar__menu-label {
  color: var(--color-periwinkle-dark);
}
</style>
