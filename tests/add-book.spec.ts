import { test } from "@fixtures/base.fixture"; 
import { BookStorePage } from "@pages/bookStore.page";
import { ProfilePage } from "@pages/profile.page";
import books from '@test-data/books.data.json';

for(const book of books) {
    test(`should add ${book.title} book to the collection`, async ({ page, cleanUp }) => { 
        const bookStorePage = new BookStorePage(page);
        await bookStorePage.navigateToBookStore();
        await bookStorePage.openBook(book.title);
        await bookStorePage.addToCollection();
        cleanUp.booksToDelete.push(book.isbn);
        const profilePage = new ProfilePage(page);
        await profilePage.navigateToProfile();
        await profilePage.assertBook(book.title);
    })
}