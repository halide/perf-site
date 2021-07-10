<script>
import { reactive, computed } from 'vue'
export default {
  setup() {
    const data = [
      {
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
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        type: 'pull',
        author: '	aankit-ca',
        title: '[Hexagon] Use LLVM masked stores',
        date: 'Apr 08 18:50 HKT',
        id: '#6129',
        status: 'finished',
        url: 'https://github.com/halide/Halide/pull/6129',
        comments: `[Hexagon] Use LLVM masked stores. Letting CodeGen_LLVM handle predicated stores for Hexagon allows us to generate HVX predicated stores instead of scalar predicated stores.

        The operators in hannk app should be able to test this patch.
        `,
        changedFiles: ['apps/hannk/run_benchmark_on_hexagon_sim.sh', 'apps/support/Makefile.inc', 'src/CodeGen_Hexagon.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        type: 'pull',
        author: '	aankit-ca',
        title: '[Hexagon] Use LLVM masked stores',
        date: 'Apr 08 18:50 HKT',
        id: '#6129',
        status: 'finished',
        url: 'https://github.com/halide/Halide/pull/6129',
        comments: `[Hexagon] Use LLVM masked stores. Letting CodeGen_LLVM handle predicated stores for Hexagon allows us to generate HVX predicated stores instead of scalar predicated stores.

        The operators in hannk app should be able to test this patch.
        `,
        changedFiles: ['apps/hannk/run_benchmark_on_hexagon_sim.sh', 'apps/support/Makefile.inc', 'src/CodeGen_Hexagon.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        type: 'pull',
        author: '	aankit-ca',
        title: '[Hexagon] Use LLVM masked stores',
        date: 'Apr 08 18:50 HKT',
        id: '#6129',
        status: 'finished',
        url: 'https://github.com/halide/Halide/pull/6129',
        comments: `[Hexagon] Use LLVM masked stores. Letting CodeGen_LLVM handle predicated stores for Hexagon allows us to generate HVX predicated stores instead of scalar predicated stores.

        The operators in hannk app should be able to test this patch.
        `,
        changedFiles: ['apps/hannk/run_benchmark_on_hexagon_sim.sh', 'apps/support/Makefile.inc', 'src/CodeGen_Hexagon.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        type: 'pull',
        author: '	aankit-ca',
        title: '[Hexagon] Use LLVM masked stores',
        date: 'Apr 08 18:50 HKT',
        id: '#6129',
        status: 'finished',
        url: 'https://github.com/halide/Halide/pull/6129',
        comments: `[Hexagon] Use LLVM masked stores. Letting CodeGen_LLVM handle predicated stores for Hexagon allows us to generate HVX predicated stores instead of scalar predicated stores.

        The operators in hannk app should be able to test this patch.
        `,
        changedFiles: ['apps/hannk/run_benchmark_on_hexagon_sim.sh', 'apps/support/Makefile.inc', 'src/CodeGen_Hexagon.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        type: 'pull',
        author: '	aankit-ca',
        title: '[Hexagon] Use LLVM masked stores',
        date: 'Apr 08 18:50 HKT',
        id: '#6129',
        status: 'finished',
        url: 'https://github.com/halide/Halide/pull/6129',
        comments: `[Hexagon] Use LLVM masked stores. Letting CodeGen_LLVM handle predicated stores for Hexagon allows us to generate HVX predicated stores instead of scalar predicated stores.

        The operators in hannk app should be able to test this patch.
        `,
        changedFiles: ['apps/hannk/run_benchmark_on_hexagon_sim.sh', 'apps/support/Makefile.inc', 'src/CodeGen_Hexagon.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        type: 'pull',
        author: '	aankit-ca',
        title: '[Hexagon] Use LLVM masked stores',
        date: 'Apr 08 18:50 HKT',
        id: '#6129',
        status: 'finished',
        url: 'https://github.com/halide/Halide/pull/6129',
        comments: `[Hexagon] Use LLVM masked stores. Letting CodeGen_LLVM handle predicated stores for Hexagon allows us to generate HVX predicated stores instead of scalar predicated stores.

        The operators in hannk app should be able to test this patch.
        `,
        changedFiles: ['apps/hannk/run_benchmark_on_hexagon_sim.sh', 'apps/support/Makefile.inc', 'src/CodeGen_Hexagon.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        type: 'pull',
        author: '	aankit-ca',
        title: '[Hexagon] Use LLVM masked stores',
        date: 'Apr 08 18:50 HKT',
        id: '#6129',
        status: 'finished',
        url: 'https://github.com/halide/Halide/pull/6129',
        comments: `[Hexagon] Use LLVM masked stores. Letting CodeGen_LLVM handle predicated stores for Hexagon allows us to generate HVX predicated stores instead of scalar predicated stores.

        The operators in hannk app should be able to test this patch.
        `,
        changedFiles: ['apps/hannk/run_benchmark_on_hexagon_sim.sh', 'apps/support/Makefile.inc', 'src/CodeGen_Hexagon.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        type: 'pull',
        author: '	aankit-ca',
        title: '[Hexagon] Use LLVM masked stores',
        date: 'Apr 08 18:50 HKT',
        id: '#6129',
        status: 'finished',
        url: 'https://github.com/halide/Halide/pull/6129',
        comments: `[Hexagon] Use LLVM masked stores. Letting CodeGen_LLVM handle predicated stores for Hexagon allows us to generate HVX predicated stores instead of scalar predicated stores.

        The operators in hannk app should be able to test this patch.
        `,
        changedFiles: ['apps/hannk/run_benchmark_on_hexagon_sim.sh', 'apps/support/Makefile.inc', 'src/CodeGen_Hexagon.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        type: 'pull',
        author: '	aankit-ca',
        title: '[Hexagon] Use LLVM masked stores',
        date: 'Apr 08 18:50 HKT',
        id: '#6129',
        status: 'finished',
        url: 'https://github.com/halide/Halide/pull/6129',
        comments: `[Hexagon] Use LLVM masked stores. Letting CodeGen_LLVM handle predicated stores for Hexagon allows us to generate HVX predicated stores instead of scalar predicated stores.

        The operators in hannk app should be able to test this patch.
        `,
        changedFiles: ['apps/hannk/run_benchmark_on_hexagon_sim.sh', 'apps/support/Makefile.inc', 'src/CodeGen_Hexagon.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        type: 'pull',
        author: '	aankit-ca',
        title: '[Hexagon] Use LLVM masked stores',
        date: 'Apr 08 18:50 HKT',
        id: '#6129',
        status: 'finished',
        url: 'https://github.com/halide/Halide/pull/6129',
        comments: `[Hexagon] Use LLVM masked stores. Letting CodeGen_LLVM handle predicated stores for Hexagon allows us to generate HVX predicated stores instead of scalar predicated stores.

        The operators in hannk app should be able to test this patch.
        `,
        changedFiles: ['apps/hannk/run_benchmark_on_hexagon_sim.sh', 'apps/support/Makefile.inc', 'src/CodeGen_Hexagon.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        type: 'pull',
        author: '	aankit-ca',
        title: '[Hexagon] Use LLVM masked stores',
        date: 'Apr 08 18:50 HKT',
        id: '#6129',
        status: 'finished',
        url: 'https://github.com/halide/Halide/pull/6129',
        comments: `[Hexagon] Use LLVM masked stores. Letting CodeGen_LLVM handle predicated stores for Hexagon allows us to generate HVX predicated stores instead of scalar predicated stores.

        The operators in hannk app should be able to test this patch.
        `,
        changedFiles: ['apps/hannk/run_benchmark_on_hexagon_sim.sh', 'apps/support/Makefile.inc', 'src/CodeGen_Hexagon.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        type: 'pull',
        author: '	aankit-ca',
        title: '[Hexagon] Use LLVM masked stores',
        date: 'Apr 08 18:50 HKT',
        id: '#6129',
        status: 'finished',
        url: 'https://github.com/halide/Halide/pull/6129',
        comments: `[Hexagon] Use LLVM masked stores. Letting CodeGen_LLVM handle predicated stores for Hexagon allows us to generate HVX predicated stores instead of scalar predicated stores.

        The operators in hannk app should be able to test this patch.
        `,
        changedFiles: ['apps/hannk/run_benchmark_on_hexagon_sim.sh', 'apps/support/Makefile.inc', 'src/CodeGen_Hexagon.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
      {
        author: 'Zalman Stern',
        date: 'June 18 20:50 HKT',
        title: 'Adding padding byte size to outermost header byte count in MATLAB5 file format',
        id: '#6128',
        status: 'pending',
        url: 'https://github.com/halide/Halide/commit/f48a8daf3b1446bc7a962bcf8f672800b446b13c',
        comments: `Adding padding byte size to outermost header byte count when writing MATLAB5 file format matrix. This ensures SciPy will successfully read files written by this routine.
        `,
        changedFiles: ['src/runtime/write_debug_image.cpp'],
      },
    ]
    const state = reactive({
      showCommentsArr: [],
      selectedArr: [],
    })

    state.showCommentsArr = Array(data.length).fill(false)

    const pageInfo = reactive({
      numberPerPage: 10,
      pageNow: 0,
      total: data.length,
    })

    const start = computed(() => {
      return pageInfo.pageNow * pageInfo.numberPerPage
    })
    const end = computed(() => {
      return (pageInfo.pageNow + 1) * pageInfo.numberPerPage > pageInfo.total
        ? pageInfo.total
        : (pageInfo.pageNow + 1) * pageInfo.numberPerPage
    })

    const prev = () => {
      pageInfo.pageNow -= 1
    }

    const next = () => {
      console.log(123)
      pageInfo.pageNow += 1
    }

    return {
      data,
      state,
      start,
      end,
      pageInfo,
      prev,
      next,
    }
  },
}
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="px-6 py-8">
    <div v-if="data.length === 0">
      <Card>
        <div class="p-5 flex items-center justify-center">No available data</div>
      </Card>
    </div>
    <div v-else class="bg-white rounded-lg border shadow-sm">
      <div
        v-for="(item, index) in data.slice(start, end)"
        :key="index"
        class="px-3 py-3 bg-white hover:bg-gray-200 transition-all"
        :class="{
          'rounded-t-lg': index === 0,
          'border-t': index !== 0,
        }"
      >
        <div class="flex items-center">
          <i-ph:git-pull-request-light v-if="item.type === 'pull'" class="mr-3 h-6 w-6 text-green-700"> </i-ph:git-pull-request-light>
          <i-ph:git-commit-light v-else class="mr-3 h-6 w-6 text-green-700"></i-ph:git-commit-light>
          <div class="flex w-full items-center justify-between">
            <div class="w-5/6">
              <a :href="item.url" class="text-sm font-semibold hover:text-blue-700 hover:underline transition"
                >{{ item.title }} (<span class="text-blue-700 font-medium">{{ item.id }}</span
                >)
              </a>
              <button
                class="inline ml-2 h-3 w-4 bg-gray-300 hover:bg-gray-400 focus:outline-none"
                @click="state.showCommentsArr[start + index] = !state.showCommentsArr[start + index]"
              >
                <i-system-uicons:menu-horizontal class="h-3 w-4"></i-system-uicons:menu-horizontal>
              </button>
              <div v-if="state.showCommentsArr[start + index] === true" class="font-mono my-3 text-xs font-light">
                <p class="mb-3">Comment: {{ item.comments }}</p>
                <p class="">Changed Files:</p>
                <ul class="list-disc list-inside">
                  <li v-for="file in item.changedFiles" :key="file">{{ file }}</li>
                </ul>
              </div>
              <p class="text-xs font-semibold mt-1">
                {{ item.author }}
                <span class="inline ml-1 font-light opacity-80">changed on: {{ item.date }}</span>
              </p>
            </div>
            <div class="hidden md:flex md:items-center">
              <div
                v-if="item.status === 'finished'"
                class="
                  mr-3
                  px-3
                  py-1
                  inline-block
                  rounded-full
                  shadow-md
                  border border-gray-300
                  text-green-700 text-xs
                  font-semibold
                  hover:border-green-600
                  transition
                "
              >
                Finished
              </div>
              <div
                v-else-if="item.status === 'pending'"
                class="
                  mr-3
                  px-3
                  py-1
                  inline-block
                  rounded-full
                  shadow-md
                  border border-gray-300
                  text-blue-700 text-xs
                  font-semibold
                  hover:border-blue-600
                  transition
                "
              >
                Pending
              </div>
              <router-link v-if="item.status === 'finished'" :to="'/detail/' + item.id.slice(1)">
                <button
                  class="
                    relative
                    px-4
                    py-2
                    m-2
                    shadow-md
                    border border-gray-300
                    rounded-md
                    text-sm
                    group
                    transition
                    duration-300
                    hover:bg-blue-600 hover:text-white
                    focus:outline-none
                  "
                >
                  <i-ph:eye-thin></i-ph:eye-thin>
                  <div class="absolute right-2 bottom-10 shadow-lg hidden group-hover:block tooltip">
                    <div class="z-10 px-4 py-2 whitespace-nowrap rounded-lg relative text-xs text-white bg-gray-800">Show Details</div>
                  </div>
                </button></router-link
              >

              <button
                v-else
                class="
                  px-4
                  py-2
                  m-2
                  shadow-md
                  border border-gray-300
                  rounded-md
                  text-sm
                  transition
                  opacity-50
                  duration-300
                  hover:bg-blue-600 hover:text-white
                  focus:outline-none
                "
              >
                <i-ph:eye-slash class=""></i-ph:eye-slash>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4 flex items-center justify-center rounded-b-lg border border-t-0 bg-white text-sm text-blue-600">
      <button
        class="
          px-5
          py-1
          font-semibold
          border border-gray-300
          rounded-l-lg
          hover:bg-blue-600 hover:text-white
          focus:outline-none
          disabled:opacity-50
        "
        :disabled="start === 0"
        @click="prev"
      >
        Prev
      </button>
      <button
        class="
          px-5
          py-1
          font-semibold
          border-t border-r border-b border-gray-300
          rounded-r-lg
          hover:bg-blue-600 hover:text-white
          focus:outline-none
          disabled:opacity-50
        "
        :disabled="end === pageInfo.total"
        @click="next"
      >
        Next
      </button>
    </div>
  </div>
</template>

<style scoped>
.tooltip::after {
  content: ' ';
  position: absolute;
  top: 100%;
  /* At the bottom of the tooltip */
  right: 10%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}
</style>
