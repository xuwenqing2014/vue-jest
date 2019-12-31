import {shallowMount} from '@vue/test-utils';
import PageChild from '@/components/PageChild.vue';

describe('测试props及选择器', () => {
    const wrapper = shallowMount(PageChild, {
        propsData: {
            messages: ['aaa', 'bbb', 'ccc']
        }
    });
    it('测试propsData', () => {
        expect(wrapper.vm.messages).toEqual(['aaa', 'bbb', 'ccc']);
    });
    it('测试选择器', () => {
        expect(wrapper.find('ul').attributes().class).toContain('list');
        expect(wrapper.find('ul').classes()).toContain('list');
        expect(wrapper.findAll('li').length).toBe(3);
    });
});