<template>
  <div class="text-center m-0 p-0">
    <ul class="pagination">
      <li><a href="#">«</a></li>
      <li><a class="active" href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
      <li><a href="#">6</a></li>
      <li><a href="#">7</a></li>
      <li><a href="#">»</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PaginacionComponent",
};
</script>

<style  scoped>
ul.pagination {
  display: inline-block;
  padding: 0;
  margin: 0;
}

ul.pagination li {
  display: inline;
}

ul.pagination li a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  border: 1px solid #ddd;
  border-radius: 50%;
  margin: 0 4px;
}

ul.pagination li a.active {
  background-color: #06b0d7;
  color: white;
  border: 1px solid #06b0d7;
}

ul.pagination li a:hover:not(.active) {
  background-color: #ddd;
}
</style>
