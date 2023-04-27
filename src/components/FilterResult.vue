<template>
  <div>
    <button class="filterButton border-0 rounded">
      <i class="bi bi-plus"></i>
      <span @click="openFilterDropDown">Add filter</span>
    </button>
    <div class="filterDropDown rounded bg-light p-3" v-if="showFilter">
      <p class="mb-2">Display all records</p>
      <div class="d-flex gap-2" v-for="(filter, index) in filtersAdded" :key="filter.key">
        <span v-if="index === 0">Where</span>
        <span v-else>Else</span>
        <drop-down :item="list" :isList="true"></drop-down>
        <drop-down :item="filter.conditions"></drop-down>
        <drop-down :item="filter.values"></drop-down>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DropDown from "./common/DropDown.vue";
import { condition, filterDefinition, filterType } from "@/types/filter.type";
export default defineComponent({
  components: { DropDown },
  props: ["list"],
  data() {
    return {
      selectedFilter: "Select",
      filtersAdded: [] as filterDefinition[],
      showFilter: false
    };
  },
  methods: {
    openFilterDropDown() {
        if(this.filtersAdded.length < 1) {
            this.addFilter()
        }
        this.showFilter = !this.showFilter
    },
    addFilter() {
      this.filtersAdded.push({
        key: "country",
        name: "Country",
        values: ["Spain", "Greece"],
        type: filterType.select,
        conditions: [condition.eq, condition.ne],
      });
    },
  },
});
</script>

<style scoped>
.filterButton {
  background-color: #5227cc;
  height: 24px;
  width: 86px;
  font-size: 12px;
}
.filterDropDown {
  min-height: 128px;
  width: fit-content;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
}
.filterDropDownList {
  width: 134px;
}
</style>