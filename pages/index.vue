<template>
  <div>
    <Welcome />

    <AboutUs />

    <HomeOffer />

    <OurClients />

    <Technologies />

    <ContactUs />

    <div class="section-map">
      <div class="w-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.3051945133143!2d105.84268737688458!3d20.980399880656936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad3b899ae531%3A0x6fe470cad7d2cc67!2sC%C3%B4ng%20ty%20TNHH%20Behemoth!5e0!3m2!1svi!2s!4v1683949713678!5m2!1svi!2s"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import Welcome from "@/components/homepage/Welcome.vue";
import AboutUs from "@/components/homepage/AboutUs.vue";
import HomeOffer from "@/components/homepage/HomeOffer.vue";
import Technologies from "@/components/homepage/Technologies.vue";
import OurClients from "@/components/homepage/OurClients.vue";
import ContactUs from "@/components/homepage/ContactUs.vue";
// import { useGlobalStore } from "@/store/global";

// import { useFetchByGraphQl } from "@/repositories/index.js";
// import { getExample } from "@/graphql/home/index.js";
// import { ref } from "vue";

export default {
  components: {
    Welcome,
    AboutUs,
    HomeOffer,
    Technologies,
    OurClients,
    ContactUs,
  },

  setup() {},
};
</script>

<style lang="scss" scoped>
.section-map {
  margin-bottom: 150px;
}

.intro {
  font-weight: bold;
  font-family: "ViceCitySans-Bold", sans-serif;
  &.intro-sm {
    font-size: 14px;
  }
  &.intro-bg {
    font-size: 32px;
  }
}
</style>
