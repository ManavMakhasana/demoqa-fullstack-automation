import { Page, Locator, expect } from "@playwright/test";

export class ProfilePage {
    readonly page: Page;
    readonly usernameValue: Locator;
    readonly searchInput: Locator;

    constructor (page: Page) {
        this.page = page;
        this.usernameValue = page.locator('#userName-value');
        this.searchInput = page.locator('#searchBox');
    }

    async navigateToProfile() :Promise<void> {
        await this.page.goto(`${process.env.BASE_URL}/profile`);
    }

    async assertUserValue() :Promise<void> {
        await expect(this.usernameValue).toBeVisible();
    } 

    async assertBook(bookTitle: string) {
        await this.searchInput.fill(bookTitle);
        await expect(this.page.locator(`span[id='see-book-${bookTitle}']`)).toBeVisible();
    }
}