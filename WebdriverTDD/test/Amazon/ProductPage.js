class ProductPage{
    async goToAddToCartPage(){
        const addToCartBtn = await $("#add-to-cart-button")
        await addToCartBtn.click()
    }
}
export{ProductPage}