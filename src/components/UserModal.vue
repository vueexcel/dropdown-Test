<template>
  <div class="userModal" v-click-outside="closeModal">
    <div class="row">
      <div class="col">
        <search-bar placeholder="Search..." type="search"></search-bar>
      </div>
      <div class="col">
        <base-button additional-class="bg-light justify-content-between" @openCloseModal="openCloseModal">
          <template #prependIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              id="group"
              class="usersIcon"
            >
              <path
                d="M61.68 48.16H46.33c-1.17 0-2.16-.87-2.3-2.03-.28-2.23-1.17-4.33-2.58-6.08-.72-.9-.68-2.19.11-3.03 2.44-2.62 5.9-4.13 9.49-4.13 7.15 0 12.96 5.81 12.96 12.96a2.335 2.335 0 0 1-2.33 2.31zm-13.43-4.64h10.78c-1.01-3.46-4.21-6-7.99-6-1.71 0-3.33.5-4.7 1.45.86 1.41 1.5 2.94 1.91 4.55z"
              ></path>
              <path
                d="M51.04 34.32c-3.09 0-5.83-2.07-6.66-5.03-.17-.6-.27-1.24-.27-1.9 0-3.82 3.11-6.93 6.93-6.93s6.93 3.11 6.93 6.93c0 .65-.09 1.3-.27 1.91-.83 2.95-3.58 5.02-6.66 5.02zm0-9.22a2.296 2.296 0 0 0-2.21 2.9c.28 1 1.19 1.68 2.21 1.68s1.93-.68 2.2-1.66c.06-.21.09-.42.09-.63 0-1.26-1.03-2.29-2.29-2.29zM17.68 48.16H2.32C1.04 48.16 0 47.12 0 45.84c0-7.15 5.82-12.96 12.97-12.96 3.59 0 7.04 1.51 9.49 4.14.79.85.83 2.14.1 3.04a11.906 11.906 0 0 0-2.58 6.07 2.321 2.321 0 0 1-2.3 2.03zM4.97 43.52h10.79c.4-1.6 1.05-3.14 1.91-4.55a8.255 8.255 0 0 0-4.69-1.45c-3.8 0-7.01 2.53-8.01 6z"
              ></path>
              <path
                d="M12.96 34.32c-3.09 0-5.83-2.07-6.66-5.03-.17-.6-.27-1.24-.27-1.9 0-3.82 3.11-6.93 6.93-6.93s6.93 3.11 6.93 6.93c0 .65-.09 1.3-.27 1.91-.83 2.95-3.57 5.02-6.66 5.02zm0-9.22a2.296 2.296 0 0 0-2.21 2.9c.28 1 1.19 1.68 2.21 1.68s1.93-.68 2.2-1.66a2.283 2.283 0 0 0-2.2-2.92zM46.45 49.96H17.56c-1.28 0-2.32-1.04-2.32-2.32 0-.73.05-1.44.14-2.12.37-3.06 1.61-5.97 3.57-8.39 3.2-3.97 7.95-6.25 13.05-6.25 5.09 0 9.85 2.28 13.05 6.24 1.96 2.42 3.19 5.34 3.57 8.42.09.65.13 1.36.13 2.09a2.3 2.3 0 0 1-2.3 2.33zM20.1 45.32h23.8c-.38-1.94-1.21-3.75-2.45-5.28a12.093 12.093 0 0 0-9.44-4.52c-3.69 0-7.13 1.65-9.44 4.52-1.26 1.55-2.1 3.36-2.47 5.28z"
              ></path>
              <path
                d="M32 31.19c-3.82 0-7.21-2.56-8.25-6.23a8.29 8.29 0 0 1-.33-2.35c0-4.73 3.85-8.58 8.58-8.58s8.58 3.85 8.58 8.58c0 .81-.11 1.61-.34 2.37-1.03 3.65-4.42 6.21-8.24 6.21zm0-12.51c-2.17 0-3.94 1.77-3.94 3.94A3.948 3.948 0 0 0 32 26.56c1.75 0 3.31-1.17 3.78-2.85.1-.36.15-.72.15-1.09A3.926 3.926 0 0 0 32 18.68z"
              ></path>
            </svg>
          </template>
          Assign
          <template #appendIcon>
            <svg
              class="dropDownIcon"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow"
              x="0"
              y="0"
              version="1.1"
              viewBox="0 0 29 29"
              xml:space="preserve"
            >
              <path
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="m20.5 11.5-6 6-6-6"
              ></path>
            </svg>
          </template>
        </base-button>
      </div>
    </div>
    <div class="Modal bg-light rounded" v-if="userList && showModal">
      <search-bar placeholder="Search User..." type="userSearch" @searchUser="searchUser"></search-bar>
      <div
        class="d-flex align-items-center gap-4 mb-4 mt-4"
        v-for="user in filteredList.length ? filteredList : userList"
        :key="user.id"
      >
        <input
          type="checkbox"
          class="userCheckBox"
          @change="selectUser(user)"
          v-model="user.selected"
        />
        <div
          class="dropDownCardImage d-flex align-items-center justify-content-center rounded-circle"
        >
          <img
            :src="user.image"
            alt="user-image"
            v-if="user.image"
            height="100%"
            width="100%"
          />
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 512 512"
            viewBox="0 0 512 512"
            id="user"
          >
            <path
              d="M376.9 175.9c-.3 49.8-31.7 96.2-78.8 113.4-48.2 17.6-102.7 2.8-135.5-36.6-32.4-38.9-36.2-96-10.2-139.1 26-43.3 78.1-66.4 127.7-56.2 49.2 10.1 87.5 50.3 95.5 99.8C376.5 163.4 376.9 169.7 376.9 175.9c.1 9.6 15.1 9.7 15 0-.3-56.7-36-107.9-89.2-127.6-53-19.7-115.2-2.9-151.2 40.7-36.4 44.2-41.7 108.2-11.8 157.4 29.6 48.5 87.3 73.6 142.9 62.8 54.8-10.7 99.1-56.7 107.5-111.9 1.1-7.1 1.7-14.2 1.7-21.3C392 166.3 377 166.3 376.9 175.9zM22.7 469.8c49.5-48.5 111.9-82.8 180.5-94.4 64.5-10.9 131.8-.6 190.7 27.6 35.2 16.9 67.3 39.6 95.3 66.8 6.9 6.7 17.6-3.9 10.6-10.6-51.1-49.4-115.6-85-185.9-97.6-67.8-12.2-137.8-2.8-200.3 26.3C76 405.5 41.8 430.1 12.1 459.2 5.2 465.9 15.8 476.5 22.7 469.8L22.7 469.8z"
            ></path>
          </svg>
        </div>
        <div class="dropDownUserDetails">
          <h2 class="username fs-4">{{ user.name }}</h2>
          <p class="secondary">{{ user.email }}</p>
        </div>
      </div>
      <base-button additional-class="bg-custom justify-content-center" @openCloseModal="openCloseModal"
        >Assign ({{ selectedUsers.length }})</base-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { User } from "@/types/user.type";
import BaseButton from "./common/BaseButton.vue";
import SearchBar from "./common/SearchBar.vue";
import { toRefs, defineProps, ref, defineEmits } from "vue";

const props = defineProps<{ userList: Array<User> }>();
const { userList } = toRefs(props);
const filteredList = ref<Array<User>>([]);
const showModal = ref<boolean>(false)
const selectedUsers = ref<Array<User>>([])
const emit = defineEmits(["shiftUserToTop"])
function selectUser(user: User) {
  selectedUsers.value = userList.value.filter((userDetails: User) => userDetails.selected)
  if(user.selected) {
    const arrangedList = userList.value.filter((userDetails: User) => userDetails.id !== user.id)
    arrangedList.unshift(user)
    emit("shiftUserToTop", arrangedList)
  }
}
function searchUser(value: string) {
  if (value.length) {
    filteredList.value = userList.value.filter((list) => {
      return (list.name.toLowerCase().includes(value.toLowerCase()) || list.email.toLowerCase().includes(value.toLowerCase()))
    });
  } else {
    filteredList.value = [];
  }
  console.log(filteredList.value);
}
function openCloseModal () {
  showModal.value = !showModal.value
}
function closeModal () {
  showModal.value = false
}
</script>

<style scoped>
.userModal {
  max-width: 389px;
  min-height: 428px;
}
.Modal {
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  padding: 15px 16px 20px 17px;
  font-family: "Inter", sans-serif;
}
.dropDownCardImage {
  background-color: #e9ecef;
  border: 1px solid #5227cc;
  height: 75px;
  width: 75px;
}
.dropDownCardImage svg {
  height: 32px;
  width: 32px;
}
.dropDownCardImage img {
  object-fit: cover;
  border-radius: 50%;
}
.userCheckBox {
  width: 16px;
  height: 16px;
}
.usersIcon,
.dropDownIcon {
  height: 20px;
}
</style>