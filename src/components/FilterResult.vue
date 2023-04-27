<template>
  <div>
    <base-button addition-classes="violet text-white" @performTask="openFilterDropDown">
      <b-icon-plus class="icon"></b-icon-plus> Add filter
    </base-button>
    <div class="filterDropDown rounded bg-light p-3" v-if="showFilter">
      <p class="mb-2">Display all records</p>
      <div class="d-flex gap-2" v-for="(filter, index) in filtersAdded" :key="filter.key">
        <span v-if="index === 0">Where</span>
        <div v-else>
          <drop-down :item="condition" :is-condition="true" :modal-value="filter.precondition != '' ? filter.precondition : 'Select'" :index="index" value-to-update="precondition" @performTask="update"></drop-down>
        </div>
        <drop-down :item="list" :isList="true" :index="index" :modal-value="filter.name != 'none' ? filter.name : 'Select'" @performTask="addFilter" value-to-update="key"></drop-down>
        <drop-down :item="filter.conditions" :index="index" v-if="filter.conditions.length" value-to-update="condition" @performTask="update"></drop-down>
        <div v-if="filter.key === 'country'">
          <drop-down :item="filter.values" :index="index" v-if="filter.values?.length" value-to-update="values" @performTask="update"></drop-down>
        </div>
        <div v-else-if="filter.key === 'price'">
          <input class="inputBox" type="number" v-model="filter.value" @input="update({update: 'date'})">
        </div>
        <div v-else-if="filter.key === 'startDate'">
          <vue-date-picker v-model="filter.value" @closed="update({update: 'date'})"></vue-date-picker>
        </div>
        <div v-else-if="filter.key === 'status'">
          <drop-down :item="status" :index="index" value-to-update="values" @performTask="update"></drop-down>
        </div>
        <div @click="removeFilter(index)">
          <b-icon-trash-fill class="icon" v-if="index !== 0"></b-icon-trash-fill>
        </div>
        <div>
          <b-icon-three-dots-vertical class="icon" v-if="index !== 0"></b-icon-three-dots-vertical>
        </div>
      </div>
      <base-button addition-classes="light-grey" @performTask="addFilter(undefined)">Add condition</base-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DropDown from "./common/DropDown.vue";
import { filteredDefinition, filterType } from "@/types/filter.type";
import BaseButton from "./common/BaseButton.vue";
import {BIconPlus, BIconTrashFill, BIconThreeDotsVertical} from 'bootstrap-icons-vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default defineComponent({
  components: { DropDown, BaseButton, BIconPlus, BIconTrashFill, VueDatePicker, BIconThreeDotsVertical },
  props: ["list"],
  data() {
    return {
      selectedFilter: "Select",
      filtersAdded: [] as filteredDefinition[],
      showFilter: false,
      condition: ["And", "Or"],
      status: ["On", "Off"]
    };
  },
  methods: {
    openFilterDropDown() {
        if(this.filtersAdded.length < 1) {
            this.addFilter(undefined)
        }
        this.showFilter = !this.showFilter
    },
    addFilter(e: any) {
      if(e == undefined) {
        this.filtersAdded.push({
          key: "none",
          name: "none",
          values: [],
          type: filterType.select,
          conditions: [],
          condition: '',
          value: '',
          precondition: ''
        });
      } else {
        this.filtersAdded[e.index].key = this.list.find((x: any) => x.name == e.value).key
        this.filtersAdded[e.index].name = this.list.find((x: any) => x.name == e.value).name
        this.filtersAdded[e.index].conditions = this.list.find((x: any) => x.name == e.value).conditions
        this.filtersAdded[e.index].values = this.list.find((x: any) => x.name == e.value).values
      }
    },
    update(e: any) {
      if(e.update === "key") {
        this.filtersAdded[e.index].key = e.value
      } else if(e.update === "condition") {
        this.filtersAdded[e.index].condition = e.value
      } else if(e.update === "values") {
        this.filtersAdded[e.index].value = e.value
      } else if(e.update === "precondition") {
        this.filtersAdded[e.index].precondition = e.value
      }
      this.$emit("onUpdate", this.filtersAdded)
    },
    removeFilter(index: number) {
      this.filtersAdded.splice(index, 1)
    }
  },
});
</script>

<style scoped>
.filterDropDown {
  min-height: 128px;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  position: absolute;
}
.icon {
  font-size: 1.5rem;
}
.inputBox {
  outline: none;
  width: 134px;
}
:deep(.dp__input_wrap) {
  width: 134px;
}
</style>