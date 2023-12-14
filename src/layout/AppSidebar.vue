<script setup lang="ts">
import { RouterLink } from 'vue-router'
import DashboardComponent from '@/components/dashboard/DashboardComponent.vue'
interface Props {
  isLoading: Boolean
  actualBalance: String
  useLoadActualBalance: Function
}
const props = defineProps<Props>()
</script>

<template>
  <aside class="flex flex-col h-screen flex-shrink-0">
    <div class="flex items-center justify-center h-20">
      <RouterLink to="/main">
        <img class="" src="@/assets/logo_black.svg" alt="Logo" />
      </RouterLink>
    </div>
    <DashboardComponent
      :isLoading="props.isLoading"
      :actualBalance="props.actualBalance"
      :useLoadActualBalance="props.useLoadActualBalance"
      class="px-4"
    />
  </aside>
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
