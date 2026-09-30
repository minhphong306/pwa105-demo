import { test as base } from '@playwright/test';
import { HomePage } from '@pom/storefront/home/home.page';

export const test = base.extend<{
    homePage: HomePage,
}>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page, process.env.BASE_URL || '');
        await use(homePage);
    }
});