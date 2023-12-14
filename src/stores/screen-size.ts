import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useScreenWidthStore = defineStore('screenSize', () => {
  const screenWidth = ref<number>(window.innerWidth)

  const onresize = (event: UIEvent) => {
    const windowEvent = event.target as Window
    const { innerWidth } = windowEvent
    screenWidth.value = innerWidth
  }

  addEventListener('resize', onresize)
  const finalizeProcess = (): void => removeEventListener('resize', onresize)

  return {
    screenWidth,
    finalizeProcess
  }
})
