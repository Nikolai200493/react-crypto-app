import { cryptoAssets } from './data'

export async function fakeFetchCrypto() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': 'gquf3cl+Gd2b4jINmDnl+uZOtTvsu+9yeN6TPfTqXNg='
    }
  }

  try {
    const response = await fetch(
      'https://openapiv1.coinstats.app/coins',
      options
    )
    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}

export function fetchAssets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoAssets)
    }, 1)
  })
}
