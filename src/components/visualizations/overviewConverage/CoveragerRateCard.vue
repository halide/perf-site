<script>
import { ref } from 'vue'
import rawData from '../../../../data/data1.js'
import { getCoverageInfo, getCoverageRate } from '../../../../data/handler.js'

export default {
  setup() {
    const coverageInfo = getCoverageInfo(rawData)
    const coverageRate = ref(getCoverageRate(coverageInfo))
    // Test data
    const coverageRateVizData = {
      name: [1, 2, 3, 4, 5, 6],
      data: [0.2, 0.7, 0.3, 0.9, 0.4],
    }

    const preRate = Number(coverageRateVizData.data[coverageRateVizData.data.length - 1]) // previous converage rate

    let isEqual = ref(Number(coverageRate.value) === preRate)
    let isIncreasing = ref(Number(coverageRate.value) > preRate) // Only make sense when isEqual === false, false for decreasing, true for increasing
    let changeRate = ref(Math.abs(Number(coverageRate.value) - preRate).toFixed(2))

    coverageRateVizData.data.push(Number(coverageRate.value))

    return {
      coverageInfo,
      isEqual,
      changeRate,
      coverageRateVizData,
      isIncreasing,
    }
  },
}
</script>

<template>
  <div class="p-5">
    <div class="flex flex-wrap items-center justify-between">
      <div class="text-white font-semibold text-lg tracking-wider">
        {{ coverageInfo.passed }} / {{ coverageInfo.passed + coverageInfo.skipped + coverageInfo.failed }}
      </div>
      <div class="text-white opacity-95 font-medium tracking-wider flex items-center">
        <span v-if="isEqual"></span>
        <span v-else-if="isIncreasing"><i-mdi:transfer-up></i-mdi:transfer-up></span>
        <span v-else><i-mdi:transfer-down></i-mdi:transfer-down></span>
        <span>{{ changeRate * 100 }}%</span>
      </div>
    </div>
    <div class="mt-1 text-white font-light text-sm">Test Coverage</div>
  </div>
  <div class="px-2">
    <CoverageRateLineChart :viz-info="coverageRateVizData"></CoverageRateLineChart>
  </div>
</template>
