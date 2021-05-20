<template>
  <auth-layout>
    <section class="hero">
      <div class="hero-img"></div>
      <div class="container px-5 mx-auto mt-10 md:mt-0 lg:pt-20 flex sm:mb-40">
        <div
          class="xl:w-1/3 lg:w-1/2 md:w-1/2 md:ml-auto lg:ml-auto w-full md:mt-0 relative z-10 animate__animated animate__fadeInRight"
        >
          <h1 class="text-black text-5xl my-5 texto-cairo-bold">
            ¡Vende online con Samu.app!
          </h1>
          <p class="uppercase text-black text-xl">
            Juntos en camino al éxito. Impulsa tu negocio al máximo con
            nosotros.
          </p>
          <div class="bg-white p-5 flex flex-col shadow-md mt-10">
            <h2 class="text-black text-lg font-xl texto-cairo-semi-bold">
              Acceder a tu cuenta
            </h2>
            <div v-if="loading" class="flex mx-auto py-5">
              <spin-component />
            </div>
            <form v-else @submit.prevent="validar">
              <div class="my-4">
                <input
                  type="email"
                  id="email"
                  v-model="formulario_login.email"
                  name="email"
                  placeholder="E-mail"
                  autocomplete="off"
                  class="w-full bg-gray-300 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  :class="{
                    'border-red-500': error,
                    'border-4': error,
                  }"
                />
              </div>
              <div class="mb-4">
                <input
                  autocomplete="off"
                  v-model="formulario_login.password"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  class="w-full bg-gray-300 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  :class="{
                    'border-red-500': error,
                    'border-4': error,
                  }"
                />
              </div>

              <alert-component v-if="error" :msg="msgError" />

              <div class="my-4">
                <nuxt-link
                  to="/recuperar-cuenta"
                  class="texto-color-cyan texto-hover-magenta border-0 py-4 texto-cairo-bold"
                  >¿Olvidaste tu contraseña?</nuxt-link
                >
              </div>
              <div class="container__auth-botones">
                <button
                  class="w-auto mb-4 md:mb-0 uppercase text-white bg-black border-0 py-2 px-6 text-lg texto-hover-amarillo texto-cairo-bold"
                  @click="validar"
                >
                  Ingresar
                </button>
                <nuxt-link
                  to="/registro"
                  class="uppercase text-center texto-color-cyan texto-hover-magenta border-0 py-2 px-6 texto-cairo-bold"
                >
                  CREAR UNA NUEVA CUENTA
                </nuxt-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </auth-layout>
</template>

<script>
import AuthLayout from "~/layouts/AuthLayout.vue";
import AlertComponent from "~/components/ui/AlertComponent.vue";
import SpinComponent from "~/components/ui/SpinComponent.vue";
export default {
  components: { AuthLayout, AlertComponent, SpinComponent },
  data() {
    return {
      error: false,
      msgError: "",
      loading: false,
      formulario_login: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    validar() {
      if (
        this.formulario_login.email === null ||
        this.formulario_login.password === null ||
        this.formulario_login.email === "" ||
        this.formulario_login.password === ""
      ) {
        this.loading = false;
        this.error = true;
        this.msgError = "Complete los campos porfavor";
      } else {
        this.error = false;
        this.msgError = "";
        this.login();
      }
    },
  },
};
</script>

<style scoped>
.container__auth-botones {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
}
@media (min-width: 768px) {
  .container__auth-botones {
    grid-template-columns: 40% 60%;
    align-items: center;
  }
}

.hero {
  position: relative;
  height: calc(100vh + 40vh);
  overflow-x: hidden;
  overflow-y: hidden;
}

.hero-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  background-image: url("~/assets/brand/Bg_1_Movil.jpg");
}

@media (min-width: 768px) {
  .hero {
    position: relative;
    height: calc(100vh);
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .hero-img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    /*padding-top: 100px;*/
    /*margin-bottom: 70px;*/
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    background-image: url("~/assets/brand/Bg_1.jpg");
  }
}

@media (min-width: 1280px) {
  .hero {
    position: relative;
    height: calc(100vh - 132px);
    overflow-x: hidden;
    overflow-y: hidden;
  }
}
</style>
