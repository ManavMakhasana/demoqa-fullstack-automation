import { test, expect } from '@fixtures/auth.fixture';
import { ProfilePage } from '@pages/profile.page';

test('should test login bypass using api', async({ page }) => {
    const profilePage = new ProfilePage(page);
    await profilePage.navigateToProfile();
    await profilePage.assertUserValue();
})
