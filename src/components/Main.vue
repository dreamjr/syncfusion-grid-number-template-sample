<template>
  <div class="hello">
    <div id="inputNumberArea">
      {{numberData}}
      <br>
      <input-number v-model="numberData" width="100px"></input-number>
    </div>
    <br><br>
    <div id="gridArea">
      <ejs-grid ref="grid" :dataSource="data" :editSettings="editSettings" :allowFiltering="true" :filterSettings="defaultFilterSettings" :load="load">
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
          <e-column field='Freight' headerText='Freight' textAlign='Right' type='number' format='N' width=90 allowFiltering="true" :editTemplate="gridInputNumberEditTemplate"></e-column>
          <!--<e-column field='Freight' headerText='Freight' textAlign='Right' type='number' format='N'
                    width=90 allowFiltering="true" :editTemplate="gridInputNumberEditTemplate" :valueAccessor="freightValueAccessor"></e-column>-->
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>

<script>
  import InputNumber from './common/InputNumber';
  import GridInputNumberEditTemplate from './common/gridTemplate/GridInputNumberEditTemplate';
  import { Page, Toolbar, Edit, Filter } from "@syncfusion/ej2-vue-grids";

  export default {
    name: 'Main',
    components: {InputNumber},
    data () {
      return {
        numberData: 111,
        data:  [
          { OrderID: 10248, CustomerID: 'VINET', Freight: 24 },
          { OrderID: 10249, CustomerID: 'TOMSP', Freight: 33 },
          { OrderID: 10250, CustomerID: 'HANAR', Freight: 222 },
          { OrderID: 10251, CustomerID: 'VICTE', Freight: 0 },
          { OrderID: 10252, CustomerID: 'SUPRD', Freight: 123 },
          { OrderID: 10253, CustomerID: 'HANAR', Freight: 0 },
          { OrderID: 10254, CustomerID: 'CHOPS', Freight: 25555 },
          { OrderID: 10255, CustomerID: 'RICSU', Freight: 244 },
          { OrderID: 10256, CustomerID: 'WELLI', Freight: 21 }
        ],
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
        defaultFilterSettings: { type: "Menu" }
      };
    },
    methods: {
      gridInputNumberEditTemplate: () =>
        GridInputNumberEditTemplate("Freight"),
      freightValueAccessor: (field, data) => {
        const fieldData = data[field];

        if(fieldData ===0) {
          return "-";
        } else {
          return fieldData.toLocaleString();
        }
      },
      load() {
        this.$refs.grid.ej2Instances.element.addEventListener("mousedown", function(e) {
          var instance = this.ej2_instances[0];
          if (e.target.classList.contains("e-rowcell")) {
            let index = parseInt(e.target.getAttribute("Index"));
            let colindex = parseInt(e.target.getAttribute("aria-colindex"));
            let field = instance.getColumns()[colindex].field;
            instance.editModule.saveCell();
            instance.editModule.editCell(index, field);
          };
        });
      }
    },
    provide: {
      grid: [Page, Edit, Toolbar, Filter]
    }
  };
</script>
