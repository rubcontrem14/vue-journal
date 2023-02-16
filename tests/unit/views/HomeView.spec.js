import { shallowMount } from "@vue/test-utils";
import HomeView from '@/views/HomeView'

describe("Pruebas en HomeView", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(HomeView);
    });

    test("debe de hacer match con el snapshot", () => {

        expect(wrapper.html()).toMatchSnapshot();

    });

    test("hacer click en un botón debe de redireccionar a no-entry", () => {

        const mockRouter = {
            push: jest.fn()
        }
        wrapper = shallowMount(HomeView, {
            global: {
                mocks:{
                    $router: mockRouter
                }
            }
        });
        wrapper.find('button').trigger('click')

        expect(mockRouter.push).toHaveBeenCalled()
        expect(mockRouter.push).toHaveBeenCalledWith({ name: "no-entry" })
    });
})