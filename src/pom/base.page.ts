import { Page } from "@playwright/test";

export class BasePage {
    page: Page;

    constructor(page: Page, private baseUrl: string) {
        this.page = page;
    }

    async open(url: string) {
        // Not good
        let finalUrl = '';
        if (!url.includes("http") || !url.includes("https")) {
            finalUrl = `${this.baseUrl}/${url}`;
        } else {
            finalUrl = url;
        }

        await this.page.goto(finalUrl);

        // Good
        if (url.includes("http") || url.includes("https")) {
            return this.page.goto(url);
        }

        return this.page.goto(`${this.baseUrl}/${url}`);
    }
}