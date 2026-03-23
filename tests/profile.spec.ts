import { test, expect } from '@fixtures/auth.fixture';
import { ProfilePage } from '@pages/profile.page';

test('should test login bypass using api', async({ page }) => {
    await page.goto(`${process.env.BASE_URL}/profile`);
    const profilePage = new ProfilePage(page);
    await profilePage.assertUserValue();
})
