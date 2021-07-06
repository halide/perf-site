<script>
import { ref } from 'vue'
import rawData from '../../../../data/data1.js'
import { getCoverageInfo, getTestSuitesCoverageInfo, getCoverageRate, getExecutionTime } from '../../../../data/handler.js'

export default {
  name: 'OverviewTestSuitesPerformance',
  setup() {
    const coverageInfo = ref(getCoverageInfo(rawData))
    const testSuitesCoverageInfo = ref(getTestSuitesCoverageInfo(rawData))

    function getStateRate(info, target) {
      //  info: {passed: 0, failed: 0, skjpped: 0, executionTime: 0}
      let totalNum = 0
      for (const key in info) {
        if (key === 'executionTime') continue
        totalNum += info[key]
      }
      return (info[target] / totalNum) * 100 + '%'
    }

    const executionTime = getExecutionTime(rawData)

    return {
      coverageInfo,
      testSuitesCoverageInfo,
      getStateRate,
      getCoverageRate,
      executionTime,
    }
  },
}
</script>

<template>
  <h3 class="px-5 py-2 border-b"><span class="text-sm text-gray-600">Performance on Test Suites</span></h3>
  <div class="px-5 py-6 grid grid-cols-2 gap-8 lg:grid-cols-4">
    <div class="border-l-4 px-4 pt-1 border-blue-500 rounded">
      <div class="text-sm text-gray-500 tracking-wide">Passed</div>
      <div class="flex items-center text-lg text-gray-900 font-semibold tracking-wider">
        {{ coverageInfo.passed }}
        <span class="ml-1 text-sm font-normal text-gray-500">(+10)</span>
      </div>
    </div>
    <div class="border-l-4 px-4 pt-1 border-red-500 rounded">
      <div class="text-sm text-gray-500 tracking-wide">Failed</div>
      <div class="flex items-center text-lg font-semibold text-gray-900 tracking-wider">
        {{ coverageInfo.failed }}
        <span class="ml-1 text-sm font-normal text-gray-500">(-5)</span>
      </div>
    </div>
    <div class="border-l-4 px-4 pt-1 border-yellow-500 rounded">
      <div class="text-sm text-gray-500 tracking-wide">Skipped</div>
      <div class="flex items-center text-lg font-semibold text-gray-900 tracking-wider">
        {{ coverageInfo.skipped }}
        <span class="ml-1 text-sm font-normal text-gray-500">(-5)</span>
      </div>
    </div>
    <div class="border-l-4 px-4 pt-1 border-fuchsia-500 rounded">
      <div class="text-sm text-gray-500 tracking-wide">Execution Time</div>
      <div class="flex items-center text-lg font-semibold text-gray-900 tracking-wider">
        {{ executionTime }}s
        <span class="ml-1 text-sm font-normal text-gray-500">(-277.49s)</span>
      </div>
    </div>
  </div>
  <div class="grid gap-1 lg:gap-4 grid-cols-1 lg:grid-cols-2">
    <div class="mb-4 px-5">
      <hr class="border-t" />
      <div v-for="item in testSuitesCoverageInfo" :key="item" class="mt-5 group">
        <div>
          <div class="flex items-center justify-between">
            <div class="text-xs font-light tracking-wide text-gray-600">{{ item[0] }}</div>
            <div class="relative text-xs font-light tracking-wide text-gray-600">
              {{ getCoverageRate(item[1]) * 100 }}%
              <div class="absolute right-0 bottom-0 mb-6 shadow-lg hidden group-hover:block tooltip">
                <div class="z-10 px-4 py-2 whitespace-nowrap rounded-lg relative text-xs text-white bg-gray-800">
                  <div class="font-light">Pass: {{ item[1].passed }}</div>
                  <div class="font-light">Fail: {{ item[1].failed }}</div>
                  <div class="font-light">Skip: {{ item[1].skipped }}</div>
                  <div class="font-light">Execution Time: {{ item[1].executionTime }}s</div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative pt-1">
            <div class="overflow-hidden h-1 mb-2 text-xs flex rounded bg-gray-200">
              <div
                :style="'width:' + getStateRate(item[1], 'passed')"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              ></div>
              <div
                :style="'width:' + getStateRate(item[1], 'failed')"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
              ></div>
              <div
                :style="'width:' + getStateRate(item[1], 'skipped')"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
              ></div>
            </div>
          </div>
          <div class="relative pt-1">
            <div class="overflow-hidden h-1 mb-2 text-xs flex rounded bg-gray-200">
              <div
                :style="'width:' + (item[1].executionTime / executionTime) * 100 + '%'"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-fuchsia-500"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-4 px-5">
      <hr class="border-t" />
      <div v-for="item in testSuitesCoverageInfo" :key="item" class="mt-5 group">
        <div>
          <div class="flex items-center justify-between">
            <div class="text-xs font-light tracking-wide text-gray-600">{{ item[0] }}</div>
            <div class="relative text-xs font-light tracking-wide text-gray-600">
              {{ getCoverageRate(item[1]) * 100 }}%
              <div class="absolute right-0 bottom-0 mb-6 shadow-lg hidden group-hover:block tooltip">
                <div class="z-10 px-4 py-2 whitespace-nowrap rounded-lg relative text-xs text-white bg-gray-800">
                  <div class="font-light">Pass: {{ item[1].passed }}</div>
                  <div class="font-light">Fail: {{ item[1].failed }}</div>
                  <div class="font-light">Skip: {{ item[1].skipped }}</div>
                  <div class="font-light">Execution Time: {{ item[1].executionTime }}s</div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative pt-1">
            <div class="overflow-hidden h-1 mb-2 text-xs flex rounded bg-gray-200">
              <div
                :style="'width:' + getStateRate(item[1], 'passed')"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              ></div>
              <div
                :style="'width:' + getStateRate(item[1], 'failed')"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
              ></div>
              <div
                :style="'width:' + getStateRate(item[1], 'skipped')"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
              ></div>
            </div>
          </div>
          <div class="relative pt-1">
            <div class="overflow-hidden h-1 mb-2 text-xs flex rounded bg-gray-200">
              <div
                :style="'width:' + (item[1].executionTime / executionTime) * 100 + '%'"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-fuchsia-500"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tooltip::after {
  content: ' ';
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  right: 10%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}
</style>
