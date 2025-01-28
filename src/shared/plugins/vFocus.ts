import type { Directive } from 'vue'

export const vFocus: Directive<HTMLInputElement, { firstFocus: boolean; color: string }> = {
  mounted(el, { value: { firstFocus, color } }) {
    if (firstFocus) {
      el.style.outlineColor = color
      el.focus()
    }
  },
}
