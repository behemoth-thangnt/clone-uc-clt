<template>
  <div class="home-layout">
    <home-header></home-header>
    <slot/>
  </div>
</template>
<script>
import HomeHeader from "@/components/layout/header/HomeHeader.vue";

export default {
  components: { HomeHeader },

}
</script>
