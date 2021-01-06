import { Selector } from 'testcafe';
import { Role } from 'testcafe';

export const standardUser = Role(
	'https://www.saucedemo.com/index.html',
	async t => {
		await t
			.typeText('#user-name', 'standard_user')
			.typeText('#password', 'secret_sauce')
			.click('#login-button');
	},
	{ preserveUrl: true }
);

export const locked_out_user = Role(
	'https://www.saucedemo.com/index.html',
	async t => {
		await t
			.typeText('#user-name', 'locked_out_user')
			.typeText('#password', 'secret_sauce')
			.click('#login-button');
	},
	{ preserveUrl: true }
);

export const problem_user = Role(
	'https://www.saucedemo.com/index.html',
	async t => {
		await t
			.typeText('#user-name', 'problem_user')
			.typeText('#password', 'secret_sauce')
			.click('#login-button');
	},
	{ preserveUrl: true }
);

export const performance_glitch_user = Role(
	'https://www.saucedemo.com/index.html',
	async t => {
		await t
			.typeText('#user-name', 'performance_glitch_user')
			.typeText('#password', 'secret_sauce')
			.click('#login-button');
	},
	{ preserveUrl: true }
);
