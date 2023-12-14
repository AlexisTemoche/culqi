import type { ComputedRef } from 'vue'

export interface typeUseLoadActualBalance {
  isLoading: ComputedRef<Boolean>
  actualBalance: ComputedRef<String>
}

export interface ActualBalanceResponse {
  status: string
  responseMessage: string
  data: {
    balanceCommerce: string
  }
}
