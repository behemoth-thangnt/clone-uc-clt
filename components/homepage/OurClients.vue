<template>
  <div class="section-clients text-center">
    <div class="container">
      <div class="client-header">
        <div class="intro intro-sm">Dependence</div>
        <div class="intro intro-bg">OUR CLIENTS</div>
      </div>
      <div
        class="section-carousel d-flex align-items-center justify-content-between"
      >
        <div><img src="@/assets/images/kerberos-icon.png" /></div>
        <div><img src="@/assets/images/entetsu-icon.png" /></div>
        <div class="client-bg">
          <img src="@/assets/images/kerberos-icon.png" />
        </div>
        <div class="client-bg">
          <img src="@/assets/images/entetsu-icon.png" />
        </div>
        <div class="client-bg">
          <img src="@/assets/images/kerberos-icon.png" />
        </div>
        <div class="client-bg">
          <img src="@/assets/images/entetsu-icon.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-clients {
  .client-header {
    padding: 0 20px;
    margin-top: 50px;
    margin-bottom: 50px;
    @media (max-width: 768px) {
      margin-bottom: 25px;
    }
  }
  .section-carousel {
    margin-bottom: 100px;

    @media (max-width: 1200px) {
      .client-bg {
        display: none;
      }
    }

    @media (max-width: 768px) {
      justify-content: space-around !important;
      margin-bottom: 50px;
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
