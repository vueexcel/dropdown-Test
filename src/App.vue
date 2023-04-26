<template>
  <div>
    <user-modal :user-list="userList" @shiftUserToTop="shiftUserToTop"></user-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import UserModal from "./components/UserModal.vue";
import { User } from "./types/user.type";
const userList = ref<Array<User>>([
  {
    id: "u1",
    name: "Andrei Rus",
    email: "andrei.rus@gmail.com",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    selected: false,
  },
  {
    id: "u2",
    name: "Florin Lazar",
    email: "florin.lazar@ing.ro",
    selected: false,
  },
  {
    id: "u3",
    name: "Ioana Popescu",
    email: "ioana.popescu@gmail.com",
    selected: false,
  },
]);
function shiftUserToTop (value: Array<User>) {
  userList.value = value
}
</script>

<style>
</style>
