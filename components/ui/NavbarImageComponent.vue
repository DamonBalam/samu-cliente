<template>
  <div class="bg-cyan imagen-navbar">
    <div class="flex justify-between px-6 pt-4">
      <div class="flex text-white">
        <a href="#" class="px-3 text-xl text-white texto-hover-magenta"
          >¿Qué es Samu?</a
        >
        <span>.</span>
        <a href="#" class="px-3 text-xl text-white texto-hover-magenta">Blog</a>
        <span>.</span>
        <a href="#" class="px-3 text-xl text-white texto-hover-magenta"
          >Ofertas %</a
        >
      </div>
      <div class="flex text-white">
        <router-link to="/control-panel/mi-perfil" class="px-3 text-xl text-white texto-hover-magenta"
          >Mi perfil</router-link
        >
        |
        <a href="#" class="px-3 text-xl text-white texto-hover-magenta"
          >Ayuda</a
        >
        |
        <a @click="logout" href="#" class="px-3 text-xl text-white texto-hover-magenta"
          >Cerrar sesión</a
        >
      </div>
    </div>
    <hr class="mt-5 mx-auto hr-auto" />

    <div class="flex flex-col mt-20 justify-center">
      <h3 class="uppercase texto-cairo-bold text-9xl text-white mx-auto">
        ¡saludos!
      </h3>
      <h4
        class="uppercase text-white mx-auto mt-5 text-xl texto-cairo-bold espaciado"
      >
        tienda samu.app
      </h4>
      <a
        href="#"
        class="uppercase cursor-pointer texto-cairo-bold bg-cyan text-white d-block mx-auto mt-5 text-xl px-6 py-3 bg-hover-magenta"
        >www.samu.app</a
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "NavbarImageComponent",
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
.imagen-navbar {
  height: 50vh;
  background-size: cover;
  background-image: url("~/assets/brand/bannerNavbar.png");
}
.hr-auto {
  max-width: calc(76vw);
}
.espaciado {
  letter-spacing: 0.4em;
}
</style>
