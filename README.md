
# DocProc(Js Version)
### Nitya Singh | ThinkRoman Ventures


This is a simple Node.js application that accepts a PDF URL, parses the text from the PDF, and returns the extracted text as JSON.

## Setup

1. Clone the repository or create a new directory for the project and navigate to it:

   ```bash
   git clone https://github.com/NityaSG/DocProcJs.git
   cd node-pdf-parser
   ```

2. Install the required dependencies using npm:

   ```bash
   npm install
   ```

## How to Use

1. Start the Node.js application:

   ```bash
   node app.js
   ```

   The server will be running on port 3000 (or the specified environment port).

2. To parse a PDF, make a POST request to the `/parse_pdf` endpoint with the JSON payload containing the PDF URL:

   ```
   POST http://localhost:3000/parse_pdf
   Content-Type: application/json

   [
       {
           "pdf_url": "https://example.com/sample.pdf"
       }
   ]
   ```

   The server will download the PDF from the provided URL, extract text from it, and return the extracted text as a JSON response.

   **Note**: Ensure that the PDF URL is publicly accessible and the server can reach it to download and extract the data.

## Dependencies

The application uses the following dependencies:

- [Express.js](https://expressjs.com/) - A web framework for Node.js.
- [body-parser](https://www.npmjs.com/package/body-parser) - Middleware for parsing JSON request bodies.
- [pdf-parse](https://www.npmjs.com/package/pdf-parse) - A library for extracting text from PDF files.
- [request](https://www.npmjs.com/package/request) - A library for making HTTP requests.

## Project Structure

- `app.js` - The main entry point of the application.
- `package.json` - The npm package configuration file that lists the project's dependencies.

## Error Handling

The application handles common errors such as invalid JSON format, missing PDF URL in the request, errors downloading the PDF, and errors parsing the PDF. Proper error responses will be sent to the client.

## Contributions

Contributions to this project are welcome! If you find any issues or improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

You can customize the README further based on your specific project details and add more information about the application's features, usage, and additional configurations if necessary.
