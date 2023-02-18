import type { TokenRequest } from './types'
import service from '@/utils/request'

export const createTokenApi = (loginForm: TokenRequest): Promise<string> => {
  return service.request({
    url: '/tokens',
    method: 'POST',
    data: loginForm
  })
}
