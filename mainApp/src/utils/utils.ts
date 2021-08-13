/**
 * 延迟函数
 *
 * @param {number} [time=50] 延迟毫秒数
 * @return {Promise<any>} promise
 */
export const sleep = (time: number = 50) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });
