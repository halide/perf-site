<script>
import { ref } from 'vue'
import rawData from '../../data/data1.js'
import { getTestRunDate } from '../../data/handler.js'

export default {
  setup() {
    const testRunDate = ref(getTestRunDate(rawData))

    return {
      testRunDate,
    }
  },
}
</script>

<template>
  <div class="px-6 py-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    <div class="bg-[#321fdb] rounded-md">
      <CoveragerRateCard></CoveragerRateCard>
    </div>
    <div class="bg-[#39f] w-full rounded-md">
      <ExecutionTimeCard></ExecutionTimeCard>
    </div>
    <div class="bg-[#f9b115] w-full rounded-md">
      <div class="p-5">
        <div class="flex items-center justify-between">
          <div class="text-white font-semibold text-lg tracking-wider">64MB</div>
          <div class="text-white opacity-95 font-medium tracking-wider flex items-center"><i-mdi:transfer-up></i-mdi:transfer-up> 2MB</div>
        </div>
        <div class="mt-1 text-white font-light text-sm">Code Size</div>
      </div>
      <div class="px-2 h-20"></div>
    </div>
    <div class="bg-[#e55353] w-full rounded-md">
      <div class="p-5">
        <div class="flex items-center justify-between">
          <div class="text-white font-semibold text-lg tracking-wider">666MB</div>
          <div class="text-white opacity-95 font-medium tracking-wider flex items-center"><i-mdi:transfer-up></i-mdi:transfer-up> 64MB</div>
        </div>
        <div class="mt-1 text-white font-light text-sm">Memory Footprint</div>
      </div>
      <div class="px-2 h-20"></div>
    </div>
  </div>

  <div class="px-6 py-8">
    <div class="bg-white rounded-sm border border-[#d8dbe0]">
      <div class="p-5 flex items-center justify-between">
        <div>
          <div class="text-lg tracking-wider">Execution Time</div>
          <div class="text-sm text-gray-500">
            Latest Commit: <span class="text-xs text-gray-500">{{ testRunDate }}</span>
          </div>
        </div>
        <button class="bg-[#321fdb] w-10 h-10 rounded-lg text-white flex items-center justify-center focus:outline-none hover:bg-[#2818b3]">
          <i-ri:settings-2-line></i-ri:settings-2-line>
        </button>
      </div>
      <div class="px-5 mb-8">
        <PeriodExecutionTimeLineChart></PeriodExecutionTimeLineChart>
      </div>
    </div>
  </div>
</template>
