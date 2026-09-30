import { test } from '@fixtures/storefront/home/home.fixture';

test('Test home page displayed', async ({ homePage }) => {
    await homePage.open("google.com")
});

