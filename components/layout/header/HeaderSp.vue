<template>
  <div class="header-sp">
    <input v-model="showMenu" id="overlay-input" type="checkbox" />
    <label
      id="overlay-button"
      for="overlay-input"
      :class="{ 'bg-menu': showMenu }"
    >
      <nuxt-link to="/" @click.native="$emit('hide')">
        <img
          fluid
          src="@/assets/images/logo.png"
          alt="logo"
          :class="{ 'd-none': showMenu }"
        />
        <img
          fluid
          src="@/assets/images/logo-white.png"
          alt="logo"
          class="logo-white"
          :class="{ 'd-none': !showMenu }"
        />
      </nuxt-link>
      <span :class="{ 'bg-svg': showMenu }"></span>
    </label>
    <div id="overlay">
      <MenuSp @hide="showMenu = false"></MenuSp>
    </div>
  </div>
</template>
<script>
import MenuSp from "@/components/layout/header/MenuSp.vue";
export default {
  components: {
    MenuSp,
  },

  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.header-sp {
  margin: 0;
  animation: bugfix infinite 1s;
  -webkit-animation: bugfix infinite 1s;
}

@keyframes bugfix {
  from {
    padding: 0;
  }
  to {
    padding: 0;
  }
}
@-webkit-keyframes bugfix {
  from {
    padding: 0;
  }
  to {
    padding: 0;
  }
}

#overlay-button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 0;
  padding: 15px 10px;
  z-index: 5;
  cursor: pointer;
  user-select: none;
  background-color: white;
  span {
    height: 4px;
    width: 35px;
    border-radius: 2px;
    background-color: white;
    position: relative;
    bottom: -5px;
    display: block;
    transition: all 0.2s ease-in-out;
    &:before {
      top: -10px;
      visibility: visible;
    }
    &.bg-svg {
      &:before,
      &:after {
        background-color: white;
      }
    }
    &:before,
    &:after {
      height: 3px;
      width: 30px;
      border-radius: 2px;
      background-color: #ff8761;
      position: absolute;
      content: "";
      transition: all 0.2s ease-in-out;
    }
  }
  img {
    width: 150px;
    &.logo-white {
      width: 105px !important;
      margin-top: 5px;
      margin-left: 23px;
    }
  }
  &.bg-menu {
    background: #ff8761 !important;
  }
}

input[type="checkbox"] {
  display: none;

  &:checked ~ #overlay {
    visibility: visible;
  }

  &:checked ~ #overlay-button {
    &:hover span,
    span {
      background: transparent;
    }
    span {
      &:before {
        transform: rotate(45deg) translate(7px, 7px);
        opacity: 1;
      }
      &:after {
        transform: rotate(-45deg) translate(0, -1px);
      }
    }
  }
}

#overlay {
  width: 100vw;
  height: 100vh;
  z-index: 2;
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  &.active {
    visibility: visible;
  }
  .home-footer {
    height: 100vh;
  }
}
</style>
