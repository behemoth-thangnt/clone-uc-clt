<template>
  <div class="section-contact-us text-center">
    <div class="container">
      <div class="contact-header">
        <div class="intro intro-sm">Get in touch</div>
        <div class="intro intro-bg">CONTACT US</div>
      </div>
      <div class="contact-subtitle mb-5">
        You will be pleased to have chosen us. Start your project now!
      </div>
      <div class="contact-form">
        <form>
          <input class="mb-3" type="text" placeholder="Name *" /> <br />
          <input class="mb-3" type="text" placeholder="Email *" /> <br />
          <input class="mb-3" type="text" placeholder="Message *" /> <br />

          <button class="btn-contact">Send message</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.section-contact-us {
  .contact-subtitle {
    margin-top: 20px;
    font-family: "Quicksand-Regular", sans-serif;
    font-size: 16px;
  }

  .contact-form {
    input {
      padding: 8px 12px;
      display: block;
      width: 80%;
      margin: auto;
      background-color: transparent;
      border: none;
      outline: none;
      border-bottom: 1px solid #000000;
    }

    .btn-contact {
      margin-bottom: 80px;
      background-color: #ff8761;
      border: 2px solid #ff8761;
      font-weight: bold;
      color: white;
      font-family: "Quicksand-Regular", sans-serif;
      padding: 12px 36px;
      border-radius: 30px;

      &:hover {
        background: transparent;
        color: #ff8761;
        transition: 0.3s;
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
