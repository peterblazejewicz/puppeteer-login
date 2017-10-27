require('dotenv').config();
import * as puppeteer from 'puppeteer';
import selectors from './selectors';

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://bitbucket.org/account/signin/');
  await page.type(selectors.EmailInput, process.env.BITBUCKET_EMAIL!);
  await page.type(selectors.PasswordInput, process.env.BITBUCKET_PASS!);
  await page.click(selectors.SubmitButton);
  await page.waitForNavigation();
  await page.waitForSelector(selectors.DashboardHeader);
  const dashboardElement = await page.$(selectors.DashboardOverview);
  const clip = await dashboardElement.boundingBox();
  await page.screenshot({
    path: 'screenshots/dashboard.png',
    type: 'png',
    clip: clip,
  });
  await page.close();
})();
