
## Data Storage

### GitHub Info 

| Name           | Type            | Examples                                                                                                                                                                                                                                     |
| :------------- | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Author`       | `string`        | "aankit-ca"                                                                                                                                                                                                                                  |
| `Date`         | `Date`          | Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)                                                                                                                                                                                                      |
| `Id`           | `string`        | "#6129"                                                                                                                                                                                                                                      |
| `URL`          | `string`        | "https://github.com/halide/Halide/commit/e52d6ca8e8b1a788d32536160df92c9d90751de2"                                                                                                                                                           |
| `Event`        | `string`        | "Push" \| "Pull Request"                                                                                                                                                                                                                     |
| `Comment`      | `string`        | "[Hexagon] Use LLVM masked stores. Letting CodeGen_LLVM handle predicated stores for Hexagon allows us to generate HVX predicated stores instead of scalar predicated stores. The operators in hannk app should be able to test this patch." |
| `ChangedFiles` | `Array<String>` | ["apps/hannk/run_benchmark_on_hexagon_sim.sh","apps/support/Makefile.inc"]                                                                                                                                                                   |

### Test Results

| Name              | Type                  | Examples                                                                                                                                                                                                     |
| :---------------- | :-------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Name`            | `string`              | "error_async_require_fail"                                                                                                                                                                                   |
| `Path`            | `string`              | "./test/error"                                                                                                                                                                                               |
| `FullName`        | `string`              | "./test/error/error_async_require_fail"                                                                                                                                                                      |
| `FullCommandLine` | `string`              | "/Users/yfeng/Desktop/halide/build/test/error/error_async_require_fail"                                                                                                                                      |
| `Label`           | `string`              | "error" \| "Adams2019" \| "correctness"                                                                                                                                                                      |
| `Status`          | `string`              | 'passed' \| 'skipped' \| 'failed'                                                                                                                                                                            |
| `Processors`      | `double`              | 1                                                                                                                                                                                                            |
| `Execution Time`  | `double` \| `null`    | 0.527823                                                                                                                                                                                                     |
| `Environment`     | `string`              | "HL_TARGET=host HL_JIT_TARGET=host #CTEST_RESOURCE_GROUP_COUNT="                                                                                                                                             |
| `PassReason`      | `string`    \| `null` | "Required regular expression not found. Regex=[Success!\n]"                                                                                                                                                  |
| `Description`     | `string`              | "[SKIP] Need two or more GPU targets enabled." \| 'Benchmark for demo produces best case of 0.0279919 sec/iter (over 3 samples, 39 iterations, accuracy 2.6%).\nBest output throughput is 0.082 mpix/sec.\n' |


