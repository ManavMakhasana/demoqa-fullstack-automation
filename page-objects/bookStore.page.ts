import { Page, Locator } from "@playwright/test";

export class BookStorePage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly addToYourCollectionButton: Locator;

    constructor (page: Page) {
        this.page = page;
        this.searchInput = page.locator('#searchBox');
        this.addToYourCollectionButton = page.getByRole('button', { name: /Add To Your Collection/i });
    }

    async navigateToBookStore() :Promise<void> {
        await this.page.goto(`${process.env.BASE_URL}/books`);
    }

    async openBook( bookTitle: string ) :Promise<void> {
        await this.searchInput.fill(bookTitle);
        await this.page.locator(`span[id='see-book-${bookTitle}']`).click();
    }

    async addToCollection() :Promise<void> {
        const dialogEvent = this.page.waitForEvent('dialog');
        await this.addToYourCollectionButton.click();
        const dialog = await dialogEvent;
        await dialog.accept();
    }
}