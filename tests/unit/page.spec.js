import {mount, shallowMount} from '@vue/test-utils';
import Page from '@/components/Page.vue';

describe('测试mount和shadow', () => {
    // shadowMount 不渲染子组件
    // mount会渲染子组件
    const wrapper = shallowMount(Page);
    // const wrapper = mount(Page);
    wrapper.setData({
        messages: ['aaa', 'bbb']
    });
    it('测试setData', () => {
        expect(wrapper.vm.messages).toEqual(['aaa', 'bbb'])
    });
    it('增加快照', () => {
        expect(wrapper.vm.$el).toMatchSnapshot();
    });
});