<template>
  <panel-layout>
    <navbar-image-component class="animate__animated animate__backInDown" />
    <div class="px-10 mt-10 animate__animated animate__backInDown">
      <h1 class="text-dark text-2xl mb-5">Resumen General</h1>
      <div class="flex flex-col gap-3">
        <mini-card-component
          :valorTexto="'$4256'"
          :titulo="'venta total'"
          colorTitulo="cyan"
        />
        <mini-card-component
          :valorTexto="'50.000'"
          :titulo="'visitas'"
          colorTitulo="magenta"
        />
      </div>
    </div>
  </panel-layout>
</template>

<script>
import MiniCardComponent from "~/components/ui/MiniCardComponent.vue";
import NavbarImageComponent from "~/components/ui/NavbarImageComponent.vue";
import PanelLayout from "~/layouts/PanelLayout.vue";
export default {
  components: { PanelLayout, NavbarImageComponent, MiniCardComponent },
  name: "PanelScreen",
  // middleware: "auth",
};
</script>

<style  scoped>
</style>
