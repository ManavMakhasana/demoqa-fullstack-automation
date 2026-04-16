import { test as base } from '@playwright/test';

type CleanUpFixture = {
    cleanUp: { booksToDelete: string[] };
};

type AuthDependencies = {
    authData: { token: string; userId: string };
};

export const cleanUpTest = base.extend<CleanUpFixture & AuthDependencies>({
        cleanUp: async ({ request, authData }, use) => {
        const registry = { booksToDelete: [] as string[] };
        await use(registry);    
        if (registry.booksToDelete.length > 0) {
            for (const isbn of registry.booksToDelete) {
                await request.delete(`${process.env.BASE_URL}/BookStore/v1/Book`, {
                    headers: {
                        'Authorization': `Bearer ${authData.token}`,
                        'Accept': 'application/json'
                    },
                    data: {
                        userId: authData.userId,
                        isbn: isbn
                    }
                });
            }
        }
    }
});