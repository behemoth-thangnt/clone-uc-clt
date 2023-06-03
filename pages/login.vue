<template>
  <div class="container-xl">
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-7">
        <a-card class="card border-0 mb-0">
          <div class="card-header bg-transparent">
            <h5 class="text-dark text-center mt-2 mb-3">Sign in</h5>
          </div>
          <a-card class="card-body px-lg-5 pt-0">
            <div class="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div>
            <form role="form" class="text-start">
              <div class="mb-3">
                <a-input
                  v-model:value="email"
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  aria-label="Email"
                />
              </div>
              <div class="mb-3">
                <a-input
                  v-model:value="password"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  aria-label="Password"
                />
              </div>
              <div class="form-check form-switch">
                <a-input
                v-model:value="rememberMe"
                  class="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                />
                <a-label class="form-check-label" for="rememberMe">
                  Remember me
                </a-label>
              </div>
              <div class="text-center">
                <a-button
                  type="primary"
                  class="btn btn-primary w-100 my-4 mb-2"
                  @click="login"
                >
                  Sign in
                </a-button>
              </div>
            </form>
          </a-card>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>
import { adminsLogin } from "~~/graphql/auth/login";
import { useFetchByGraphQl } from "~~/repositories";
import { ref } from "vue";
import { message } from "ant-design-vue";
import { get } from "lodash";
import { useGlobalStore } from "@/store/global";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const axios = useNuxtApp().$axios;
    const email = ref("");
    const password = ref("");
    const rememberMe = ref(false);
    const store = useGlobalStore();
    const router = useRouter();

    async function login() {
      try {
        const data = await useFetchByGraphQl(axios, adminsLogin, {
          email: email.value,
          password: password.value,
          rememberMe: rememberMe.value,
        });

        const token = get(data, "data.data.adminsSignIn.token");

        if (token) {
          store.setToken(token);

          message.success("Success");
          router.push("/");
        } else {
          const error = get(data, "data.data.adminsSignIn.message");
          message.error(error);
        }
      } catch (error) {
        message.error(error);
      }
    }

    return {
      login,
      email,
      password,
    };
  },
});
</script>
