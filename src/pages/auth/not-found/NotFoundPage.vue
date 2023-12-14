<script setup lang="ts">
import router from '@/router'
const goToLogin = () => {
  localStorage.clear()
  router.push('/login')
}
</script>
<template>
  <div class="flex items-center justify-center h-screen w-full">
    <div class="flex flex-col">
      <img
        width="120"
        height="120"
        class="mx-auto my-auto"
        src="@/assets/logo_black.svg"
        alt="Logo"
      />
      <div class="flex items-center justify-center font-mono flex-col">
        <h1 class="text-6xl md:text-9xl font-black oldstyle-nums">404</h1>
        <p class="text-xl md:text-3xl font-bold">Forbidden</p>
      </div>
      <button
        type="button"
        class="py-2 px-3 border-2 rounded-lg mt-3 font-medium hover:bg-gray-200"
        @click="goToLogin"
      >
        Ir a Inicio de Sesión
      </button>
    </div>
  </div>
</template>
