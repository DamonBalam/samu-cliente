<template>
  <panel-layout>
    <navbar-component />
    <div class="px-10 mt-10 animate__animated animate__fadeInUp">
      <h1 class="text-dark texto-cairo-bold text-5xl mb-5">Productos</h1>
      <!-- ACCIONES -->
      <div class="w-full">
        <button
          @click="showModalNew = true"
          class="texto-color-cyan texto-cairo-bold focus:outline-none text-2xl mr-2"
        >
          + Nuevo producto
        </button>
        .
        <button
          @click="showModalImport = true"
          class="texto-hover-cyan focus:outline-none text-2xl ml-2"
        >
          Importar produtos
        </button>
      </div>
      <!-- BUSCADOR/FILTRO -->
      <div class="contenedor-busqueda w-ful mt-4 mb-4 flex gap-2">
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

      <!-- COMPONENTE DE PRODUCTOS -->
      <div class="w-full bg-white border-none rounded-md mt-4 p-3">
        <producto-component />
        <hr class="my-2 border-gray-800" />

        <producto-component />
        <hr class="my-2 border-gray-800" />

        <producto-component />

        <paginacion-component />
      </div>

      <!-- Modal -->
      <modal-component v-if="showModalNew">
        <h3 slot="header" class="text-dark texto-cairo-bold text-2xl mb-5">
          Nuevo Producto
        </h3>
        <div slot="body">
          <span>Aqui va el formulario de registro</span>
        </div>
        <div slot="footer" class="flex gap-2 justify-end">
          <button
            class="px-3 py-1 bg-magenta uppercase texto-cairo-bold rounded-md text-white"
            @click="showModalNew = false"
          >
            Cancelar
          </button>
          <button
            class="px-3 py-1 bg-cyan uppercase texto-cairo-bold rounded-md text-white"
            @click="showModalNew = false"
          >
            Aceptar
          </button>
        </div>
      </modal-component>

      <modal-component v-if="showModalImport" @close="showModalImport = false">
        <h3 slot="header" class="text-dark texto-cairo-bold text-2xl mb-5">
          Importar Productos
        </h3>
        <div slot="body">
          <span>Aqui va el formulario de importar Productos</span>
        </div>
        <div slot="footer" class="flex gap-2 justify-end">
          <button
            class="px-3 py-1 bg-magenta uppercase texto-cairo-bold rounded-md text-white"
            @click="showModalImport = false"
          >
            Cancelar
          </button>
          <button
            class="px-3 py-1 bg-cyan uppercase texto-cairo-bold rounded-md text-white"
            @click="showModalImport = false"
          >
            Aceptar
          </button>
        </div>
      </modal-component>
    </div>
  </panel-layout>
</template>

<script>
import ModalComponent from "~/components/ui/ModalComponent.vue";
import NavbarComponent from "~/components/ui/NavbarComponent.vue";
import PaginacionComponent from "~/components/ui/PaginacionComponent.vue";
import ProductoComponent from "~/components/ui/ProductoComponent.vue";
import PanelLayout from "~/layouts/PanelLayout.vue";
export default {
  components: {
    PanelLayout,
    NavbarComponent,
    PaginacionComponent,
    ProductoComponent,
    ModalComponent,
  },
  name: "ProductosScreen",
  data() {
    return {
      showModalNew: false,
      showModalImport: false,
    };
  },
};
</script>

<style  scoped>
.producto-contenedor-img {
  width: 200px;
}
</style>
