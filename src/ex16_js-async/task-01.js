function analogueFetch(url, methodRequest = 'GET', body) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(url, methodRequest, true);

    if (methodRequest === 'POST') xhr.setRequestHeader('Content-Type');

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.response);
      } else reject(new Error(`error:${xhr.status}`));
    };

    if (methodRequest === 'GET') xhr.send();
    else xhr.send(body);
  });
}

module.exports = analogueFetch;
