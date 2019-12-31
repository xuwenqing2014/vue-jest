import Count from '@/components/Count.vue';

import {mount} from '@vue/test-utils';
import Vue from 'vue';

describe('测试count组件', () => {
    it('不使用utils测试', () => {
        const Instance = Vue.extend(Count);
        const vm = new Instance().$mount();
        expect(vm.count).toBe(0);
    });
    const wrapper = mount(Count);
    it('测试vue实例', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    })
    it('测试渲染出来的html', () => {
        expect(wrapper.html()).toContain('<div>0</div>')
    })
    it('测试是否含有button标签', () => {
        expect(wrapper.contains('button')).toBe(true)
    });
    it('测试点击事件', () => {
        const button = wrapper.find('button');
        button.trigger('click');
        expect(wrapper.vm.count).toBe(1)
    })
})

