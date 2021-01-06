import { Role, Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

import { login, getPageUrl } from '../tests/loginClass';

import * as roles from '../tests/roles';

fixture`Big Page with many elements`
	.page`https://ultimateqa.com/complicated-page`
	.before(async t => {
		console.log('::before Big Page with many elements');
	})
	.after(async t => {
		console.log('::after Big Page with many elements');
	});

test('to check the number of buttons available and click the last one', async t => {
	const totalButtons = Selector('a[class*="et_pb_button_"]', { timeout: 5000 });
	await t.expect(totalButtons.count).eql(12);
	await t.click(totalButtons.nth(11));
});

test('to check the numbers of twitters icon is 5', async t => {
	const twitters = Selector('[title="Follow on Twitter"]');
	await t.expect(twitters.count).eql(5);
});

test('entering and replacing value in textField', async t => {
	const name = Selector('#et_pb_contact_name_0');

	await t
		.setTestSpeed(0.02)
		.typeText(name, 'rahul')
		.typeText(name, 'aledia', { replace: true })
		.selectText(name)
		.pressKey('delete');
});

test('printing upsidedown triangle in testBox', async t => {
	const scrollBy = ClientFunction(() => {
		window.scrollBy(0, 1000);
	});

	const textBox = Selector('#et_pb_contact_message_0');

	await t.hover(textBox); // to scroll to the page till textbox

	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10 - i; j++) {
			if (j < i) await t.typeText(textBox, ' ');
			else await t.typeText(textBox, '*');
		}
		await t.pressKey('enter');
	}
});

fixture`Basic Flow Automation`.page('https://www.saucedemo.com/index.html');

test('To check login functionality', async t => {
	await t.expect(getPageUrl()).contains('/index.html');

	await login({
		email: 'standard_user',
		password: 'secret_sauce',
		t,
	});
});

test('Should be able to complete one flow', async t => {
	await t
		.maximizeWindow() //
		.typeText('#user-name', 'standard_user') //
		.typeText('#password', 'secret_sauce') //
		.click('#login-button')
		.takeScreenshot('postLogin.png')
		.click('[class="btn_primary btn_inventory"]', { timeout: 2000 })
		.click('.shopping_cart_link.fa-layers.fa-fw', { timeout: 2000 })
		.click('.btn_action.checkout_button', { timeout: 2000 })
		.typeText('#first-name', 'rahul')
		.typeText('#last-name', 'aledia')
		.typeText('#postal-code', '122414')
		.click('.btn_primary.cart_button', { timeout: 2000 })
		.click('.btn_action.cart_button', { timeout: 2000 });
});

test.page('https://www.saucedemo.com/checkout-complete.html')(
	'Should be able to see final order confirmation page',
	async t => {
		await t
			.expect(Selector('h2').withText('THANK YOU FOR YOUR ORDER').exists)
			.ok();
		await t.takeScreenshot('finalOrder.png');
	}
);

fixture`To check authentication feature`.only;

test('To check different users login', async t => {
	await t
		.useRole(roles.standardUser)
		.useRole(roles.locked_out_user)
		.useRole(roles.problem_user)
		.useRole(roles.performance_glitch_user)
		.useRole(roles.standardUser);
});

test.page('https://www.saucedemo.com/index.html').httpAuth({
	username: 'standard_user',
	password: 'secret_sauce',
})('To test HTTP auth', async t => {});
