<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import ContainerComponent from '@/components/container/ContainerComponent.vue'
import { MagnifyingGlassIcon, HeartIcon, PhoneIcon, StarIcon } from '@heroicons/vue/24/outline'
import { useLoadProvidersList, useFinalizeRechargesProcess } from './useRecharges'

const { isLoading, listOfProviders } = useLoadProvidersList()

const search = ref<string>('')

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = ''
}

onBeforeUnmount(() => useFinalizeRechargesProcess())
</script>

<template>
  <ContainerComponent>
    <div class="flex flex-col max-w-xl mx-auto">
      <div class="flex flex-col md:flex-row items-center mb-5">
        <label
          for="input_search"
          class="text-sm font-medium text-gray-900 mb-3 md:mb-0 w-full md:w-1/4"
        >
          Buscar Empresa:
        </label>
        <div
          class="w-full md:w-3/4 grid grid-cols-[1fr_25px] items-center rounded-sm py-2 px-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100"
        >
          <input
            id="input_search"
            name="input_search"
            type="text"
            v-model="search"
            placeholder="ej. Culqui"
            autocomplete="off"
            class="bg-gray-100 border-0 outline-0"
          />
          <MagnifyingGlassIcon
            style="float: right"
            class="h-5 w-5 justify-center text-orange-500"
            aria-hidden="true"
          />
        </div>
      </div>

      <div class="flex flex-row mb-5">
        <button
          type="button"
          class="flex items-center w-fit border-solid border-2 border-orange-400 py-0.5 px-3 rounded-full mr-1"
        >
          <HeartIcon class="h-3 w-3 mr-1" aria-hidden="true" />
          <span> Todas </span>
        </button>
        <button
          type="button"
          class="flex items-center w-fit border-solid border-2 border-gray-200 py-0.5 px-3 rounded-full mr-1"
        >
          <StarIcon class="h3 w-3 mr-1" aria-hidden="true" />
          <span> Favoritas </span>
        </button>
        <button
          type="button"
          class="flex items-center w-fit border-solid border-2 border-gray-200 py-0.5 px-3 rounded-full"
        >
          <PhoneIcon class="h-3 w-3 mr-1" aria-hidden="true" />
          <span> Telefonía </span>
        </button>
      </div>

      <span v-if="isLoading"> Cargando... </span>

      <ul v-else class="flex flex-col providers-list">
        <li
          v-for="(item, index) in listOfProviders"
          :key="index"
          class="flex items-center justify-between w-full py-4 px-2 text-md font-semibold text-gray-800 hover:bg-gray-200"
        >
          <div class="flex items-center">
            <picture>
              <img
                width="25"
                height="25"
                :src="item.image"
                loading="lazy"
                :alt="`Logo de ${item.company}`"
                @error="handleImageError"
              />
            </picture>
            <span class="w-fit ml-2">{{ item.company }}</span>
          </div>
          <StarIcon class="h-6 w-6 text-gray-300" />
        </li>
      </ul>
    </div>
  </ContainerComponent>
</template>

<style scoped>
.providers-list li {
  border-bottom: 1px solid #ccc;
}

.providers-list li:last-child {
  border-bottom: none;
}
</style>
