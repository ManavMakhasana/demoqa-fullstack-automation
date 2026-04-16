import { test } from "@fixtures/base.fixture";
import { expect } from "@playwright/test";
import books from '@test-data/books.data.json';

test.describe("Backend API Book Management", () => {
    for (const book of books) {
        test(`should add '${book.title}' directly via POST request`, async ({ request, authData, cleanUp }) => {
            const response = await request.post(`${process.env.BASE_URL}/BookStore/v1/Books`, {
                headers: {
                    'Authorization': `Bearer ${authData.token}`,
                    'Accept': 'application/json'
                },
                data: {
                    userId: authData.userId,
                    collectionOfIsbns: [
                        { isbn: book.isbn } 
                    ]
                }
            });
            expect(response.status()).toBe(201); 
            cleanUp.booksToDelete.push(book.isbn);
        });
    }
});