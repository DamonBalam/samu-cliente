<template>
  <panel-layout>
    <navbar-component />
    <div class="px-10 mt-10 animate__animated animate__fadeInUp">
      <h1 class="text-dark texto-cairo-bold text-5xl mb-5">Órdenes</h1>
      <div class="contenedor-busqueda mt-4 flex gap-2">
        <select
          name="filtro"
          id="filtro"
          class="bg-transparent border-none texto-cairo-semi-bold text-2xl focus:outline-none"
        >
          <option value="filtrar">Filtrar</option>
        </select>
        <input
          type="text"
          placeholder="Nombre del producto o referencia"
          class="w-full bg-transparent rounded-full"
        />
      </div>

      <!-- COMPONENTE DE ORDENES  -->
      <div class="w-full bg-white border-none rounded-md mt-4 p-3">
        <orden-component
          :pedido-numero="1"
          pedido-nombre="camiseta essentials"
          pedido-subnombre="linear logo"
          talla="L"
          precio="$87.000"
          estado-pedido="Pago"
          fecha="jun 14"
        />
        <hr class="my-2 border-gray-800" />
        <orden-component
          :pedido-numero="2"
          pedido-nombre="camiseta essentials"
          pedido-subnombre="linear logo"
          talla="L"
          precio="$87.000"
          estado-pedido="Procesando"
          pedido-color="morado"
          fecha="jun 28"
        />
        <hr class="my-2 border-gray-800" />

        <orden-component
          :pedido-numero="3"
          pedido-nombre="camiseta essentials"
          pedido-subnombre="linear logo"
          talla="L"
          precio="$87.000"
          estado-pedido="Error"
          pedido-color="magenta"
          fecha="jul 1"
        />

        <paginacion-component />
      </div>
    </div>
  </panel-layout>
</template>

<script>
import NavbarComponent from "~/components/ui/NavbarComponent.vue";
import OrdenComponent from "~/components/ui/OrdenComponent.vue";
import PanelLayout from "~/layouts/PanelLayout.vue";
export default {
  components: { PanelLayout, OrdenComponent, NavbarComponent },
  name: "OrdenesScreen",
};
</script>

<style  scoped>
</style>
