<template>
  <input type="search" v-model="searchInput" :placeholder="placeholder" class="searchInput border border-2 border-light py-2 px-4 rounded w-100" @input="searchResult"/>
</template>

<script lang="ts" setup>
import { toRefs, defineProps, defineEmits, ref } from "vue";
const props = defineProps<{ placeholder: string, type: string }>();
const { placeholder, type } = toRefs(props);
const searchInput = ref<string>("")
const emit = defineEmits(["searchUser"])
function searchResult() {
    if(type.value === "userSearch") {
        emit("searchUser", searchInput.value)
    }
    if(type.value === "search") {
        //
    }
}
</script>

<style scoped>
.searchInput{
    outline: none;
    height: 38px;
}
</style>