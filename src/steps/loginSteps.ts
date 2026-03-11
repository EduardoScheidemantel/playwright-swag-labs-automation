import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../support/fixtures';

const { Given, When, Then } = createBdd(test);

Given('the user is on the login page', async ({ loginPage }) => {
  await loginPage.navigateTo();
});

When('they enter valid credentials', async ({ loginPage }) => {
  await loginPage.login('standard_user', 'secret_sauce');
});

Then('they should be redirected to the products page', async ({ page }) => {
  await expect(page).toHaveURL(/.*inventory.html/);
});