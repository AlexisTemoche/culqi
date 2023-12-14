import { ref, computed } from 'vue'
import { consumeAuthenticatedAPI, cancelRequest } from '@/api/consumeAuthenticatedAPI'
import type { ActualBalanceResponse, typeUseLoadActualBalance } from './actual.Balance.interface'

const isLoading = ref<Boolean>(true)
const actualBalance = ref<String>('')

const resetValues = (): void => {
  isLoading.value = true
  actualBalance.value = ''
}

export const useLoadActualBalance = (): typeUseLoadActualBalance => {
  resetValues()
  consumeAuthenticatedAPI<ActualBalanceResponse>(`getActualBalance`)
    .then((response) => {
      if (response.responseMessage == 'success') {
        actualBalance.value = response.data.balanceCommerce
      } else {
        actualBalance.value = '*****'
      }
      isLoading.value = false
    })
    .catch((error) => {
      console.log(error)
    })
  return {
    isLoading: computed(() => isLoading.value),
    actualBalance: computed(() => actualBalance.value)
  }
}

export const useFinalizeActualDashboardProcess = (): void => {
  resetValues()
  cancelRequest()
}
