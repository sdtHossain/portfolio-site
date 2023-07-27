import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDesignEditStore = defineStore('design', () => {
  const isEdit = ref(false)
  const selectedSection = ref('cta')

  return { isEdit, selectedSection }
})
