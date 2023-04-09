const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require("cors");
const fs = require("fs")

const puppeteer = require('puppeteer')
 
async function printPDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://blog.risingstack.com', {waitUntil: 'networkidle0'});
  const pdf = await page.pdf({ format: 'A4' });
 
  await browser.close();
  return pdf
}

printPDF().then(pdf => {
	res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
	res.send(pdf)
})


const app = express();

const pdfTemplate = require('./client/src/documents');

const options = {
	height: "42cm",
	width: "35.7cm",
	timeout: "6000",
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// POST route for PDF generation....
app.post("/create-pdf", (req, res) => {
	pdf.create(pdfTemplate(req.body), options).toFile("Resume.pdf", (err) => {
		if (err) {
			console.log(err);
			res.send(Promise.reject());
		} else res.send(Promise.resolve());
	});
});

// GET route -> send generated PDF to client...
// app.get("/fetch-pdf", (req, res) => {
// 	const file = `${__dirname}/Resume.pdf`;
// 	res.download(file);
// });

app.get('/api/v1/getPdf', function(req, res) {
	res.download('/Resume.pdf');
  });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
