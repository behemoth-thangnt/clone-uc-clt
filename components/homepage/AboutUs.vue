<template>
  <div id="who-we-are" class="section-about-us">
    <div class="container">
      <div class="about-us">
        <div class="about-image">
          <img src="@/assets/images/who-we-are.png" />
        </div>
        <div class="about-content">
          <div class="about-title intro intro-sm">
            {{ $t("home.about.sub_title") }}
          </div>
          <div class="about-title intro intro-bg">
            {{ $t("home.about.title") }}
          </div>
          <p class="about-description">
            {{ $t("home.about.description1") }}<br /><br />

            {{ $t("home.about.description2") }}
          </p>

          <button class="about-btn">{{ $t("home.about.btn_more") }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-about-us {
  .container {
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
  }
  .about-us {
    display: flex;
    padding: 100px 50px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      margin-top: 20px;
      flex-wrap: wrap;
      flex-direction: column-reverse;
      padding: 0;
    }

    .about-image {
      min-width: 400px;
      margin-right: 95px;

      @media (max-width: 768px) {
        min-width: 0;
        margin: auto;
        padding: 0 30px;
      }

      img {
        width: 100%;
      }
    }

    .about-content {
      @media (max-width: 768px) {
        padding: 0 10px;
        .about-title {
          text-align: center;
        }
      }
      .about-description {
        margin-bottom: 32px;
        font-family: "Quicksand-Regular", sans-serif;
        @media (max-width: 768px) {
          margin: 15px 0;
        }
      }

      .about-btn {
        border: 2px solid #ff8761;
        font-size: 14px;
        font-weight: bold;
        text-align: center;
        border-radius: 20px;
        color: #ff8761;
        font-family: "Quicksand-Bold", sans-serif;
        background: #fff;
        padding: 12px 28px;

        &:hover {
          background: #ff8761;
          color: white;
          transition: 0.3s;
        }

        @media (max-width: 768px) {
          padding: 8px 12px;
        }
      }
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
