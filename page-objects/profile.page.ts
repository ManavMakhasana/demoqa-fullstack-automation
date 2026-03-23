import { Page, Locator, expect } from "@playwright/test";

export class ProfilePage {
    readonly page: Page;
    readonly usernameValue: Locator;

    constructor (page: Page) {
        this.page = page;
        this.usernameValue = page.locator('#userName-value');
    }

    async assertUserValue() :Promise<void> {
        await expect(this.usernameValue).toBeVisible();
    } 
}