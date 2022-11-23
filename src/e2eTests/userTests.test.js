/**
 * @jest-environment jsdom
 */

 jest.setTimeout(30000)
const puppeteer = require('puppeteer');
let localStorage;

test('should return the login screen because registering user worked', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 30,
        args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto(
        'http://localhost:8080/register'
    );
    await page.click('#name');
    await page.type('#name', "Jantje")
    await page.click('#email');
    await page.type('#email', 'jantje@boers.family');
    await page.click('#password');
    await page.type('#password', 'Jantje123');
    await page.click('#registerButton');
    const navigation = page.waitForNavigation({ waitUntil: 'networkidle0' });
    await navigation;
    await expect(page.url()).toBe('http://localhost:8080/login');
})

test('should return home screen for logged in users because login worked', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 30,
        args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto(
        'http://localhost:8080/login'
    );
    await page.click('#login_email');
    await page.type('#login_email', 'jantje@boers.family');
    await page.click('#login_password');
    await page.type('#login_password', 'Jantje123');
    await page.click('#loginButton');
    const navigation = page.waitForNavigation({ waitUntil: 'networkidle0' });
    await navigation;
    await expect(page.url()).toBe('http://localhost:8080/');
    localStorage = await page.evaluate(() => Object.assign({},
        window.localStorage))
    console.log(localStorage)
})