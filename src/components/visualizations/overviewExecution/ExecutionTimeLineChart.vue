<script>
import * as echarts from 'echarts'
import { onMounted } from 'vue'
import { debounce, EleResize } from 'utils/utils.js'

export default {
  name: 'ExecutionTimeLineChart',
  props: {
    vizInfo: {
      type: Object,
      default() {
        return {
          data: [],
          name: [],
        }
      },
      require: true,
    },
  },
  setup(props) {
    const echartInit = () => {
      let myChart = echarts.init(document.getElementById('executionTimeChart'))
      let el = document.getElementById('executionTimeChart') // to watch element resize event
      let option = {
        color: 'gray',
        legend: {
          data: ['Rate'],
          show: false,
        },
        xAxis: {
          type: 'category',
          show: false,
          data: props.vizInfo.name,
          boundaryGap: false,
        },
        yAxis: {
          type: 'value',
          show: false,
          min: Math.min(...props.vizInfo.data),
          max: Math.max(...props.vizInfo.data),
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            return `${params.name}<br />
              ${params.seriesName}: ${params.data}% `
          },
        },
        series: [
          {
            name: 'Rate',
            data: props.vizInfo.data,
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
              color: 'white',
              opacity: 0.4,
            },
            itemStyle: {
              normal: { opacity: 0.4, color: 'transparent', borderColor: 'white', borderWidth: 1 },
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
  <div id="executionTimeChart" class="h-20"></div>
</template>
