<template>
  <select
    class="filterDropDownList form-select form-select-sm mb-3"
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
  props: ["item", "isList"],
  data() {
    return {
        valueSelected: "Select"
    };
  },
  methods: {
    emitEvent(event: any) {
        this.$emit('addFilter', event.target.value)
    }
  }
});
</script>

<style>
</style>