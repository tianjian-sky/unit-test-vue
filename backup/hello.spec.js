// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Hello from '@/src/components/Hello.vue'

describe('Counter组件测试', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Hello, {
    attachToDocument: true
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('button should increment the count', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})
