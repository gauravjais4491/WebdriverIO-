describe("File upload Demo", () => {
    it("should upload file in window", async () => {
        await browser.url("http://the-internet.herokuapp.com/upload")
        const filePath = '/Users/user/Desktop/Tech_Titans_Project/Expense/expense.js'
        await $("#file-upload").setValue(filePath)

        await $("#file-submit").click()

        const varifyFileUploaded = await $(".example > h3")
        await varifyFileUploaded.getText()
        await expect(varifyFileUploaded).toHaveText("File Uploaded!")
        console.log("Result Matched!")
        await browser.pause(10000)
    })
})

// describe('go to the file uploading page', function () {
//     it('checking that file ', async () => {
//         await browser.url('http://the-internet.herokuapp.com/upload');
//         const filePath = '/Users/user/Desktop/Tech_Titans_Project/Expense/expense.js';
//         const fileupload = await $('#file-upload');
//         await fileupload.setValue(filePath);
//         await browser.pause(3000);
//         let uploadbutton = await $('[type="submit"]');
//         await uploadbutton.click();
//         await browser.pause(9000);
//         // const uploadfilename = await $('')
//     })
// })