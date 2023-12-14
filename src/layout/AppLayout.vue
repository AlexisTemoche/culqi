<script setup lang="ts">
import { computed, onBeforeUnmount } from 'vue'
import AppSidebar from './AppSidebar.vue'
import AppNavbar from './AppNavbar.vue'
import { routeLinks } from '@/router/menu'
import DashboardComponent from '@/components/dashboard/DashboardComponent.vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useScreenWidthStore } from '@/stores/screen-size'
import {
  useLoadActualBalance,
  useFinalizeActualDashboardProcess
} from './layout-composable/useActualBalance'

const router = useRoute()
const currentRoute = computed<string>(() => router.path)

const screenWidthStore = useScreenWidthStore()
const { screenWidth } = storeToRefs(screenWidthStore)
const isSmallScreen = computed(() => screenWidth.value < 768)
onBeforeUnmount(() => screenWidthStore.finalizeProcess)

const { isLoading, actualBalance } = useLoadActualBalance()
onBeforeUnmount(() => useFinalizeActualDashboardProcess())
</script>

<template>
  <div
    class="h-screen grid grid-cols-[minmax(280px,auto)] grid-rows-[64px_auto] md:grid-cols-[288px_minmax(280px,auto)]"
  >
    <AppSidebar
      v-if="!isSmallScreen"
      :links="routeLinks"
      :isLoading="isLoading"
      :actualBalance="actualBalance"
      :useLoadActualBalance="() => useLoadActualBalance()"
      class="row-span-2 hidden md:flex"
    />
    <AppNavbar :links="routeLinks" />
    <DashboardComponent
      v-if="isSmallScreen && currentRoute === '/main'"
      :isLoading="isLoading"
      :actualBalance="actualBalance"
      :useLoadActualBalance="() => useLoadActualBalance()"
      class="px-4"
    />
    <main v-else class="p-5 md:bg-gray-200 row-span-2 md:row-span-1">
      <RouterView />
    </main>
  </div>
</template>
