<script>
import { ref } from 'vue'
import rawData from '../../data/data1.js'
import { getCoverageInfo, getTestSuitesCoverageInfo, getCoverageRate, getExecutionTime } from '../../data/handler.js'

export default {
  setup() {
    const env = {
      OSName: 'Mac OS X',
      OSPlatform: 'x86_64',
      LogicalCPU: 8,
      PhysicalCPU: 4,
      VirtualMemory: 4096,
      PhysicalMemory: 16384,
    }

    const coverageInfo = ref(getCoverageInfo(rawData))
    const testSuitesCoverageInfo = ref(getTestSuitesCoverageInfo(rawData))
    const executionTime = getExecutionTime(rawData)

    const changeInfo = {
      type: 'pull',
      author: '	aankit-ca',
      title: '[Hexagon] Use LLVM masked stores',
      date: 'Apr 08 18:60 HKT',
      id: '#6129',
      status: 'finished',
      url: 'https://github.com/halide/Halide/pull/6129',
      comments: `[Hexagon] Use LLVM masked stores. Letting CodeGen_LLVM handle predicated stores for Hexagon allows us to generate HVX predicated stores instead of scalar predicated stores.

        The operators in hannk app should be able to test this patch.
        `,
      changedFiles: ['apps/hannk/run_benchmark_on_hexagon_sim.sh', 'apps/support/Makefile.inc', 'src/CodeGen_Hexagon.cpp'],
    }

    function getStateRate(info, target) {
      //  info: {passed: 0, failed: 0, skjpped: 0, executionTime: 0}
      let totalNum = 0
      for (const key in info) {
        if (key === 'executionTime') continue
        totalNum += info[key]
      }
      return (info[target] / totalNum) * 100 + '%'
    }

    console.log(env)

    return {
      env,
      coverageInfo,
      testSuitesCoverageInfo,
      getStateRate,
      executionTime,
      getCoverageRate,
      changeInfo,
    }
  },
}
</script>

<template>
  <div class="px-6 py-8">
    <div class="grid gap-8 md:grid-cols-2">
      <div class="px-4 py-3 bg-white shadow-md rounded-lg">
        <div class="flex items-center">
          <i-ph:git-pull-request-light v-if="changeInfo.type === 'pull'" class="mr-3 h-6 w-6 text-green-700"> </i-ph:git-pull-request-light>
          <i-ph:git-commit-light v-else class="mr-3 h-6 w-6 text-green-700"></i-ph:git-commit-light>

          <div class="w-10/12">
            <a :href="changeInfo.url" class="text-sm font-semibold hover:text-blue-700 hover:underline transition"
              >{{ changeInfo.title }} (<span class="text-blue-700 font-medium">{{ changeInfo.id }}</span
              >)
            </a>

            <div class="font-mono my-3 text-xs font-light">
              <p class="mb-3 text-justify">Comment: {{ changeInfo.comments }}</p>
              <p class="">Changed Files:</p>
              <ul class="list-disc list-inside">
                <li v-for="file in changeInfo.changedFiles" :key="file" class="truncate">{{ file }}</li>
              </ul>
            </div>
            <p class="text-xs font-semibold mt-1">
              {{ changeInfo.author }}
              <span class="inline ml-1 font-light opacity-80">changed on: {{ changeInfo.date }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="px-3 py-3 bg-white shadow-md rounded-lg">
        <div class="mb-3 pb-2 border-b text-center text-gray-900 font-semibold tracking-wide">Environment</div>
        <div v-for="(item, key) in env" :key="key" class="text-sm tracking-wide flex justify-between items-center">
          <div class="py-1 text-center w-1/2 border-r">
            {{ key }}
          </div>
          <div class="py-1 text-center w-1/2">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="px-6 gap-4 grid grid-cols-2 md:gap-8 md:grid-cols-4">
    <div class="bg-[#321fdb] rounded-md">
      <div class="p-5">
        <div class="text-white font-semibold text-lg tracking-wider">92%</div>
        <div class="mt-1 text-white font-light text-sm">Successful Rate</div>
      </div>
    </div>
    <div class="bg-[#39f] w-full rounded-md">
      <div class="p-5">
        <div class="text-white font-semibold text-lg tracking-wider">1122.51s</div>
        <div class="mt-1 text-white font-light text-sm">Execution Time</div>
      </div>
    </div>
    <div class="bg-[#f9b115] w-full rounded-md">
      <div class="p-5">
        <div class="text-white font-semibold text-lg tracking-wider">64MB</div>
        <div class="mt-1 text-white font-light text-sm">Code Size</div>
      </div>
    </div>
    <div class="bg-[#e55353] w-full rounded-md">
      <div class="p-5">
        <div class="text-white font-semibold text-lg tracking-wider">666MB</div>

        <div class="mt-1 text-white font-light text-sm">Memory Footprint</div>
      </div>
    </div>
  </div>

  <div class="px-6 py-8">
    <Card>
      <h3 class="px-5 py-2 border-b"><span class="text-sm text-gray-600">Performance on Test Suites</span></h3>
      <div class="px-5 py-6 grid grid-cols-2 gap-8 lg:grid-cols-4">
        <div class="border-l-4 px-4 pt-1 border-blue-500 rounded">
          <div class="text-sm text-gray-500 tracking-wide">Passed</div>
          <div class="flex items-center text-lg text-gray-900 font-semibold tracking-wider">
            {{ coverageInfo.passed }}
          </div>
        </div>
        <div class="border-l-4 px-4 pt-1 border-red-500 rounded">
          <div class="text-sm text-gray-500 tracking-wide">Failed</div>
          <div class="flex items-center text-lg font-semibold text-gray-900 tracking-wider">
            {{ coverageInfo.failed }}
          </div>
        </div>
        <div class="border-l-4 px-4 pt-1 border-yellow-500 rounded">
          <div class="text-sm text-gray-500 tracking-wide">Skipped</div>
          <div class="flex items-center text-lg font-semibold text-gray-900 tracking-wider">
            {{ coverageInfo.skipped }}
          </div>
        </div>
        <div class="border-l-4 px-4 pt-1 border-fuchsia-500 rounded">
          <div class="text-sm text-gray-500 tracking-wide">Execution Time</div>
          <div class="flex items-center text-lg font-semibold text-gray-900 tracking-wider">{{ executionTime }}s</div>
        </div>
      </div>
      <div class="mb-4 px-5">
        <hr class="border-t mb-4" />

        <div v-for="item in testSuitesCoverageInfo" :key="item" class="mt-1 group">
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
    </Card>
  </div>
</template>
