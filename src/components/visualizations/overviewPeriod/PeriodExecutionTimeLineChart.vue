<script>
import * as echarts from 'echarts'
import { onMounted } from 'vue'
import { debounce, EleResize } from 'utils/utils.js'

export default {
  setup() {
    const name = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const time = [900, 1000, 800, 1231, 724, 778, 888, 919, 1000, 1111]
    const echartInit = () => {
      let myChart = echarts.init(document.getElementById('periodExecutionTimeChart'))
      let el = document.getElementById('periodExecutionTimeChart') // to watch element resize event
      let option = {
        legend: {
          data: ['Execution Time'],
          show: false,
        },
        grid: {
          left: '0',
          right: '1%',
          top: '4%',
          bottom: '1%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: name,
          boundaryGap: false,
        },
        yAxis: {
          type: 'value',
          min: Math.min(...time),
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
            name: 'Execution Time',
            data: time,
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 8,
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
  <div id="periodExecutionTimeChart" class="h-72"></div>
</template>
