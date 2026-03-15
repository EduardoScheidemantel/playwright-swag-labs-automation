import { Page, Locator } from '@playwright/test';

  const loginCredentials = {
    standardUsername: 'standard_user',
    lockedUser: 'locked_out_user',
    password: 'secret_sauce',
  }

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByTestId('username');
    this.passwordInput = page.getByTestId('password');
    this.loginButton = page.getByTestId('login-button');
  }

  async navigateTo() {
    await this.page.goto('/');
  }

  async defaultUserLogin() {
    await this.usernameInput.fill(loginCredentials.standardUsername);
    await this.passwordInput.fill(loginCredentials.password);
    await this.loginButton.click();
  }

  async invalidLogin(username:string, password:string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}