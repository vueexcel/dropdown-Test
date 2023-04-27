<template>
  <select
    class="filterDropDownList form-select form-select-sm mb-3"
    :class="isCondition ? 'width' : ''"
    aria-label=".form-select-lg example"
    v-model="valueSelected"
    @change="emitEvent"
  >
    <option value="Select">Select</option>
    <option v-for="value in item" :key="isList ? value.key : value" :value="isList ? value.name : value">
      {{ isList ? value.name : value }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["item", "isList", "modalValue", "index", "valueToUpdate", "isCondition"],
  data() {
    return {
        valueSelected: this.modalValue || "Select"
    };
  },
  methods: {
    emitEvent(event: any) {
        this.$emit('performTask', {value: event.target.value, index: this.index, update: this.valueToUpdate})
    }
  }
});
</script>

<style scoped>
.filterDropDownList {
  width: 134px;
}
.width {
  width: 80px;
}
</style>