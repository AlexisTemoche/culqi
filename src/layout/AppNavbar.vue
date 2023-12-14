<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ArrowLeftIcon, ArrowLeftOnRectangleIcon } from '@heroicons/vue/24/outline'
import { routeLinks } from '@/router/menu'

const router = useRouter()
const route = useRoute()

const currentRoute = computed<string>(() => route.path)

const titleCurrentRoute: ComputedRef<string | undefined> = computed(() => {
  const link = routeLinks.find((element) => element.path === route.path)
  return link?.title
})

const signOff = ():void => {
  localStorage.clear()
  router.push('/login')
}

const back = ():void => {
  if (currentRoute.value === '/main') signOff()
  else router.push('/main')
}
</script>

<template>
  <header
    class="bg-black rounded-b-xl md:rounded-b-sm flex flex-row md:flex-row-reverse items-center justify-between text-white"
  >
    <div class="w-12 md:w-28 flex justify-center">
      <ArrowLeftIcon @click="back" class="h-4 w-4 block md:hidden" aria-hidden="true" />
      <ArrowLeftOnRectangleIcon
        @click="signOff"
        class="h-5 w-5 hidden md:block"
        aria-hidden="true"
      />
      <span class="hidden md:block ml-2">Salir</span>
    </div>
    <span class="text-xs md:text-sm font-semibold">
      {{ titleCurrentRoute || 'Recargas y Pagos' }}
    </span>
    <div class="w-16 md:w-28 flex justify-center">
      <img class="w-12 md:w-16 mx-auto" src="@/assets/logo_white.svg" alt="Logo" />
    </div>
  </header>
</template>

<style scoped>
.router-link-active {
  color: #00a19b;
}
a {
  text-decoration: none !important;
  color: inherit;
}
</style>
