<template>
    <div class="dropdown">
      <button class="filterbtn border-0 py-2 px-4 rounded text-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" @click="addDefaultFilter">
        <b-icon-plus class="icon"></b-icon-plus> Add Filter
      </button>
      <div class="filterDropDown dropdown-menu rounded bg-light p-3" aria-labelledby="dropdownMenuButton1" @click.stop>
          <p class="mb-2">Display all records</p>
          <draggable v-model="filtersAdded" @start="drag=true" @end="drag=false" item-key="id" handle=".dragIcon" @change="update">
            <template #item="{element: data}">
                <div class="d-flex gap-2">
                  <span v-if="getIndex(data.id) === 0">Where</span>
                  <div v-else>
                    <select @change="update" v-model="data.precondition" class="filterDropDownList form-select form-select-sm mb-3 width">
                      <option v-for="item in condition" :key="item" :value="item">{{ item }}</option>
                    </select>
                  </div>
                  <select v-model="data.key" @change="addFilter({value: data.id})" class="filterDropDownList form-select form-select-sm mb-3">
                      <option v-for="item in list" :key="item.key" :value="item.key">{{ item.name }}</option>
                  </select>
                  <select @change="update" v-model="data.condition" v-if="data.conditions.length" class="filterDropDownList form-select form-select-sm mb-3">
                      <option v-for="item in data.conditions" :key="item" :value="item">{{ item }}</option>
                  </select>
                  <div v-if="data.key === 'country'">
                    <select @change="update" v-model="data.value" v-if="data.values.length" class="filterDropDownList form-select form-select-sm mb-3">
                        <option v-for="item in data.values" :key="item" :value="item">{{ item }}</option>
                    </select>
                  </div>
                  <div v-else-if="data.key === 'price'">
                    <input class="inputBox" type="number" v-model="data.value" @input="update">
                  </div>
                  <div v-else-if="data.key === 'startDate'">
                    <vue-date-picker v-model="data.value" @closed="update"></vue-date-picker>
                  </div>
                  <div v-else-if="data.key === 'status'">
                    <select
                    class="filterDropDownList form-select form-select-sm mb-3"
                    aria-label=".form-select-lg example"
                    v-model="data.value"
                    @change="update"
                  >
                    <option value="Select">Select</option>
                    <option v-for="value in status" :key="value" :value="value">
                      {{ value }}
                    </option>
                  </select>
                  </div>
                  <div @click="removeFilter(data.id)" v-if="getIndex(data.id) !== 0">
                    <b-icon-trash-fill class="icon"></b-icon-trash-fill>
                  </div>
                  <div class="dragIcon" v-if="getIndex(data.id) !== 0">
                    <b-icon-three-dots-vertical></b-icon-three-dots-vertical>
                  </div>
                </div>
            </template>
          </draggable>
        <button class="addConditionButton border-0 py-2 px-4 rounded" @click.stop="addFilter(undefined)">Add condition</button>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { filteredDefinition, filterType } from "@/types/filter.type";
import {BIconPlus, BIconTrashFill, BIconThreeDotsVertical} from 'bootstrap-icons-vue'
import draggable from 'vuedraggable'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default defineComponent({
  components: { BIconPlus, BIconTrashFill, VueDatePicker, BIconThreeDotsVertical, draggable },
  props: ["list"],
  data() {
    return {
      selectedFilter: "Select",
      filtersAdded: [] as filteredDefinition[],
      showFilter: false,
      condition: ["And", "Or"],
      status: ["On", "Off"],
      drag: false as boolean
    };
  },
  methods: {
    addDefaultFilter() {
        if(this.filtersAdded.length < 1) {
            this.addFilter(undefined)
        }
        this.showFilter = !this.showFilter
    },
    addFilter(e: any) {
      if(e == undefined) {
        this.filtersAdded.push({
          id: Math.random().toLocaleString(),
          key: "none",
          name: "none",
          values: [],
          type: filterType.select,
          conditions: [],
          condition: '',
          value: 'Select',
          precondition: ''
        });
      } else {
        const index = this.filtersAdded.findIndex(x => x.id === e.value)
        this.filtersAdded[index].name = this.list.find((x: any) => x.key == this.filtersAdded[index].key).name
        this.filtersAdded[index].conditions = this.list.find((x: any) => x.key == this.filtersAdded[index].key).conditions
        this.filtersAdded[index].values = this.list.find((x: any) => x.key == this.filtersAdded[index].key).values
      }
    },
    update() {
      this.$emit("onUpdate", this.filtersAdded)
    },
    removeFilter(id: string) {
      this.filtersAdded = this.filtersAdded.filter((x) => x.id != id)
    },
    getIndex(id: string) {
      return this.filtersAdded.findIndex(x => x.id === id)
    }
  },
});
</script>

<style scoped>
.filterDropDownList {
  width: 134px;
}
.width {
  width: 80px;
}
.filterbtn {
  background-color: #5227cc;
}
.addConditionButton {
  background-color: #e9ecef;
}
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