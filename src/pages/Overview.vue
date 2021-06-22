<script>
import { ref } from 'vue'
import rawData from '../../data/data1.js'
import { getCoverageInfo, getCoverageRate, getExecutionTime } from '../../data/handler.js'

export default {
  setup() {
    const coverageInfo = getCoverageInfo(rawData)
    const coverageRate = ref(getCoverageRate(coverageInfo))

    const coverageRateVizData = {
      name: [1, 2, 3, 4, 5, 6],
      data: [0.2, 0.7, 0.3, 0.9, 0.1],
    }
    coverageRateVizData.data.push(Number(coverageRate.value))

    const executionTime = getExecutionTime(rawData)

    return {
      executionTime,
      coverageInfo,
      coverageRate,
      coverageRateVizData,
    }
  },
}
</script>

<template>
  <div class="px-6 py-8 mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    <div class="bg-[#321fdb] rounded-md">
      <div class="p-5">
        <div class="flex items-center justify-between">
          <div class="text-white font-semibold text-lg tracking-wider">
            {{ coverageInfo.passed }} / {{ coverageInfo.passed + coverageInfo.skipped + coverageInfo.failed }}
          </div>
          <div class="text-white font-medium text-lg tracking-wider">{{ coverageRate }}%</div>
        </div>
        <div class="mt-1 text-white font-light text-sm">Test Coverage</div>
      </div>
      <div class="px-2">
        <CoverageRateLineChart :viz-info="coverageRateVizData"></CoverageRateLineChart>
      </div>
    </div>
    <div class="bg-[#39f] w-full rounded-md">
      <div class="p-5">
        <div class="flex items-center justify-between">
          <div class="text-white font-semibold text-lg tracking-wider">{{ executionTime }}s</div>
          <div class="text-white font-medium text-lg tracking-wider">{{ coverageRate }}%</div>
        </div>
        <div class="mt-1 text-white font-light text-sm">Execution Time</div>
      </div>
      <div class="p-5"></div>
    </div>
    <div class="bg-[#f9b115] w-full rounded-md">
      <div class="p-5">
        <div class="flex items-center justify-between">
          <div class="text-white font-semibold text-lg tracking-wider">
            {{ coverageInfo.passed }} / {{ coverageInfo.passed + coverageInfo.skipped + coverageInfo.failed }}
          </div>
          <div class="text-white font-medium text-lg tracking-wider">{{ coverageRate }}%</div>
        </div>
        <div class="mt-1 text-white font-light text-sm">Code Size</div>
      </div>
      <div class="p-5"></div>
    </div>
    <div class="bg-[#e55353] w-full rounded-md">
      <div class="p-5">
        <div class="flex items-center justify-between">
          <div class="text-white font-semibold text-lg tracking-wider">
            {{ coverageInfo.passed }} / {{ coverageInfo.passed + coverageInfo.skipped + coverageInfo.failed }}
          </div>
          <div class="text-white font-medium text-lg tracking-wider">{{ coverageRate }}%</div>
        </div>
        <div class="mt-1 text-white font-light text-sm">Memory</div>
      </div>
      <div class="p-5"></div>
    </div>
  </div>
</template>
