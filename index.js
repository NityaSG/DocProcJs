const express = require('express');
const bodyParser = require('body-parser');
const PDFParser = require('pdf-parse');
const request = require('request');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

async function extractTextFromPDF(pdfUrl) {
  return new Promise((resolve, reject) => {
    request({ url: pdfUrl, encoding: null }, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        reject('Error downloading PDF');
        return;
      }

      PDFParser(body).then((pdf) => {
        resolve(pdf.text);
      }).catch((error) => {
        reject('Error parsing PDF');
      });
    });
  });
}

app.post('/parse_pdf', async (req, res) => {
  const data = req.body;

  if (!Array.isArray(data) || data.length === 0 || !data[0].pdf_url) {
    return res.status(400).json({ error: 'Invalid JSON format. Expecting a list of dictionaries with "pdf_url" key.' });
  }

  const pdfUrl = data[0].pdf_url;

  try {
    const text = await extractTextFromPDF(pdfUrl);
    return res.json({ text });
  } catch (error) {
    return res.status(400).json({ error });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
