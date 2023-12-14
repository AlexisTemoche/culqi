import axios from 'axios'
import type { AxiosResponse } from 'axios'

const baseURL: string = import.meta.env.VITE_API_BASE_URL

type methods = 'get' | 'put' | 'post'

export const consumeUnauthenticatedAPI = <T>(
  endPoint: string,
  method: methods = 'get',
  payload: unknown = {}
): Promise<T> => {
  const axiosPromise: Promise<AxiosResponse<T>> = axios({
    url: baseURL + endPoint,
    method: method,
    data: payload
  })

  return axiosPromise
    .then((response) => {
      if (response.status === 200) {
        return response.data
      } else {
        throw new Error('Error en la solicitud')
      }
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        return error.response?.data
      } else {
        throw new Error('An unexpected error occurred')
      }
    })
}
