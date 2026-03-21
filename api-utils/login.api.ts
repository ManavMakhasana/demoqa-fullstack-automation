import { APIRequestContext } from '@playwright/test';

export async function generateAuthToken(request: APIRequestContext) {
    const response = await request.post(`${process.env.BASE_URL}/Account/v1/Login`, {
        data: {userName: process.env.DEMOQA_USERNAME, password: process.env.DEMOQA_PASSWORD}
    });
    return await response.json();
}