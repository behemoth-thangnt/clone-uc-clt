<template>
  <div
    class="menu-sp d-flex flex-column justify-content-between align-items-center d-lg-none"
  >
    <ul class="list-menu">
      <li><nuxt-link to="/" @click.native="$emit('hide')">Home</nuxt-link></li>
      <li>
        <nuxt-link to="/porfolio" @click.native="$emit('hide')"
          >Portfolio</nuxt-link
        >
      </li>
      <li>
        <nuxt-link to="/members" @click.native="$emit('hide')"
          >Members</nuxt-link
        >
      </li>
      <li>
        <nuxt-link to="/blogs" @click.native="$emit('hide')">Blogs</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.menu-sp {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 75px;
  background-color: #ff8761;
  z-index: 999;
  ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
    gap: 30px;
    padding: 0;
    li {
      margin-bottom: 30px;
      a {
        font-size: 18px;
        font-weight: bold;
        color: white;
        text-decoration: none;
      }
    }
  }
}
</style>
