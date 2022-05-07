const base_url = 'http://192.168.0.2:8080/api';

const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const headers = {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: options.Authorization,
      },
      body: JSON.stringify(options.body) || false,
    };

    if (!headers.body) delete headers.body;

    return fetch(endpoint, headers)
      .then(res => res.json())
      .catch(err => err);
  };

  const get = (endpoint, options) => {
    const url = `${base_url}/${endpoint}`;
    return customFetch(url, options);
  };

  const post = (endpoint, options) => {
    const url = `${base_url}/${endpoint}`;
    options.method = 'POST';
    return customFetch(url, options);
  };

  const put = (endpoint, options) => {
    const url = `${base_url}/${endpoint}`;
    options.method = 'PUT';
    console.log(options);
    return customFetch(url, options);
  };

  const del = (endpoint, options) => {
    const url = `${base_url}/${endpoint}`;
    options.method = 'DELETE';
    return customFetch(url, options);
  };

  return { get, post, del, put };
};

export default helpHttp;
