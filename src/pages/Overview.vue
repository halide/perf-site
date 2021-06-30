<script>
import { ref } from 'vue'
import rawData from '../../data/data1.js'
import { getTestRunDate } from '../../data/handler.js'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  },
  setup() {
    const testRunDate = ref(getTestRunDate(rawData))
    const allDetailGraph = ['Execution Time', 'Test Coverage', 'Memory Footprint', 'Code Size']
    const selectedGraph = ref(allDetailGraph[0])

    return {
      testRunDate,
      allDetailGraph,
      selectedGraph,
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
        <Listbox v-model="selectedGraph" as="div" class="relative inline-block text-left">
          <div class="relative mt-1">
            <ListboxButton
              class="bg-[#321fdb] w-10 h-10 rounded-lg text-white flex items-center justify-center focus:outline-none hover:bg-[#2818b3]"
            >
              <i-ri:settings-2-line></i-ri:settings-2-line>
            </ListboxButton>

            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
              <ListboxOptions
                class="
                  absolute
                  w-56
                  z-50
                  right-0
                  py-1
                  mt-1
                  overflow-auto
                  text-base
                  bg-white
                  rounded-md
                  shadow-lg
                  max-h-60
                  ring-1 ring-black ring-opacity-5
                  focus:outline-none
                  sm:text-sm
                "
              >
                <ListboxOption v-for="graph in allDetailGraph" v-slot="{ active, selected }" :key="graph" :value="graph" as="template">
                  <li
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      selected ? 'bg-gray-100 text-gray-900' : '',
                      'cursor-pointer select-none relative py-2 pl-10 pr-4',
                    ]"
                  >
                    <span :class="[selected ? 'font-semibold ' : 'font-normal', 'block truncate']">{{ graph }}</span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
      <div class="px-5 mb-8">
        <PeriodExecutionTimeLineChart></PeriodExecutionTimeLineChart>
      </div>
    </div>
  </div>
</template>
