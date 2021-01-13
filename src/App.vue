<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import { GridPlugin } from '@syncfusion/ej2-vue-grids';
  import Vue from 'vue';

  Vue.use(GridPlugin);

  export default {
    name: 'App'
  };
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
