<template>
  <div class="section-welcome">
    <div class="hero-banner">
      <img src="@/assets/images/banner.png" />
    </div>
    <div class="hero-content">
      <h2 class="animate__animated animate__backInLeft">Behemoth</h2>
      <div
        class="description d-flex flex-column animate__animated animate__backInRight"
      >
        <span>Acquisition beyond expectation</span>
        <span>Unrelenting dream realization</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-welcome {
  position: relative;
  .hero-banner {
    position: relative;
    width: 100%;
    height: 100%;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.4;
    }
    @media (max-width: 768px) {
      margin-top: 60px;
    }
    img {
      width: 100%;
    }
  }
  .hero-content {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    text-align: center;
    h2 {
      color: white;
      text-transform: uppercase;
      font-size: 80px;
      font-weight: bold;
      margin-bottom: 30px;
      @media (max-width: 768px) {
        margin-bottom: 20px;
        font-size: 30px;
      }
    }
    .description {
      font-size: 26px;
      line-height: 35px;
      @media (max-width: 768px) {
        font-size: 16px;
        span {
          line-height: 20px;
        }
      }
    }
  }
}
</style>
