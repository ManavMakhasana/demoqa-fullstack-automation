import { test } from "@fixtures/auth.fixture";
import { BookStorePage } from "@pages/bookStore.page";
import { ProfilePage } from "@pages/profile.page";
import books from '@test-data/books.data.json';

for(const book of books) {
    test(`should add ${book} book to the collection`, async ({ page }) => {
        const bookStorePage = new BookStorePage(page);
        await bookStorePage.navigateToBookStore();
        await bookStorePage.openBook(book);
        await bookStorePage.addToCollection();
        const profilePage = new ProfilePage(page);
        await profilePage.navigateToProfile();
        await profilePage.assertBook(book);
    })
}
