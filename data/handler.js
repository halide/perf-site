export function getCoverageInfo(rawData) {
  const coverageInfo = {
    passed: 0,
    skipped: 0,
    failed: 0,
  }

  for (const data of rawData) {
    if (data.type) {
      coverageInfo[data.type]++
    }
  }
  return coverageInfo
}

export function getCoverageRate(coverageInfo) {
  const rate = coverageInfo.passed / (coverageInfo.passed + coverageInfo.failed + coverageInfo.skipped)

  return rate.toFixed(2)
}

export function getAllTestSuites(rawData) {
  const allTestSuites = []

  for (const data of rawData) {
    const testSuiteName = data.label
    if (testSuiteName && !allTestSuites.includes(testSuiteName)) {
      allTestSuites.push(testSuiteName)
    }
  }

  return allTestSuites
}
export function getTestSuitesCoverageInfo(rawData) {
  const allTestSuites = getAllTestSuites(rawData)
  const allTestCoverageInfo = new Map()

  for (const testSuite of allTestSuites) {
    const coverageInfoObj = new Object()
    coverageInfoObj.passed = 0
    coverageInfoObj.failed = 0
    coverageInfoObj.skipped = 0
    coverageInfoObj.executionTime = 0
    allTestCoverageInfo.set(testSuite, coverageInfoObj)
  }

  for (const data of rawData) {
    if (data.type && data.label && allTestCoverageInfo.has(data.label)) {
      allTestCoverageInfo.get(data.label)[data.type]++
    }
    if (data['Execution Time'] && data.label && allTestCoverageInfo.has(data.label)) {
      allTestCoverageInfo.get(data.label).executionTime += Number(data['Execution Time'])
    }
  }

  for (const info of allTestCoverageInfo) {
    info[1].executionTime = Number(info[1].executionTime.toFixed(2))
  }
  return allTestCoverageInfo
}

export function getExecutionTime(rawData) {
  let totalTime = 0.0

  for (const data of rawData) {
    if (data['Execution Time'] && parseFloat(data['Execution Time'])) {
      totalTime += parseFloat(data['Execution Time'])
    }
  }

  return Number(totalTime.toFixed(2))
}

export function getTestRunDate(rawData) {
  return rawData[0].EndTime
}

export function getBuildStamp(rawData) {
  return rawData[0].BuildStamp
}
