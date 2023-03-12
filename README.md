# Cyclone Alert Monitoring with Playwright and Node.js

This is a simple project that demonstrates how to use [checkly](https://www.checklyhq.com) and [Node.js](https://nodejs.org/en) to build a real-time monitoring system for cyclone alerts issued by the US National Weather Service. The monitoring system periodically checks for new alerts in a specific area (e.g., a state) and sends an email notification when a new alert is issued. This project can serve as a starting point for building similar monitoring systems for other types of alerts, such as earthquakes, fires, or pandemics.

## Requirements

To run this project, you need to have the following software installed:

- Node.js v14 or later
- Playwright
- SendGrid API Key

## Getting Started

1. Clone this repository using the following command:

```bash
git clone https://github.com/jacksonkasi1/cyclone-alert-monitoring.git
```

2. Navigate to the project directory:

```bash
cd cyclone-alert-monitoring
```

3. Install the required dependencies:
```bash
npm install
```

4. Rename `.env.example` file to `.env` and fill in your SendGrid API key and email address.

5. Replace `STATE_CODE` variable in `index.ts` with your desired US state code.

Start the monitoring system:

```bash
npm run start
```

## License

This project is licensed under the MIT License. Feel free to use and modify it for your own purposes.

## Blog:

 [Building a Cyclone Alert Monitoring System using Checkly, Playwright and Node.js](https://jacksonkasi.hashnode.dev/building-a-cyclone-alert-monitoring-system-using-checkly-playwright-and-nodejs#heading-checking-for-new-alerts)