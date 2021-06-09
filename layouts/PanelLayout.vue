<template>
  <div class="flex">
    <!-- ASIDE -->

    <aside-component />
    <!-- ! MAIN -->
    <main class="flex-1 overflow-auto bg-gray-200 h-screen">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import AsideComponent from "@/components/ui/AsideComponent.vue";
import NavbarImageComponent from "~/components/ui/NavbarImageComponent.vue";
export default {
  components: { AsideComponent, NavbarImageComponent },
  name: "PanelIndex",
};
</script>

<style scoped>
</style>
