import {mount} from '@vue/test-utils';
import Quantity from '@/components/Quantity.vue'

describe('测试quantity组件', () => {
    const wrapper = mount(Quantity);
    it('测试初始化', () => {
        expect(wrapper.vm.quantity).toBe(0);
    });
    it('测试up', () => {
        wrapper.trigger('keydown.up');
        expect(wrapper.vm.quantity).toBe(1);
    });
    it('测试esc', () => {
        wrapper.vm.quantity = 10;
        wrapper.trigger('keydown.esc');
        expect(wrapper.vm.quantity).toBe(0);
    });
    it('测试down', () => {
        wrapper.vm.quantity = 10;
        wrapper.trigger('keydown.down');
        expect(wrapper.vm.quantity).toBe(9);
    });
    it('测试a', () => {
        wrapper.trigger('keydown', {key: 'a'});
        expect(wrapper.vm.quantity).toBe(13);
    });
})