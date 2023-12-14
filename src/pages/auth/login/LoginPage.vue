<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ExclamationCircleIcon } from '@heroicons/vue/24/outline'

const router = useRouter()

const formMail = ref<string>('userMail@test')
const formPassword = ref<string>('userPassword123!')
const formMessage = ref<string>('')

const login = async (): Promise<void> => {
  const token: string = `eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Indpbmdlcmxpb24uY3VscWkiLCJleHAiOjE3MDY5NDIxNjR9.j7_UICJFBvPiHv_bhnoRNprVU_DaML41Vjmd51jcRDI`
  formMessage.value = ''
  if (formMail.value === 'userMail@test' && formPassword.value === 'userPassword123!') {
    localStorage.setItem('token', token)
    router.push('/main')
  } else {
    formMessage.value = 'El Correo electrónico o La Contraseña es incorrecta.'
  }
}
</script>

<template>
  <div class="flex flex-row h-screen items-center justify-center">
    <div class="flex flex-col w-full max-w-sm mx-8 md:mx-0 animate-jump animate-once">
      <header>
        <h2
          class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-5 sm:mb-8"
        >
          Inicia Sesión
        </h2>
      </header>

      <main class="w-full">
        <form @submit.prevent="login" class="space-y-6">
          <div>
            <label for="input_email" class="text-sm font-medium leading-6 text-gray-900">
              Correo electrónico
              <span class="text-red-600">*</span>
            </label>
            <input
              id="input_email"
              name="input_email"
              type="email"
              v-model="formMail"
              placeholder="Ingresa el correo electrónico"
              autocomplete="email"
              required
              disabled
              class="w-full rounded-md border-0 mt-2 py-1.5 px-3 text-gray-900 ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label for="input_password" class="text-sm font-medium leading-6 text-gray-900">
              Contraseña
              <span class="text-red-600"> * </span>
            </label>
            <input
              id="input_password"
              name="input_password"
              type="password"
              v-model="formPassword"
              placeholder="Ingresa la contraseña"
              autocomplete="current-password"
              required
              disabled
              class="w-full rounded-md border-0 mt-2 py-1.5 px-3 text-gray-900 ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-emerald-500 sm:text-sm sm:leading-6"
            />
          </div>

          <div v-if="formMessage" class="flex items-center text-xs text-red-500">
            <ExclamationCircleIcon class="h-4 w-4" :aria-hidden="true" />
            <span class="ml-2">{{ formMessage }}</span>
          </div>

          <div>
            <button
              type="submit"
              style="background-color: #0f1828"
              class="w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </main>

      <footer>
        <p class="mt-5 sm:mt-8 text-center text-sm text-gray-500">
          ¿Eres nuevo aquí?
          {{ ' ' }}
          <a href="#" class="font-semibold leading-6 text-emerald-500 hover:text-emerald-400">
            Crea una cuenta
          </a>
        </p>
      </footer>
    </div>
  </div>
</template>
