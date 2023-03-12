import { PlaywrightTestConfig, test } from '@playwright/test';
import axios from 'axios';
import sendAlertEmail from '../email';

const API_ENDPOINT = 'https://api.weather.gov/alerts/active?area={state}';
const STATE_CODE = 'IN'; // Replace with desired state code
const POLLING_INTERVAL = 60 * 1000; // 1 minute in milliseconds

let latestAlertId = null;

const fetchAlerts = async () => {
  const response = await axios.get(API_ENDPOINT.replace('{state}', STATE_CODE));
  const data = await response.data;
  return data;
};

const checkAlerts = async () => {
  const alerts = await fetchAlerts();
  const newAlerts = alerts.features.filter((alert) => alert.id !== latestAlertId);
  if (newAlerts.length > 0) {
    latestAlertId = newAlerts[0].id;
    sendAlertEmail(newAlerts[0]);
  }
};

const config: PlaywrightTestConfig = {
  testDir: './tests',
  use: {
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  timeout: 30000,
};

test('Cyclone Alert Monitoring', async () => {
  while (true) {
    await checkAlerts();
    await new Promise((resolve) => setTimeout(resolve, POLLING_INTERVAL));
  }
});

export default config;
