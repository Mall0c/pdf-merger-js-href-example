const PDFMerger = require('pdf-merger-js');
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {

    // Create pdf from an HMTL.
    const browser = await puppeteer.launch({
        executablePath : puppeteer.executablePath(),
        headless : true,
        args : ['--no-sandbox']
    })

    const page = await browser.newPage();
    const htmlPath = path.join(__dirname, 'test.html')

    await page.goto(`file://${htmlPath}`, {
        waitUntil: 'networkidle0',
        timeout: 600000
    });

    const pdfOptions = {
        printBackground: true,
        displayHeaderFooter: false,
        format: 'A4',
        path: path.join(__dirname, 'test.pdf')
    }
    
    await new Promise(res => setTimeout(res, 2000))
    await page.pdf(pdfOptions);
    await browser.close();

    // Now let's create the same PDF, but proxy it through the PDFMerger.
    const merger = new PDFMerger();
    await merger.add(path.join(__dirname, 'test.pdf'))
    await merger.save(path.join(__dirname, 'test-merged.pdf'))
})()