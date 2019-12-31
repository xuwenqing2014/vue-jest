import {shallowMount, mount} from '@vue/test-utils';
import Btn from '@/components/Btn.vue'
import Home from '@/views/Home.vue';

describe('测试emit', () => {
    const wrapper = shallowMount(Btn);
    const homeWrapper = mount(Home);
    it('mock函数', () => {
        // mock函数可以代替组件中的函数，可以统计是否触发，触发几次
        const mockFn = jest.fn();
        wrapper.setMethods({
            btnClick: mockFn
        });
        wrapper.trigger('click');
        expect(mockFn).toBeCalled();
        expect(mockFn).toHaveBeenCalledTimes(1)
    });
    // it('子组件mock 的emit', () => {
    //     const mockFn = jest.fn();
    //     wrapper.vm.$on('add', mockFn);
    //     wrapper.trigger('click');
    //     expect(mockFn).toBeCalled();
    //     expect(mockFn).toHaveBeenCalledTimes(1)
    // });
    it('父组件mock emit函数', () => {
        const mockEmitFn = jest.fn();
        homeWrapper.setMethods({
            addBtn: mockEmitFn
        });
        homeWrapper.find(Btn).vm.$emit('add', 100);
        expect(mockEmitFn).toBeCalled();
        expect(mockEmitFn).toHaveBeenCalledTimes(1)
    });
})