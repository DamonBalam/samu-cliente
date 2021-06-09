<template>
  <div class="bg-cyan flex justify-between">
    <div class="logo-height">
      <router-link to="/control-panel" class="mx-auto hidden">
        <img
          src="/assets/brand/logo.png"
          class="logo mx-auto"
          alt="Logo Samu"
        />
      </router-link>
    </div>
    <div class="flex items-center px-4 text-white">
      <router-link
        to="/control-panel/mi-perfil"
        class="px-2 text-white texto-cairo-semi-bold texto-hover-morado"
        >Mi perfil</router-link
      >
      |
      <a
        href="#"
        class="px-2 text-white texto-cairo-semi-bold texto-hover-morado"
        >Ayuda</a
      >
      |
      <a
        @click="logout"
        class="px-2 text-white texto-cairo-semi-bold texto-hover-morado cursor-pointer"
      >
        Cerrar sesión
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "NavbarComponent",
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
  },
};
</script>

<style  scoped>
.logo-height {
  height: 64px;
}
</style>
