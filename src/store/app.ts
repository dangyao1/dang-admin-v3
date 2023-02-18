import { defineStore } from 'pinia'
import type { StoreDefinition } from 'pinia'
import type { TokenRequest } from '@/api/types'
import { createTokenApi } from '@/api/token'

interface AppState {
  token: string
}
export const useAppStore: StoreDefinition<string, AppState> = defineStore(
  'app',
  {
    state: () => {
      return {
        token: ''
      }
    },
    persist: true,
    actions: {
      async loginAction(loginForm: TokenRequest): Promise<void> {
        this.token = await createTokenApi(loginForm)
      }
    }
  }
)
