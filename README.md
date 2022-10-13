Example to show that hrefs to an id within a document don't work after passing pdfs through [pdf-merger-js](https://github.com/nbesli/pdf-merger-js).

test.html contains the code to be put into an pdf. To generate that pdf, I use puppeteer.

If you dont want to install puppeteer, remove the code in index.js that is above the comment " // Now let's create the same PDF, but proxy it through the PDFMerger.". Since test.pdf is already in this repo, this should work, too.

As you can see, clicking the links in test.pdf works, but in test-merged.pdf does not.
