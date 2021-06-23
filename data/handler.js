export function getCoverageInfo(rawData) {
  const converageInfo = {
    passed: 0,
    skipped: 0,
    failed: 0,
  }

  for (const data of rawData) {
    if (data.type) {
      converageInfo[data.type]++
    }
  }
  return converageInfo
}

export function getCoverageRate(converageInfo) {
  const rate = converageInfo.passed / (converageInfo.passed + converageInfo.failed + converageInfo.skipped)

  return rate.toFixed(2)
}

export function getExecutionTime(rawData) {
  let totalTime = 0.0

  for (const data of rawData) {
    if (data['Execution Time'] && parseFloat(data['Execution Time'])) {
      totalTime += parseFloat(data['Execution Time'])
    }
  }

  return totalTime.toFixed(2)
}

export function getTestRunDate(rawData) {
  return rawData[0].EndTime
}

export function getBuildStamp(rawData) {
  return rawData[0].BuildStamp
}
