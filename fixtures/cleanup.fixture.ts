import { test as base } from '@playwright/test';
import { ProfilePage } from '@pages/profile.page';

type CleanUpFixture = {
    cleanUp : { booksToDelete: string[] };
}

export const cleanUpTest = base.extend<CleanUpFixture>({
    cleanUp : async ({ page }, use) => {
        const listOfBooksToDelete = { booksToDelete: [] as string[] };
        await use(listOfBooksToDelete);
        if(listOfBooksToDelete.booksToDelete.length > 0) {
            const profilePage = new ProfilePage(page);
            await profilePage.navigateToProfile();
            for(const book of listOfBooksToDelete.booksToDelete) {
                await profilePage.deleteBook(book);
            }
        }
    }
});