<template>
  <div>
    <div class="footer-content">
      <img
        src="@/assets/images/wave_footer.png"
        alt="Wave Footer"
        class="img-fluid w-100"
      />
      <div class="footer-menu">
        <div class="container-xl d-flex footer-menu-frame">
          <div class="footer-title">
            <div class="footer-logo mb-3">
              <img src="@/assets/images/logo.png" alt="logo" />
            </div>
            <div class="email-contact">
              <input
                type="email"
                class="email-input"
                placeholder="Enter your email address..."
              />
              <button>Register</button>
            </div>
          </div>
          <div class="footer-info">
            <ul class="about">
              <li class="item-title">About us</li>
              <li>Porfolio</li>
            </ul>

            <ul class="navigation">
              <li class="item-title">Navigation</li>
              <li>Who we are</li>
              <li>Who we offer</li>
              <li>Our clients</li>
              <li>Technologies We Serve</li>
              <li>Contact</li>
            </ul>

            <ul class="info">
              <li><SvgPhone></SvgPhone>Tel: (+84)24 730 271 68</li>
              <li><SvgMail></SvgMail>Email: contact@behemoth.vn</li>
              <li><SvgGlobal></SvgGlobal>Website: https://behemoth.vn</li>
              <li class="map-info">
                <SvgMap></SvgMap>Address: 3rd Floor, Nam Do Complex, 609 Truong
                Dinh, Thinh Liet, Hoang Mai, Ha Noi, Viet Nam
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="copy-right">© 2020 BehemothVN. All Rights Reserved.</div>
  </div>
</template>
<script>
import SvgPhone from "@/assets/svg/SvgPhone.vue";
import SvgMail from "@/assets/svg/SvgMail.vue";
import SvgGlobal from "@/assets/svg/SvgGlobal.vue";
import SvgMap from "@/assets/svg/SvgMap.vue";
export default {
  components: {
    SvgPhone,
    SvgMail,
    SvgGlobal,
    SvgMap,
  },
};
</script>
<style lang="scss" scoped>
.footer-content {
  img {
    position: relative;
    top: 2px;
  }
  .footer-menu {
    background-color: #ff8761;
    .footer-menu-frame {
      gap: 50px;
      padding-bottom: 50px;
      .footer-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        .footer-logo {
          width: 200px;
          height: 50px;
          background-color: white;
          border-radius: 10px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .email-contact {
          display: flex;
          position: relative;
          input {
            width: 400px;
            padding: 15px 25px;
            border: none;
            border-radius: 30px;
            &:active,
            &:focus {
              outline: none;
            }
          }
          button {
            position: absolute;
            top: 50%;
            right: 5px;
            transform: translate(0, -50%);
            color: white;
            width: 150px;
            height: 45px;
            background-color: #ff8761;
            border-radius: 50px;
            border: none;
          }
        }
      }
      .footer-info {
        display: flex;
        gap: 100px;
        ul {
          color: white;
          list-style-type: none;
          margin: 0;
          padding: 0;
          li {
            font-size: 14px;
            margin-bottom: 10px;
            &.item-title {
              text-transform: uppercase;
              font-weight: bold;
            }
          }
        }
        .info {
          li {
            display: flex;
            align-items: center;
            svg {
              width: 20px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
.copy-right {
  font-size: 12px;
  text-align: center;
  width: 100%;
  padding: 5px 0;
  background-color: #ffc2a7;
}
@media (max-width: 765px) {
  .footer-content {
    .footer-menu {
      .footer-menu-frame {
        padding-bottom: 30px;
        flex-direction: column;
        .footer-title {
          .footer-logo {
            width: 120px;
            height: 40px;
          }
          .email-contact {
            input {
              font-size: 14px;
              width: 300px;
              padding: 10px 15px;
            }
            button {
              width: 100px;
              height: 35px;
            }
          }
        }
        .footer-info {
          flex-direction: column;
          text-align: center;
          gap: 25px;
          ul {
            width: 100%;
            li {
              margin-bottom: 5px;
            }
          }
          .info {
            li {
              justify-content: center;
              svg {
                width: 15px;
              }
              &.map-info {
                svg {
                  width: 23px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
