import { test as base } from '@playwright/test';
import { generateAuthToken } from '@api/login.api';

export const test = base.extend({
    context: async ({request, context}, use) => {
        const authData = await generateAuthToken(request);
        await context.addCookies([
            {
                name: 'token',
                value: authData.token,
                domain: 'demoqa.com',
                path: '/'
            },
            {
                name: 'userID',
                value: authData.userId,
                domain: 'demoqa.com',
                path: '/'
            },
            {
                name: 'userName',
                value: authData.username,
                domain: 'demoqa.com',
                path: '/'
            },
            {
                name: 'expires',
                value: authData.expires,
                domain: 'demoqa.com',
                path: '/'
            }
        ]);
        await use(context);
    }
});

export { expect } from '@playwright/test';
