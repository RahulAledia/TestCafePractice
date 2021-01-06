import { Selector } from 'testcafe';

const url = "https://www.saucedemo.com/index.html";

fixture `Basic Flow Automation`
	.page(url)
	.before(async t => {
			console.log("before")
	})
	.beforeEach(async t => {
		console.log("beforeEach")
	})
	.after(async t => {
		console.log("after")
	})
	.afterEach(async t => {
		console.log("afterEach")
	})

test('Should have a username and pwd field', async t => {
    	await t.expect(Selector('#user-name').exists).ok()
	await t.expect(Selector('#password').exists).ok()
	await t.takeScreenshot('usernamePwd.png')
});

test('Should be able to complete one flow', async t => {
	await t
	
	.maximizeWindow() //
        .typeText('#user-name', 'standard_user',{speed:0.1})//
	.typeText('#password','secret_sauce',{speed:0.1})//
        .click('#login-button')  
	.takeScreenshot('postLogin.png')
	.click('[class="btn_primary btn_inventory"]')
	.wait(2000)
	.click('.shopping_cart_link.fa-layers.fa-fw')
	.wait(2000) 	  
	.click('.btn_action.checkout_button')
	.wait(2000) 	
	.typeText('#first-name','rahul')
	.typeText('#last-name','aledia')
	.typeText('#postal-code','122414')
	.click('.btn_primary.cart_button')
	.wait(2000)
	.click('.btn_action.cart_button')
	.wait(2000)

		
	
});

test.page('https://www.saucedemo.com/checkout-complete.html')
('Should be able to see final order confirmation page', async t => {
	await t.expect(Selector('h2').withText('THANK YOU FOR YOUR ORDER').exists).ok()
	await t.takeScreenshot('finalOrder.png')
})










