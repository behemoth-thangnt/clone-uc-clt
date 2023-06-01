<template>
  <div class="header-menu" :class="{ 'sub-bg': $route.path == '/blogs' }">
    <ul class="list-menu">
      <li class="logo">
        <nuxt-link to="/"><img :src="logo" alt="Logo Behemoth" /></nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" :class="{ active: $route.path == '/' }">
          {{ $t("menu.home") }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/"
        >
          {{ $t("menu.portfolio") }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/"
          >{{ $t("menu.members") }}</nuxt-link
        >
      </li>
      <li>
        <nuxt-link to="/">{{
          $t("menu.blogs")
        }}</nuxt-link>
      </li>
    </ul>

    <a-dropdown class="languages">
      <a class="ant-dropdown-link" @click.prevent>
        <SvgVietNam v-if="store.lang === 'vi'" />
        <SvgJapanese v-if="store.lang === 'ja'" />
        <SvgEnglish v-if="store.lang === 'en'" />
      </a>
      <template #overlay>
        <a-menu v-model="$i18n.locale">
          <a-menu-item key="vi" @click="switchLocale('vi')">
            <template #icon><SvgVietNam /></template>
            <strong> VI </strong>
          </a-menu-item>
          <a-menu-item key="ja" @click="switchLocale('ja')">
            <template #icon><SvgJapanese /></template>
            <strong> JA </strong>
          </a-menu-item>
          <a-menu-item key="en" @click="switchLocale('en')">
            <template #icon><SvgEnglish /></template>
            <strong> EN </strong>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
<script>
import logo from "@/assets/images/logo.png";
import SvgSolarGlobal from "@/assets/svg/SvgSolarGlobal.vue";
import SvgJapanese from "@/assets/svg/SvgJapanese.vue";
import SvgEnglish from "@/assets/svg/SvgEnglish.vue";
import SvgVietNam from "@/assets/svg/SvgVietNam.vue";

import { markRaw } from "vue";
import { useI18n } from "vue-i18n";
import { computed, watch, watchEffect } from "vue";
import { useGlobalStore } from "~/store/global";

export default {
  data() {
    return {
      logo,
    };
  },

  components: {
    SvgSolarGlobal,
    SvgVietNam,
    SvgEnglish,
    SvgJapanese,
  },

  setup() {
    const i18n = useI18n();
    const store = useGlobalStore();
    const component = ref(markRaw(SvgSolarGlobal));

    watch(
      () => store.lang,
      (value) => {
        i18n.locale.value = value;
      },
      { immediate: true }
    );

    watchEffect(() => {
      switch (store.lang) {
        case "en":
          component.value = markRaw(SvgEnglish);
          break;
        case "ja":
          component.value = markRaw(SvgJapanese);
          break;
        case "vi":
          component.value = markRaw(SvgVietNam);
          break;
        default:
          component.value = markRaw(SvgSolarGlobal);
          break;
      }
    });

    function switchLocale(key) {
      store.lang = key;
    }

    return {
      switchLocale,
      component,
      store,
    };
  },
};
</script>
<style lang="scss" scoped>
.sub-bg {
  background-color: #fff7f4;
}
.header-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px 0 50px;
  ul.list-menu {
    display: flex;
    align-items: center;
    gap: 80px;
    list-style-type: none;
    margin-bottom: 0;
    padding-left: 0;
    li {
      &.logo {
        a {
          display: inline-block;
          padding: 20px 0;
          img {
            width: 250px;
            height: 50px;
            object-fit: contain;
          }
        }
      }
      a {
        color: black;
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
        text-transform: uppercase;
        &:hover {
          color: #ff8761;
        }
        &.active {
          color: #ff8761;
        }
      }
    }
  }
  @media (max-width: 765px) {
    ul.list-menu {
      gap: 20px;
      li {
        &.logo {
          a {
            img {
              width: 150px;
            }
          }
        }
        a {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
