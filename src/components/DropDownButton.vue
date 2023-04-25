<template>
  <div >
    <div class="dropDownButton" @click.stop="openDropDown">
        <div style="display: flex; align-items: center; gap: 8px;">
            <svg class="userIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="group"><path d="M61.68 48.16H46.33c-1.17 0-2.16-.87-2.3-2.03-.28-2.23-1.17-4.33-2.58-6.08-.72-.9-.68-2.19.11-3.03 2.44-2.62 5.9-4.13 9.49-4.13 7.15 0 12.96 5.81 12.96 12.96a2.335 2.335 0 0 1-2.33 2.31zm-13.43-4.64h10.78c-1.01-3.46-4.21-6-7.99-6-1.71 0-3.33.5-4.7 1.45.86 1.41 1.5 2.94 1.91 4.55z"></path><path d="M51.04 34.32c-3.09 0-5.83-2.07-6.66-5.03-.17-.6-.27-1.24-.27-1.9 0-3.82 3.11-6.93 6.93-6.93s6.93 3.11 6.93 6.93c0 .65-.09 1.3-.27 1.91-.83 2.95-3.58 5.02-6.66 5.02zm0-9.22a2.296 2.296 0 0 0-2.21 2.9c.28 1 1.19 1.68 2.21 1.68s1.93-.68 2.2-1.66c.06-.21.09-.42.09-.63 0-1.26-1.03-2.29-2.29-2.29zM17.68 48.16H2.32C1.04 48.16 0 47.12 0 45.84c0-7.15 5.82-12.96 12.97-12.96 3.59 0 7.04 1.51 9.49 4.14.79.85.83 2.14.1 3.04a11.906 11.906 0 0 0-2.58 6.07 2.321 2.321 0 0 1-2.3 2.03zM4.97 43.52h10.79c.4-1.6 1.05-3.14 1.91-4.55a8.255 8.255 0 0 0-4.69-1.45c-3.8 0-7.01 2.53-8.01 6z"></path><path d="M12.96 34.32c-3.09 0-5.83-2.07-6.66-5.03-.17-.6-.27-1.24-.27-1.9 0-3.82 3.11-6.93 6.93-6.93s6.93 3.11 6.93 6.93c0 .65-.09 1.3-.27 1.91-.83 2.95-3.57 5.02-6.66 5.02zm0-9.22a2.296 2.296 0 0 0-2.21 2.9c.28 1 1.19 1.68 2.21 1.68s1.93-.68 2.2-1.66a2.283 2.283 0 0 0-2.2-2.92zM46.45 49.96H17.56c-1.28 0-2.32-1.04-2.32-2.32 0-.73.05-1.44.14-2.12.37-3.06 1.61-5.97 3.57-8.39 3.2-3.97 7.95-6.25 13.05-6.25 5.09 0 9.85 2.28 13.05 6.24 1.96 2.42 3.19 5.34 3.57 8.42.09.65.13 1.36.13 2.09a2.3 2.3 0 0 1-2.3 2.33zM20.1 45.32h23.8c-.38-1.94-1.21-3.75-2.45-5.28a12.093 12.093 0 0 0-9.44-4.52c-3.69 0-7.13 1.65-9.44 4.52-1.26 1.55-2.1 3.36-2.47 5.28z"></path><path d="M32 31.19c-3.82 0-7.21-2.56-8.25-6.23a8.29 8.29 0 0 1-.33-2.35c0-4.73 3.85-8.58 8.58-8.58s8.58 3.85 8.58 8.58c0 .81-.11 1.61-.34 2.37-1.03 3.65-4.42 6.21-8.24 6.21zm0-12.51c-2.17 0-3.94 1.77-3.94 3.94A3.948 3.948 0 0 0 32 26.56c1.75 0 3.31-1.17 3.78-2.85.1-.36.15-.72.15-1.09A3.926 3.926 0 0 0 32 18.68z"></path></svg>
            <span>Assign</span>
        </div>
      <svg class="dropDownIcon" xmlns="http://www.w3.org/2000/svg" id="arrow" x="0" y="0" version="1.1" viewBox="0 0 29 29" xml:space="preserve"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m20.5 11.5-6 6-6-6"></path></svg>
    </div>
    <drop-down @close-modal="closeModal" v-if="showDropDown" style="transition: all;"></drop-down>
  </div>
</template>

<script>
import DropDown from './DropDown.vue';
export default {
  components: { DropDown },
  name: "DropDownButton",
  data() {
    return {
        showDropDown: false
    }
  },
  methods: {
    openDropDown() {
        this.showDropDown = !this.showDropDown
        const {style} = document.getElementsByClassName("dropDownIcon").item(0)
        style.transition = 'all 0.3s ease-in-out'
        if(this.showDropDown) style.transform = 'rotateZ(-180deg)';
        else style.transform = 'rotateZ(0deg)'
    },
    closeModal() {
      this.showDropDown = false
      const {style} = document.getElementsByClassName("dropDownIcon").item(0)
      style.transform = 'rotateZ(0deg)'
    }
  },
};
</script>

<style scoped>
.dropDownButton {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 16px;
  gap: 8px;
  width: 168px;
  height: 38px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
}
.userIcon, .dropDownIcon {
    height: 16px;
    width: 16px;
}
</style>