import { ref, computed } from 'vue'
import type { ComputedRef } from 'vue'
import { consumeAuthenticatedAPI, cancelRequest } from '@/api/consumeAuthenticatedAPI'
import type { Company, ProvidersListResponse } from './recharges.interface'

interface typeUseLoadProvidersList {
  isLoading: ComputedRef<Boolean>
  listOfProviders: ComputedRef<Company[]>
}

const isLoading = ref<Boolean>(true)
const listOfProviders = ref<Company[]>([])

const resetValues = (): void => {
  isLoading.value = true
  listOfProviders.value = []
}

export const useLoadProvidersList = (): typeUseLoadProvidersList => {
  consumeAuthenticatedAPI<ProvidersListResponse>(`getProviders`)
    .then((response) => {
      if (response.responseMessage == 'success') {
        listOfProviders.value = response.data.companies.map((company: Company) => company)
      } else {
        listOfProviders.value = []
      }
      isLoading.value = false
    })
    .catch((error) => {
      console.log(error)
    })

  return {
    isLoading: computed(() => isLoading.value),
    listOfProviders: computed(() => listOfProviders.value)
  }
}

export const useFinalizeRechargesProcess = (): void => {
  resetValues()
  cancelRequest()
}
