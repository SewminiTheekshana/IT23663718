# Swift Translator Automation Suite

This project contains automated test scripts for verifying the functionality of the [Swift Translator](https://www.swifttranslator.com/) web application. It uses **Playwright** to perform Singlish to Sinhala translation tests.

## 🚀 Project Overview

The automation suite focuses on:
- **Positive Functional Testing**: Verifying correct translations for standard Singlish phrases.
- **Negative Functional Testing**: Verifying handling of malformed input, abbreviations, or complex sentence structures.

## 🛠️ Tech Stack

- **Framework**: [Playwright](https://playwright.dev/)
- **Language**: JavaScript (Node.js)
- **Environment**: Windows / Cross-browser supported

## 📂 Project Structure

```
IT23663718/
├── tests/
│   └── testcases.spec.js   # Main test file containing all test scenarios
├── playwright.config.js    # Playwright configuration settings
├── package.json            # Project dependencies and metadata
└── README.md               # Project documentation
```

## ⚙️ Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (Node Package Manager)

## 📥 Installation

1. Clone the repository or navigate to the project directory.
2. Install the dependencies:

```bash
npm install
```

3. Install Playwright browsers (if not already installed):

```bash
npx playwright install
```

## 🏃‍♂️ Running Tests

### Run all tests
To execute all test cases in headless mode:
```bash
npx playwright test
```

### Run tests with UI
To view the tests running in an interactive UI:
```bash
npx playwright test --ui
```

### Run a specific test file
```bash
npx playwright test tests/testcases.spec.js
```

### View Test Report
After running the tests, generates an HTML report:
```bash
npx playwright show-report
```

## 🧪 Test Scenarios

The suite currently includes:
- **24 Positive Test Cases**: Standard conversational Singlish to Sinhala conversion.
- **11 Negative Test Cases**: Edge cases including typos, spacing issues, and English mixed content.

## 📝 Author

Student ID: IT23663718
