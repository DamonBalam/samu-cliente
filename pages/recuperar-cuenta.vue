<template>
  <auth-layout>
    <section class="hero">
      <div class="hero-img"></div>
      <div
        class="container px-5 mx-auto mt-10 md:mt-0 lg:pt-20 flex sm:mb-40 justify-center"
      >
        <div class="w-1/2 animate__animated animate__fadeInUp">
          <h1 class="uppercase text-black text-5xl my-5 font-extrabold">
            venda online con samu.app
          </h1>
          <p class="uppercase text-black text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            assumenda
          </p>
          <div class="bg-white p-5 flex flex-col shadow-md mt-10">
            <h2 class="text-black text-lg font-xl uppercase font-extrabold">
              Recuperar Contraseña
            </h2>
            <div v-if="loading" class="flex mx-auto py-5">
              <spin-component />
            </div>
            <div v-else>
              <div class="my-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  v-model="formulario_login.email"
                  autocomplete="off"
                  class="w-full bg-gray-300 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  :class="{
                    'border-red-500': error,
                    'border-4': error,
                  }"
                />
              </div>

              <alert-component v-if="error" :msg="msgError" />

              <div class="container__auth-botones mb-5">
                <button
                  class="w-auto uppercase text-white bg-black font-bold border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 text-lg"
                  @click="validar"
                >
                  Recuperar
                </button>
              </div>
            </div>
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
  name: "RegistroPage",
  middleware: "auth",
  components: { AuthLayout, SpinComponent, AlertComponent },
  data() {
    return {
      ruta: "http://samu.test/api/",
      error: false,
      msgError: "",
      loading: false,
      formulario_login: {
        email: null,
        // password: null,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
