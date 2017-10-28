require('dotenv').config();
import { launch, Page, Browser } from 'puppeteer';
import selectors from '../common/selectors';

describe('BitBucket login tests', () => {
  const _30 = 1000 * 30;
  let browser: Browser, page: Page;

  beforeAll(async () => {
    browser = await launch(
      process.env.DEBUG ? { headless: false, slowMo: 100 } : {},
    );
    page = await browser.newPage();
  });

  it(
    'opens a signing page',
    async () => {
      await page.goto('https://bitbucket.org/account/signin/');
    },
    _30,
  );

  it(
    'allows to type the email',
    async () => {
      await page.type(selectors.EmailInput, process.env.BITBUCKET_EMAIL!);
    },
    _30,
  );

  it(
    'allows to type the password',
    async () => {
      await page.type(selectors.PasswordInput, process.env.BITBUCKET_PASS!);
    },
    _30,
  );

  it(
    'allows to submit a signing form',
    async () => {
      await page.click(selectors.SubmitButton);
    },
    _30,
  );

  it(
    'after submit user lands on dashboard page',
    async () => {
      await page.waitForNavigation();
      await page.waitForSelector(selectors.DashboardHeader);
    },
    _30,
  );

  it(
    'after login user lands on the dashboard page',
    async () => {
      const dashboardElement = await page.$(selectors.DashboardOverview);
      const clip = await dashboardElement.boundingBox();
      await page.screenshot({
        path: 'screenshots/dashboard.png',
        type: 'png',
        clip,
      });
    },
    _30,
  );

  afterAll(async () => {
    await page.close();
    await browser.close();
  });
});
