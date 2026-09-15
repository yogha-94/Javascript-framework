// pages/BasePage.js

const { expect } = require('@playwright/test');

class BasePage {
    constructor(page) {
        this.page = page;
    }

   async launchBrowser(){
  const browser =await chromium.launch({headless: false});
  const context = await browser.newContext();
  const page = await context.newPage();
}

    async goto(url) {
        await this.page.goto(url);
    }

    
    async fill(locator, value) {
        await this.page.locator(locator).fill(value);
    }


    async click(locator) {
        await this.page.locator(locator).click();
    }

    
    async fillAndClick(fillLocator, value, clickLocator) {
        await this.fill(fillLocator, value);
        await this.click(clickLocator);
    }

   
    async title() {
        return await this.page.title();
    }


    async url() {
        return this.page.url();
    }

    
    async doubleClick(locator) {
        await this.page.locator(locator).dblclick();
    }


    async rightClick(locator) {
        await this.page.locator(locator).click({ button: 'right' });
    }

   
    async getText(locator) {
        return await this.page.locator(locator).textContent();
    }


    async isVisible(locator) {
        return await this.page.locator(locator).isVisible();
    }

    
    async isChecked(locator) {
        return await this.page.locator(locator).isChecked();
    }


    async toHaveUrl(expectedUrl) {
        await expect(this.page).toHaveURL(expectedUrl);
    }


    async toHaveTitle(expectedTitle) {
        await expect(this.page).toHaveTitle(expectedTitle);
    }


    async waitForTimeout(milliseconds) {
        await this.page.waitForTimeout(milliseconds);
    }


    async takeScreenshot(path) {
        await this.page.screenshot({
            path,
            fullPage: true
        });
    }

    async selectByValue(locator, value) {
        await this.page.locator(locator).selectOption(value);
    }

  
    async selectByLabel(locator, label) {
        await this.page.locator(locator).selectOption({ label });
    }

    async goBack() {
        await this.page.goBack();
    }

    async close() {
        await this.page.close();
    }


    async zoomOut(scale = 0.8) {
        await this.page.evaluate((zoom) => {
            document.body.style.zoom = zoom;
        }, scale);
    }

    async scrollIntoView(locator) {
        await this.page.locator(locator).scrollIntoViewIfNeeded();
    }

    async press(locator, key) {
        await this.page.locator(locator).press(key);
    }
}

module.exports = BasePage;