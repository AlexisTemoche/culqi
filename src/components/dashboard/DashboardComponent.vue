<script setup lang="ts">
import { routeLinks } from '@/router/menu'
import { RouterLink } from 'vue-router'
import { ArrowPathIcon, InformationCircleIcon, HeartIcon } from '@heroicons/vue/24/outline'
interface Props {
  isLoading: Boolean
  actualBalance: String
  useLoadActualBalance: Function
}
const props = defineProps<Props>()
</script>

<template>
  <div class="divide-y-2">
    <div class="flex flex-col my-5 px-2">
      <div class="flex items-center mb-2">
        <span class="text-lg mr-2"> Saldo Virtual </span>
        <InformationCircleIcon style="color: #00a19b" class="h-4 w-4" aria-hidden="true" />
      </div>
      <div v-if="props.isLoading" class="mb-2">
        <span class="animate-fade animate-infinite"> Cargando ... </span>
      </div>
      <div v-else class="flex items-center mb-2">
        <span class="text-xl font-bold text-gray-800 mr-2"> {{ props.actualBalance }} </span>
        <ArrowPathIcon
          @click="props.useLoadActualBalance"
          style="color: #00a19b"
          class="h-4 w-4"
          aria-hidden="true"
        />
      </div>
      <button
        type="button"
        class="flex items-center w-fit border-solid border-2 border-gray-200 py-1 px-3 rounded-full mb-2"
      >
        <HeartIcon class="h-3 w-3 mr-1" aria-hidden="true" />
        <span class="text-xs"> ¿Cómo cargar mi saldo virtual? </span>
      </button>
      <div class="flex items-center mt-3">
        <span class="text-xs mr-2"> Código para cargar tu saldo: </span>
        <span class="text-xs font-semibold" style="color: #00a19b"> {12345678901} </span>
      </div>
    </div>
    <nav class="mt-4">
      <RouterLink
        v-for="(item, index) in routeLinks"
        :key="index"
        :to="item.path"
        class="flex items-center my-3 py-3 px-2 text-sm font-semibold text-gray-800 bg-gray-100 hover:bg-gray-300 rounded-md"
      >
        <component
          :is="item.iconComponent"
          class="h-6 w-6 p-1 bg-orange-500 rounded-md text-white"
          aria-hidden="true"
        />
        <span class="w-fit ml-2">{{ item.title }}</span>
      </RouterLink>
    </nav>
  </div>
</template>
