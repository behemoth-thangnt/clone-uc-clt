<template>
  <div class="section-technologies">
    <div class="container">
      <div class="technologies">
        <div class="technologies-content">
          <div class="intro intro-sm">Company introduction</div>
          <div class="intro intro-bg">TECHNOLOGIES WE SERVE</div>
          <div class="tech-items">
            <!-- <button
              v-for="(item, index) in technologies"
              :key="index"
              class="tech-bg"
            >
              <component :is="item.svg" :key="item.svg"></component>
            </button> -->

            <button class="tech-bg">
              <SvgRubyIcon />
            </button>
            <button class="tech-bg">
              <!-- <SvgRailsIcon /> -->
              <SvgRubyIcon />
            </button>
            <button class="tech-bg">
              <!-- <SvgVueIcon /> -->
              <SvgRubyIcon />
            </button>
            <button class="tech-bg">
              <!-- <SvgKubernetesIcon /> -->
              <SvgRubyIcon />
            </button>
            <br />
            <button class="tech-bg">
              <!-- <SvgAwsIcon /> -->
              <SvgRubyIcon />
            </button>
            <button class="tech-bg">
              <!-- <SvgSinatraIcon/> -->
              <SvgRubyIcon />
            </button>
            <button class="tech-bg">
              <!-- <SvgPythonIcon/> -->
              <SvgRubyIcon />
            </button>
          </div>
        </div>
        <div class="tech-image">
          <img src="@/assets/images/technologies.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SvgRubyIcon from "@/assets/svg/SvgRubyIcon.vue";
import SvgAwsIcon from "@/assets/svg/SvgAwsIcon.vue";
import SvgRailsIcon from "@/assets/svg/SvgRailsIcon.vue";
import SvgVueIcon from "@/assets/svg/SvgVueIcon.vue";
import SvgKubernetesIcon from "@/assets/svg/SvgKubernetesIcon.vue";
import SvgSinatraIcon from "@/assets/svg/SvgSinatraIcon.vue";
import SvgPythonIcon from "@/assets/svg/SvgPythonIcon.vue";

export default {
  components: {
    SvgRubyIcon,
    SvgRailsIcon,
    SvgVueIcon,
    SvgKubernetesIcon,
    SvgAwsIcon,
    SvgSinatraIcon,
    SvgPythonIcon,
  },
  data() {
    return {
      // technologies: [
      //   { id: 1, svg: "SvgRubyIcon" },
      //   { id: 2, svg: "SvgRailsIcon" },
      //   { id: 3, svg: "SvgVueIcon" },
      //   { id: 4, svg: "SvgKubernetesIcon" },
      //   { id: 5, svg: "SvgAwsIcon" },
      //   { id: 6, svg: "SvgSinatraIcon" },
      //   { id: 7, svg: "SvgPythonIcon" },
      // ],
    };
  },
};
</script>
<style lang="scss" scoped>
.section-technologies {
  .container {
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
  }

  .technologies {
    display: flex;
    padding: 100px 50px;
    justify-content: center;
    align-items: center;

    @media (max-width: 991px) {
      flex-direction: column;
      padding: 0;
      .tech-image {
        display: none;
      }
    }
    .technologies-content {
      @media (max-width: 991px) {
        margin-top: 50px;
        text-align: center;
        word-wrap: break-word;
      }

      .tech-items {
        @media (max-width: 991px) {
          margin: 20px 0 80px 0;
        }
        .tech-bg {
          padding: 14px;
          border: none;
          background: linear-gradient(
            180deg,
            #fce7e1 0%,
            #ffc2a7 81.77%,
            #ff8761 100%
          );
          border-radius: 20px;
          margin-right: 20px;
          margin-top: 20px;
        }
      }
    }

    .tech-image {
      min-width: 400px;
      margin-left: 95px;
    }
  }
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
