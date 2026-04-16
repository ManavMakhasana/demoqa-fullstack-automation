# DemoQA Hybrid Automation Framework

A high-performance, hybrid (UI/API) test automation framework built with Playwright and TypeScript. This project serves as a showcase of advanced test architecture, focusing on execution speed, state management, and strict data isolation.

## 🏗️ Architectural Highlights

This framework moves beyond basic UI interactions by heavily utilizing the network layer and custom Playwright fixtures to create a fast, resilient, and self-cleaning test environment.

- **API State Injection:** Bypasses slow UI login screens by generating and injecting JWT authentication tokens and User IDs directly into the browser context.
- **Hybrid Execution Model:** Combines the validation of the UI layer with the speed of the API layer. Tests interact with the frontend, while custom teardown fixtures use direct backend API calls to instantly clean up database residue.
- **Custom Fixture Chaining:** Utilizes advanced Playwright `use()` mechanics and `mergeTests` to decouple authentication logic from data-cleanup logic, ensuring strict adherence to the Single Responsibility Principle.
- **Data-Driven Testing (DDT):** Test logic is strictly decoupled from test data. Dynamic data payloads (Titles and ISBNs) are ingested from centralized JSON files to validate multiple data sets without code duplication.
- **Strict Page Object Model (POM):** DOM locators and asynchronous event handlers (like overcoming browser dialog race conditions) are encapsulated within strict TypeScript classes.

## 🧪 Test Scenarios Covered

- **UI + API Hybrid:** Authenticating via API, adding books to a user's collection via the UI, and automatically deleting the books via backend API teardown.
- **Pure API:** Sending authorized `POST` requests to directly add books to the database, validating `201 Created` responses, and instantly tearing down data via `DELETE` endpoints.

## 🚀 Tech Stack

- **Core:** Playwright Test Runner
- **Language:** TypeScript
- **Target Application:** [DemoQA BookStore](https://demoqa.com/books)

## 📁 Directory Structure

```text
├── api-utils/            # Direct API endpoint handlers (e.g., login.api.ts)
├── fixtures/             # Custom Playwright fixtures
│   ├── auth.fixture.ts   # Handles token generation and state injection
│   ├── base.fixture.ts   # Merges fixtures into a single exportable test object
│   └── cleanup.fixture.ts# Intercepts test teardown for instant API data deletion
├── page-objects/         # Page Object Model classes
├── test-data/            # JSON files acting as the single source of truth
├── tests/                # Spec files focusing solely on business logic
├── .env                  # Environment variables (Credentials & BASE_URL)
└── playwright.config.ts  # Playwright runner configuration
```

## ⚙️ Local Setup and Execution

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- A registered account on [DemoQA](https://demoqa.com/login)

### 2. Installation

Clone the repository and install the required dependencies:

```bash
git clone <your-repository-url>
cd demoqa-fullstack-automation
npm install
npx playwright install --with-deps
```

### 3. Environment Configuration

Create a `.env` file in the root directory of the project and add your DemoQA credentials and the base URL:

```env
BASE_URL=[https://demoqa.com](https://demoqa.com)
USERNAME=your_demoqa_username
PASSWORD=your_demoqa_password
```

### 4. Running the Tests

Run the full test suite (executes headlessly by default):

```bash
npx playwright test
```

Run the tests in UI mode for visual debugging:

```bash
npx playwright test --ui
```

View the execution report:

```bash
npx playwright show-report
```
