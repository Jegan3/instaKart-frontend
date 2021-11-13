import envConfig from 'envConfig'; //eslint-disable-line

const { baseUrl } = envConfig;
const TIMEOUT = 100000;

/**
* @description function to handle the time out error
* @param  {Promise} promise
* @param  {number} timeout
* @param  {string} error
* @return
*/
function timeoutPromise(promise, timeout, error) {
  return new Promise((resolve, reject) => {
    const clearTimeOut = setTimeout(() => {
      reject(error);
    }, timeout);
    promise.then((data) => {
      clearTimeout(clearTimeOut);
      resolve(data);
    }, (data) => {
      clearTimeout(clearTimeOut);
      reject(data);
    });
  });
}

// /** @description calls a native fetch method and returns a promise Object
// export const fetchURL = (url, urlPrefix = baseUrl) => timeoutPromise(fetch(
//   urlPrefix.concat(url),
//   Object.assign({}, {
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8',
//       Accept: 'application/json; charset=UTF-8',
//       'Access-Control-Allow-Origin': '*',
//       'x-access-token': `${sessionStorage.access}`,
//     },
//   }),
// ), TIMEOUT, 504);

// export const doGet = (url, urlPrefix = baseUrl) => {
//   const fetchData = fetchURL(url, urlPrefix).then((res) => {
//     let response = null;
//     response = res.json();
//     if (res.ok) {
//       return response;
//     }
//     return response.then((error) => { throw error; });
//   });
//   return fetchData;
// };

/** @description Sending a GET request.
 * doGet method resolves or rejects the promise that is obtained
 * @param {string} url
 * @param {string} urlPrefix
 * @returns {object}
 */
export const doGet = (url, urlPrefix = baseUrl) => timeoutPromise(fetch(
  urlPrefix.concat(url),
  Object.assign({}, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Accept: 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'x-access-token': `${sessionStorage.access}`,
    },
  }),
), TIMEOUT, 504)
  .then((res) => {
    let response = null;
    response = res.json();
    if (res.ok) {
      return response;
    }
    return response.then((error) => { throw error; });
  });

/** @description Sending a POST request.
 * @param {string} url
 * @param {object} body
 * @param {string} urlPrefix
 */
export const doPost = (url, body, urlPrefix = baseUrl) => timeoutPromise(fetch(
  urlPrefix.concat(url),
  Object.assign({}, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Accept: 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'x-access-token': `${sessionStorage.access}`,
    },
    body: JSON.stringify(body),
  }),
), TIMEOUT, 504)
// Commented If required
  // .then((res) => {
  //   let response = null;
  //   if (res.ok) {
  //     response = res.json();
  //   } else {
  //     throw new Error(res.statusText);
  //   }
  //   return response;
  // });
  .then((res) => {
    let response = null;
    response = res.json();
    if (res.ok) {
      return response;
    }
    return response.then((error) => { throw error; });
  });

/** @description Sending a PUT request.
 * @param {string} url
 * @param {object} body
 * @param {string} urlPrefix
 * @returns {Promise}
 */
export const doPatch = (url, body, urlPrefix = baseUrl) => timeoutPromise(fetch(
  urlPrefix.concat(url),
  Object.assign({}, {
    method: 'patch',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Accept: 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'x-access-token': `${sessionStorage.access}`,
    },
    // credentials: 'include',
    body: JSON.stringify(body),
  }),
), TIMEOUT, 504)
  .then((res) => {
    let response = null;
    response = res.json();
    if (res.ok) {
      return response;
    }
    return response.then((error) => { throw error; });
  });

/** @description Sending a DELETE request.
 * @param {string} url
 * @param {object} body
 * @param {string} urlPrefix
 * @returns {Promise}
 */
export const doDelete = (url, body, urlPrefix = baseUrl) => timeoutPromise(fetch(
  urlPrefix.concat(url),
  Object.assign({}, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Accept: 'application/json; charset=UTF-8',
    },
    credentials: 'include',
    body: JSON.stringify(body),
  }),
), TIMEOUT, 504)
  .then((res) => {
    let response = null;
    if (res.ok) {
      response = res.json();
    }
    return response;
  });

/** @description Sending a POST FILE request* */
export const doPostFile = (url, body, urlPrefix = baseUrl) => timeoutPromise(fetch(
  urlPrefix.concat(url),
  Object.assign({}, {
    method: 'post',
    headers: {
      // 'Content-Type': 'application/json; charset=UTF-8',
      // Authorization: `Bearer ${sessionStorage.token}`,
    },
    body,
  }),
), TIMEOUT, 504)
  .then((res) => {
    let response = null;
    response = res.json();
    if (res.ok) {
      response = res.json();
    } else {
      throw new Error(res.statusText);
    }
    return response;
  });
