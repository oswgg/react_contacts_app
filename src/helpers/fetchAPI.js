const base_url = 'http://localhost:8080/api';

const fetchAPI = async options => {
  const { Authorization, endpoint, method, body } = options;
  console.log(Authorization);
  const headers = {
    method,
    headers: { 'Content-Type': 'application/json', Authorization },
    body: JSON.stringify(body),
  };
  try {
    const res = await fetch(`${base_url}/${endpoint}`, headers);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default fetchAPI;
