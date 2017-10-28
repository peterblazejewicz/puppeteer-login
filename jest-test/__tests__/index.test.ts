import puppeteer from 'puppeteer';
import { Page, Browser } from 'puppeteer';

describe('Open page', () => {
  let browser: Browser, page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch(
      process.env.DEBUG ? { headless: false, slowMo: 100 } : {},
    );
    page = await browser.newPage();
  });

  test('It passes', async () => {
    expect(true).toBe(true);
  });

  afterAll(async () => {
    await page.close();
    await browser.close();
  });
});
