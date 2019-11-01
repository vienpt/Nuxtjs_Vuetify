import { mount } from '@vue/test-utils'
import VuetifyLogo from '@/components/VuetifyLogo.vue'

describe('VuetifyLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(VuetifyLogo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('load class name', () => {
    const imgWrapper = mount(VuetifyLogo)
    expect(imgWrapper.classes('VuetifyLogo')).toBe(true)
  })
})
