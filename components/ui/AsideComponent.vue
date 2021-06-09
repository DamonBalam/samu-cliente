<template>
  <aside class="w-1/5">
    <div class="bg-cyan">
      <router-link to="/control-panel/panel" class="mx-auto">
        <img
          src="~/assets/brand/logo.png"
          class="logo mx-auto"
          alt="Logo Samu"
        />
      </router-link>
    </div>
    <div>
      <span class="block px-6 texto-cairo-light mt-5">
        Gestión de la Tienda
      </span>
      <nav class="flex flex-col w-full">
        <router-link
          to="/control-panel/panel"
          class="block texto-cairo-semi-bold cursor-pointer nav-item py-2 px-6"
          active-class="active-item"
          >Panel de Control</router-link
        >

        <router-link
          to="/control-panel/ordenes"
          active-class="active-item"
          class="block texto-cairo-semi-bold cursor-pointer nav-item py-2 px-6"
          >Órdenes</router-link
        >

        <router-link
          to="/control-panel/productos"
          active-class="active-item"
          class="block texto-cairo-semi-bold cursor-pointer nav-item py-2 px-6"
          >Productos</router-link
        >

        <!-- <router-link
          to="/control-panel/informes"
          active-class="active-item"
          class="block texto-cairo-semi-bold cursor-pointer nav-item py-2 px-6"
          >Informes</router-link
        > -->
      </nav>
    </div>
    <div>
      <!-- <span class="block px-6 texto-cairo-light mt-5">Configuración</span> -->
      <a
        @click="activarConfiguracion"
        class="block text-left texto-cairo-semi-bold cursor-pointer nav-item py-2 px-6"
        :class="{ 'active-dropdown': isActive }"
      >
        Configuración
      </a>
      <nav
        v-if="isActive"
        class="flex flex-col w-full animate__animated animate__fadeIn"
      >
        <!-- :class="{ animate__fadeOut: !isActive, animate__fadeIn: isActive }" -->
        <router-link
          to="/control-panel/configuracion/general/perfil-tienda"
          active-class="active-item"
          class="block bg-gray-200 texto-cairo-semi-bold cursor-pointer nav-item py-2 px-6"
          >General</router-link
        >
        <router-link
          to="/control-panel/configuracion/impuestos"
          active-class="active-item"
          class="block bg-gray-200 texto-cairo-semi-bold cursor-pointer nav-item py-2 px-6"
          >Impuestos</router-link
        >
        <router-link
          to="/control-panel/configuracion/legal"
          active-class="active-item"
          class="block bg-gray-200 texto-cairo-semi-bold cursor-pointer nav-item py-2 px-6"
          >Legal</router-link
        >
        <router-link
          to="/control-panel/configuracion/correo"
          active-class="active-item"
          class="block bg-gray-200 texto-cairo-semi-bold cursor-pointer nav-item py-2 px-6"
          >Correo</router-link
        >
      </nav>
    </div>
    <div class="fixed bottom-0 w-1/5 flex justify-center">
      <button
        @click="logout()"
        class="mx-auto bg-white p-3 mb-20 font-bold texto-hover-amarillo text-xl focus:outline-none"
      >
        Cerrar sesión
      </button>
    </div>
  </aside>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "AsideComponent",
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    ...mapState(["usuario", "token", "url"]),
  },
  methods: {
    ...mapMutations(["SET_AUTH"]),
    logout() {
      axios
        .post(
          `${this.url}logout`,
          {},
          {
            headers: {
              Authorization: this.token,
            },
          }
        )
        .then((res) => {
          if (res.data.code === 200) {
            this.SET_AUTH(false);
            localStorage.clear();
            this.$router.push("/login");
          }
        });
    },
    activarConfiguracion() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style scoped>
.aside {
  display: none;
}

@media (min-width: 928px) {
  .aside {
    display: block;
  }
}
</style>
