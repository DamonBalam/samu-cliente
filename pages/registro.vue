<template>
  <AuthLayout>
    <section class="hero">
      <div class="hero-img"></div>
      <div class="container px-5 mx-auto mt-10 md:mt-0 lg:pt-20 flex sm:mb-40">
        <div
          class="xl:w-1/3 lg:w-1/2 md:w-1/2 md:ml-auto lg:ml-auto w-full md:mt-0 relative z-10 animate__animated animate__fadeInRight"
        >
          <h1 class=" text-black text-5xl my-5 texto-cairo-bold">
            ¡Comienza con una cuenta
            <span class="texto-color-cyan texto-cairo-bold">gratuita</span>!
          </h1>
          <p class="uppercase text-black text-xl">
            No tengas miedo de reinventarte con Samu. El peor esfuerzo es el que
            no se hace.
          </p>
          <div class="bg-white p-5 mt-10 flex flex-col shadow-md">
            <h2
              class="text-black text-lg font-xl uppercase texto-cairo-semi-bold"
            >
              Crear cuenta
            </h2>
            <div v-if="loading" class="flex mx-auto py-5">
              <spin-component />
            </div>
            <div v-else>
              <div class="my-4">
                <input
                  v-model="formulario_registro.nombre"
                  type="nombre"
                  id="nombre"
                  name="nombre"
                  placeholder="Tú nombre"
                  :class="{
                    'border-red-500': error,
                    'border-4': error,
                  }"
                  class="w-full bg-gray-300 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="mb-4">
                <input
                  v-model="formulario_registro.email"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  :class="{
                    'border-red-500': error,
                    'border-4': error,
                  }"
                  class="w-full bg-gray-300 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="mb-4">
                <input
                  v-model="formulario_registro.password"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  :class="{
                    'border-red-500': error,
                    'border-4': error,
                  }"
                  class="w-full bg-gray-300 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <alert-component v-if="error" :msg="msgError" />
              <div class="container__auth-botones">
                <button
                  @click="validar"
                  class="uppercase text-white bg-black border-0 py-2 px-6 text-lg texto-cairo-bold texto-hover-amarillo"
                >
                  Crear
                </button>
                <div
                  class="flex md:block text-right texto-cairo-bold mt-5 md:mt-0"
                >
                  <p class="mr-3 md:mr-0">¿Ya tienes una cuenta?</p>
                  <router-link
                    to="/login"
                    class="texto-color-cyan texto-cairo-bold texto-hover-magenta"
                    >Iniciar Sesión</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </AuthLayout>
</template>

<script>
import AuthLayout from "~/layouts/AuthLayout.vue";
import AlertComponent from "~/components/ui/AlertComponent.vue";
import SpinComponent from "~/components/ui/SpinComponent.vue";
export default {
  name: "RegistroPage",
  components: { AuthLayout, AlertComponent, SpinComponent },
  data() {
    return {
      loading: false,
      error: false,
      msgError: "",
      formulario_registro: {
        nombre: null,
        email: null,
        password: null,
      },
    };
  },
};
</script>

<style lang="css" scoped>
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
  background-image: url("~/assets/brand/Bg_2_Movil.jpg");
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
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    background-image: url("~/assets/brand/Bg_2.jpg");
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
