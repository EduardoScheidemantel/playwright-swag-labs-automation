import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../support/fixtures';

const { Given, When, Then } = createBdd(test);

Given('the user is on the login page', async ({ loginPage }) => {
  await loginPage.navigateTo();
});

When('they enter valid credentials', async ({ loginPage }) => {
  await loginPage.defaultUserLogin();
});

When('they login with username {string} and password {string}', async ({ loginPage }, username, password) => {
  await loginPage.invalidLogin(username, password);
});

Then('they should be redirected to the products page', async ({ page }) => {
  await expect(page).toHaveURL(/.*inventory.html/);
});

Then('they should see the error message {string}', async ({ page }, expectedMessage) => {
  const errorLocator = page.getByTestId('error');
  await expect(errorLocator).toHaveText(expectedMessage);
});