import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

const scrollBy = ClientFunction(() => {
	window.scrollBy(0, 1000);
});

fixture`Just for practice`.page`https://www.saucedemo.com/inventory.html`;

test(`practice test`, async t => {
	const buyNowCount = Selector('.btn_primary.btn_inventory').count;
	const backPack = Selector('div.inventory_item_name', { timeout: 5000 });

	await scrollBy();

	await t
		.expect(buyNowCount)
		.eql(6)
		.expect(backPack.innerText)
		.eql('Sauce Labs Backpack');
});
