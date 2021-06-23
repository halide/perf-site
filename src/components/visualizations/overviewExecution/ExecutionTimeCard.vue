<script>
import { ref } from 'vue'
import rawData from '../../../../data/data1.js'
import { getExecutionTime } from '../../../../data/handler.js'

export default {
  setup() {
    const excutionTime = ref(Number(getExecutionTime(rawData)))
    // Test data
    const excutionTimeVizData = {
      name: [1, 2, 3, 4, 5, 6],
      data: [400, 900, 1500, 1212, 1400],
    }

    const preTime = Number(excutionTimeVizData.data[excutionTimeVizData.data.length - 1]) // previous converage rate

    let isEqual = ref(excutionTime.value === preTime)
    let isIncreasing = ref(excutionTime.value > preTime) // Only make sense when isEqual === false, false for decreasing, true for increasing
    let timeChange = ref(Math.abs(excutionTime.value - preTime).toFixed(2))

    excutionTimeVizData.data.push(excutionTime.value)

    return {
      excutionTimeVizData,
      isEqual,
      isIncreasing,
      excutionTime,
      timeChange,
    }
  },
}
</script>

<template>
  <div class="p-5">
    <div class="flex items-center justify-between">
      <div class="text-white font-semibold text-lg tracking-wider">{{ excutionTime }}s</div>
      <div class="text-white opacity-95 font-medium tracking-wider flex items-center">
        <span v-if="isEqual"></span>
        <span v-else-if="isIncreasing"><i-mdi:transfer-up></i-mdi:transfer-up></span>
        <span v-else><i-mdi:transfer-down></i-mdi:transfer-down></span>
        <span>{{ timeChange }}s</span>
      </div>
    </div>
    <div class="mt-1 text-white font-light text-sm">Execution Time</div>
  </div>
  <div class="px-2">
    <ExecutionTimeLineChart :viz-info="excutionTimeVizData"></ExecutionTimeLineChart>
  </div>
</template>
