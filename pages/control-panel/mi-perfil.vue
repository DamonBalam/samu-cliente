<template>
  <panel-layout>
    <navbar-component />
    <div class="px-10 mt-10 animate__animated animate__fadeInUp">
      <h1 class="text-dark texto-cairo-bold text-5xl">Mi Perfil</h1>
    </div>
  </panel-layout>
</template>

<script>
import NavbarComponent from '~/components/ui/NavbarComponent.vue';
import PanelLayout from "~/layouts/PanelLayout.vue";
export default {
  components: { PanelLayout, NavbarComponent },
  name: "MiPerfilScreen",
};
</script>

<style  scoped>
</style>
