import { mount } from '@vue/test-utils'
import PageIndex from '@/pages/index.vue'
import Logo from '@/components/Logo.vue'
import VuetifyLogo from '@/components/VuetifyLogo.vue'

describe('Index pages', () => {
  test('is use v-card', () => {
    const wrapper = mount(PageIndex)

    const vcard = wrapper.find('v-card')
    expect(vcard.is('v-card')).toBe(true)

    // expect(wrapper.find('v-card').exists()).toBe(true)
  })

  test('is use component', () => {
    const wrapper = mount(PageIndex)

    const useComponentLogo = wrapper.find(Logo)
    expect(useComponentLogo.is(Logo)).toBe(true)

    const useComponentVuetifyLogo = wrapper.find(VuetifyLogo)
    expect(useComponentVuetifyLogo.is(VuetifyLogo)).toBe(true)
  })
})
