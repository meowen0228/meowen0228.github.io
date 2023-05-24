/**
 * format interval to 00:00:00
 * @param {number} time
 * @returns string
 */
export const formatInterval = (time) => {
  if (time == '-') {
    return '-'
  }
  return `${('0' + Math.floor((time / 60000) % 60)).slice(-2)}:${(
    '0' + Math.floor((time / 1000) % 60)
  ).slice(-2)}:${('0' + ((time / 10) % 100)).slice(-2)}`
}
