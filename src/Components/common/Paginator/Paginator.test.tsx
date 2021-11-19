import React from "react";
import Paginator from "./Paginator";
import {create} from "react-test-renderer";


describe("Paginator component test", () => {
    test("pages count 11 but should be shown 12", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} onPageChanged={() => {}}/>)
        const root = component.root
        let spans = root.findAllByType('span')
    expect(spans.length).toBe(12)
    })

    test(`if pages count is more then 10 button ">" should bу present`, () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} onPageChanged={() => {}}/>)
        const root = component.root
        let spans = root.findAllByType('button')
        expect(spans.length).toBe(1)
    })
})