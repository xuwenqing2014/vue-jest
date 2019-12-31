import { shallowMount } from '@vue/test-utils';
import Computed from '@/components/Computed.vue';

describe('测试computed', () => {
    const wrapper = shallowMount(Computed, {
        propsData: {
            needReverse: true
        }
    });
    it('computed', () => {
        wrapper.vm.inputValue = 'aabb';
        expect(wrapper.vm.outputValue).toBe('bbaa');
    })
});