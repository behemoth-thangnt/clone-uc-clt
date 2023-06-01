<template>
  <div class="home-header">
    <div class="d-none d-md-block">
      <HeaderMenu></HeaderMenu>
    </div>
    <div class="d-block d-md-none">
      <HeaderSP></HeaderSP>
    </div>
  </div>
</template>
<script>
import HeaderMenu from "@/components/layout/header/HeaderMenu.vue";
import HeaderSP from "@/components/layout/header/HeaderSP.vue";
export default {
  components: {
    HeaderMenu,
    HeaderSP
  }
};
</script>
