import { shallowMount } from '@vue/test-utils';
import Ajax from '@/components/Ajax.vue';
import axios from 'axios';
const mockData = {
    data: {
        answer: 'mock_yes',
        image: 'mock.png'
    }
};
jest.mock('axios', () => ({
    post: jest.fn(() => Promise.resolve(mockData))
}))
describe('mock axios', () => {
    beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
    });
    const wrapper = shallowMount(Ajax);
    it('测试axios.post方法是否触发', () => {
        wrapper.find('button').trigger('click');
        const URL = "https://yesno.wtf/api";
        expect(axios.post).toHaveBeenCalledWith(URL);
    });
    it('测试异步函数返回值', async () => {
        const result = await wrapper.vm.request();
        expect(result).toEqual(mockData)
    });
});