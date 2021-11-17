import React from "react";
import {create, ReactTestInstance, ReactTestRenderer} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {

    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Hello bro"/>);
        const instance: any = component.getInstance()
        expect(instance.state.status).toBe("Hello bro")
    })

    test("after creating <span> should be displayed", () => {
        const component = create(<ProfileStatus status="Hello bro"/>);
        const root = component.root
        let span = root.findByType("span");
        expect(span).not.toBeNull()
    })

    test("after creating <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="Hello bro"/>);
        const root = component.root
        expect(() => {
            let input = root.findByType("input");
        }).toThrow()
    })

    test("after creating <span> should contains correct status", () => {
        const component = create(<ProfileStatus status="Hello bro"/>);
        const root = component.root
        let span = root.findByType("span");
        expect(span.children[0]).toBe("Hello bro")
    })

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="Hello bro"/>);
        const root = component.root
        let span = root.findByType("span");
        span.props.onDoubleClick()
        let input = root.findByType("input");
        expect(input.props.value).toBe("Hello bro")
    })
    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="Hello bro" updateStatus={mockCallback}/>);
        const instance: any = component.getInstance()
        instance.deActivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})