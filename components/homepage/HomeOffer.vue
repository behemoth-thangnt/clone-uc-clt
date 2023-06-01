<template>
  <div id="what-we-offer" class="section-offer">
    <div class="offer-img">
      <img src="@/assets/images/vector-bottom.png" />
    </div>

    <div class="offer-middle">
      <div class="container">
        <div class="offer-title">
          <div class="offer-header">
            <div class="offer-icon">
              <img src="@/assets/images/logo-behemoth-icon.png" alt="" />
            </div>
            <div>
              <div class="intro intro-sm">{{ $t("home.offer.sub_title") }}</div>
              <div class="intro intro-bg">{{ $t("home.offer.title") }}</div>
            </div>
          </div>
        </div>

        <div class="offer-content text-center">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ $t("home.offer.planning.title") }}</h5>
              <SvgLight></SvgLight>
              <p class="card-text">
                {{ $t("home.offer.planning.description") }}
              </p>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-center my-2">
            <SvgMultiplied />
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                {{ $t("home.offer.technology.title") }}
              </h5>
              <SvgTablet></SvgTablet>
              <p class="card-text">
                {{ $t("home.offer.technology.description") }}
              </p>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-center my-2">
            <SvgMultiplied />
          </div>

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ $t("home.offer.take_care.title") }}</h5>
              <SvgTakeCare></SvgTakeCare>
              <p class="card-text">
                {{ $t("home.offer.take_care.description") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="offer-img">
      <img src="@/assets/images/vector-top.png" />
    </div>
  </div>
</template>

<script>
import SvgLight from "@/assets/svg/SvgLight.vue";
import SvgTablet from "@/assets/svg/SvgTablet.vue";
import SvgTakeCare from "@/assets/svg/SvgTakeCare.vue";
import SvgMultiplied from "@/assets/svg/SvgMultiplied.vue";
export default {
  components: {
    SvgLight,
    SvgTablet,
    SvgTakeCare,
    SvgMultiplied,
  },
};
</script>

<style lang="scss" scoped>
.section-offer {
  .offer-middle {
    background-color: #fff7f4;
    position: relative;
    padding-top: 150px;

    .offer-title {
      position: absolute;
      z-index: 1;
      left: 50%;
      top: 0;
      transform: translate(-50%, -50%);

      .offer-header {
        position: relative;
        .offer-icon {
          position: absolute;
          top: -30%;
          left: -10%;
        }
      }
    }

    .offer-content {
      display: flex;
      justify-content: space-between;

      @media (max-width: 991px) {
        padding: 0 10px;
        flex-direction: column;
      }

      .card {
        width: 25%;
        border-radius: 20px;
        padding-left: 32px;
        padding-right: 32px;
        @media (max-width: 991px) {
          width: 100%;
          min-height: 350px;
        }

        .card-title {
          margin-top: 40px;
          font-size: 16px;
          font-family: "Quicksand-Bold", sans-serif;
        }

        .card-text {
          margin-top: 16px;
          font-size: 16px;
          font-family: "Quicksand-Regular", sans-serif;
          margin-bottom: 40px;
        }
      }
    }
  }
  .offer-img {
    img {
      width: 100%;
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
