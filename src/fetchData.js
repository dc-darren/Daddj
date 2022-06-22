const fetchData = async (url = 'https://icanhazdadjoke.com/', params) => {
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json'
    },
    method: 'GET',
    ...params
  })
  return response.json()
}

export default fetchData