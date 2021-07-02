<script>
import * as echarts from 'echarts'
import { onMounted } from 'vue'
import { debounce, EleResize } from 'utils/utils.js'

export default {
  setup() {
    const name = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const time = [0.2, 0.7, 0.3, 0.9, 0.4, 0.2, 0.7, 0.3, 0.9, 0.4, 0.2, 0.7, 0.3, 0.9, 0.4]
    const echartInit = () => {
      let myChart = echarts.init(document.getElementById('periodTestCoverageBarChart'))
      let el = document.getElementById('periodTestCoverageBarChart') // to watch element resize event
      let option = {
        legend: {
          data: ['Test Coverage'],
          show: false,
        },
        dataZoom: [
          {
            type: 'inside',
          },
        ],
        grid: {
          left: '0',
          right: '1%',
          top: '7%',
          bottom: '1%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: name,
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: function (value) {
              return value * 100 + '%'
            },
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            return `${params.name}<br />
              ${params.seriesName}: ${params.data}s `
          },
        },
        series: [
          {
            name: 'Test Coverage',
            data: time,
            type: 'bar',
            label: {
              show: true,
              position: 'top',
              formatter: function (d) {
                return d.data * 100 + '%'
              },
            },
          },
        ],
      }

      myChart.setOption(option)

      // auto resize
      let listener = function () {
        myChart.resize({
          animation: {
            duration: 300,
            easing: 'cubicInOut',
          },
        })
      }
      EleResize.on(el, debounce(listener, 300)) // avoid invoke this event too frequently
    }
    //onMounted
    onMounted(() => {
      echartInit()
    })
    //return
    return {
      echartInit,
    }
  },
}
</script>

<template>
  <div id="periodTestCoverageBarChart" class="h-72"></div>
</template>
