<template>
  <div>
    <filter-result :list="availableFilters" @onUpdate="onFilterUpdate"></filter-result>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FilterResult from './components/FilterResult.vue'
import {filterType, condition, filterDefinition, filterResult} from './types/filter.type'
export default defineComponent({
  components: { FilterResult },
  data() {
    return {
      availableFilters: [
        {
          key: 'country',
          name: 'Country',
          values: [ 'Spain', 'Greece' ],
          type: filterType.select,
          conditions: [ condition.eq, condition.ne ],
        },
        {
          key: 'price',
          name: 'Price',
          type: filterType.number,
          conditions: [ condition.eq, condition.ne, condition.lt, condition.gt ],
        },
        {
          key: 'status',
          name: 'Status',
          type: filterType.bool,
          conditions: [ condition.eq, condition.ne ],
        },
        {
          key: 'startDate',
          name: 'Start Date',
          type: filterType.date,
          conditions: [ condition.eq, condition.ne, condition.lt, condition.gt ],
        },
      ] as filterDefinition[],
    }
  },

  methods: {
    onFilterUpdate(filters: filterResult[]) {

      console.log(filters)
      /*
        would output something like the following:

        [
          {
            key: 'country',
            condition: 'eq',
            value: 'Spain',
          },
          {
            key: 'price',
            condition: 'lt',
            value: 1200,
            precondition: 'and',
          },
          {
            key: 'status',
            condition: 'is',
            value: true,
            precondition: 'and',
          },
          {
            key: 'startDate',
            condition: 'lt',
            value: '2023-04-01',
            precondition: 'or',
          },
        ]
      */
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
