<template>
  <div class="home-layout">
    <div class="home-header">
      <home-header></home-header>
    </div>

    <div class="home-body">
      <slot />
    </div>
    <div class="home-footer">
      <home-footer></home-footer>
    </div>
  </div>
</template>
<script>
import HomeHeader from "@/components/layout/header/HomeHeader.vue";
import HomeFooter from "@/components/layout/footer/HomeFooter.vue";

export default {
  components: { HomeHeader, HomeFooter },
};
</script>
<style lang="scss" scoped>
.home-header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: 9;
  background: #ffffff;
}
.home-body {
  display: flex;
  flex-direction: column;
}
.home-footer {
  margin-top: auto;
}
</style>
