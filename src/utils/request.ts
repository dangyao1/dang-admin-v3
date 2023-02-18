import axios from 'axios'
import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import type { ErrorResponse } from '@/api/types'
import { MessagePlugin } from 'tdesign-vue-next'

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000
})

instance.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  return request
})

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  async (error: AxiosError<ErrorResponse>) => {
    const responseError: undefined | ErrorResponse = error.response?.data
    responseError && (await MessagePlugin.error(responseError.message))
    return Promise.reject(error)
  }
)

export default instance
