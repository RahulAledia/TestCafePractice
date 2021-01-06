import { ClientFunction, Selector } from 'testcafe';

export const login = async ({ email, password, t }) => {
	await t.typeText('#user-name', email);
	await t.typeText('#password', password);
	await t.click('#login-button');
};

export const getPageUrl = ClientFunction(() => window.location.href);
