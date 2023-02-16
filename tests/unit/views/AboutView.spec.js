import { shallowMount } from "@vue/test-utils";
import AboutView from '@/views/AboutView'

describe("Pruebas en AboutView", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(AboutView);
    });

    test("debe de hacer match con el snapshot", () => {

        expect(wrapper.html()).toMatchSnapshot();

    });
})