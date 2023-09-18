describe("Drag and Drop Interaction", () => {
    it("should drag and drop the element", async () => {
        await browser.url('https://demoqa.com/droppable/');
        const draggable = await $('#draggable');
        const droppable = await $('#droppable');
        await draggable.dragAndDrop(droppable);
        const dropped = await $('#droppable')
        expect(dropped).toHaveText("Dropped!")
        console.log("Dropped!")
        await browser.pause(10000)
    });
});


