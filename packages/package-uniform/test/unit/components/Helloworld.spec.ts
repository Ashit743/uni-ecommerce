import  HelloWord  from "../../../src/components/HelloWorld.vue"
import { describe,it,expect } from 'vitest';
import { mount } from '@vue/test-utils'

describe('Hello world',()=>{
    let wrapper = mount(HelloWord)
    it('first sample test',()=>{
        expect(wrapper.element).toMatchSnapshot();
    })
})