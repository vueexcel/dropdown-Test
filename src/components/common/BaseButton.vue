<template>
    <button @click="emitEvent" :class="additionClasses" class="button rounded border-0 py-2 px-4">
        <slot></slot>
    </button>    
</template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    props: ["additionClasses"],
    data() {
      return {
          valueSelected: "Select"
      };
    },
    methods: {
      emitEvent(event: any) {
          this.$emit('performTask', event.target.value)
      }
    }
  });
  </script>
  
  <style scoped>
  .violet {
    background-color: #5227cc;
  }
  .light-grey {
    background-color: #E9ECEF;
  }
  </style>