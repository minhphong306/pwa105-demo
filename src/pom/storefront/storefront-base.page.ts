import { Page } from "@playwright/test";
import { BasePage } from "@pom/base.page";

export class StorefrontBasePage extends BasePage {
    constructor(page: Page, url: string) {
        super(page, url);
    }
}