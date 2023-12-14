import axios from 'axios'
import type { AxiosResponse } from 'axios'
import router from '@/router'

const baseURL: string = import.meta.env.VITE_API_BASE_URL

type methods = 'get' | 'put' | 'post'

let controller = new AbortController()

export const consumeAuthenticatedAPI = <T>(
  endPoint: string,
  method: methods = 'get',
  payload: unknown = {}
): Promise<T> => {
  const token = localStorage.getItem('token')
  const headers = { Authorization: `Bearer ${token}` }
  const axiosPromise: Promise<AxiosResponse<T>> = axios({
    url: baseURL + endPoint,
    method: method,
    data: payload,
    headers: headers,
    signal: controller.signal
  })

  return axiosPromise
    .then((response) => {
      if (response.status === 200) {
        return response.data
      } else {
        throw new Error('Request error')
      }
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        if (axios.isCancel(error)) {
          throw new Error('The request was cancelled')
        } else {
          localStorage.clear()
          router.push('/not-found')
          return error
        }
      } else {
        throw new Error('An unexpected error occurred')
      }
    })
}

export const cancelRequest = async () => {
  await controller.abort()
  controller = new AbortController()
}
