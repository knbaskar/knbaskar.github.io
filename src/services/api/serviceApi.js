// const targetDiv =
//   document.getElementById('errorHandler') || document.getElementById('root')

const validateResponse = async (response) => {
  const shopName = sessionStorage.getItem('shopName') || ''
  if (response.status === 401) {
    const message = 'API call failed!'
    console.log(message)
    return Promise.reject({ message })
  } else if (response.status === 200 || response.status === 201) {
    return response
  } else {
    const message = 'server error, please try again.'
    console.log(message)
    return Promise.reject({ message })
  }
}

const get = async (parms) => {
  const { url } = parms
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return validateResponse(response)
}

const post = async (parms) => {
  try {
    const { url, body } = parms
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    return validateResponse(response)
  } catch (err) {
    console.log('wpupdate error')
  }
}
const put = async (parms) => {
  const { url, body } = parms
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  return validateResponse(response)
}

const remove = async (parms) => {
  const { url, body } = parms
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  return validateResponse(response)
}

const serviceAPICall =  async (
  {
    apiName,
    method,
    headers = {},
    requestPayload
  }
) => {
  const response = await fetch(apiName, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify(requestPayload),
  })
  return validateResponse(response)
}

const serviceApi = {
  get,
  post,
  put,
  remove,
  serviceAPICall
}

export default serviceApi
