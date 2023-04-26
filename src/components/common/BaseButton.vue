<template>
  <button class="w-100 d-flex align-items-center gap-2 rounded border-0 py-2 px-4" :class="additionalClass" @click="performTask">
    <div class="d-flex align-items-center gap-2">
        <slot name="prependIcon"></slot>
        <slot></slot>
    </div>
    <slot name="appendIcon"></slot>
  </button>
</template>

<script setup lang="ts">
import { toRefs, defineProps, defineEmits } from "vue";
const props = defineProps<{additionalClass: string}>()
const {additionalClass} = toRefs(props)
const emit = defineEmits(['openCloseModal'])
function performTask () {
    emit("openCloseModal")
}
</script>

<style scoped>
.btn {
    height: 38px;
}
.bg-custom {
    background-color: #E9ECEF;
}
</style>