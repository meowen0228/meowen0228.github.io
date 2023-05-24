/**
 * JSON.parse(localStorage.getItem(key)), if !item return []
 * @param {string} key
 * @param {function} fn
 * @returns Array
 */
export const getArrayWithKey = (key, fn) => {
  let historyList = JSON.parse(localStorage.getItem(key))
  if (!historyList) {
    historyList = []
  }
  return fn(historyList)
}

/**
 * JSON.parse(localStorage.setItem(key))
 * @param {string} key
 * @returns Array
 */
export const setArrayWithKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}
