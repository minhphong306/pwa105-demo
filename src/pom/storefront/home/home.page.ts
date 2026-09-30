import { Page } from "@playwright/test";
import { StorefrontBasePage } from "@pom/storefront/storefront-base.page";

export class HomePage extends StorefrontBasePage {
    constructor(page: Page, url: string) {
        super(page, url);
    }

    get locs() {
        return {
            heading: this.page.getByRole("heading", { level: 1 }).nth(0)
        }
    }
}