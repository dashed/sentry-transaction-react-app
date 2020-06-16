/* eslint-disable */
import * as Sentry from "@sentry/browser";
import { Integrations as ApmIntegrations } from "@sentry/apm";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

Sentry.init({
  // team-plan org
  dsn:
    "https://295c792734534609871011dc4cc514a9@o225412.ingest.sentry.io/5209915",

  // dsn: "http://dc8e277ade4d4a80a9cec7737a579fd5@dev.getsentry.net:8000/11",
  // dsn: "http://4fb9e39cd19e464b8e3dafecfd802484@dev.getsentry.net:8000/10",
  // dsn: 'https://7937ea21845a462fa084fd2e1c0096b9@sentry.io/1876810',
  // dsn: 'http://4fb9e39cd19e464b8e3dafecfd802484@dev.getsentry.net:8000/10',

  tracesSampleRate: 1.0,
  integrations: [new ApmIntegrations.Tracing()],

  beforeSend(event, hint) {
    // Check if it is an exception, and if so, show the report dialog
    if (event.exception) {
      Sentry.showReportDialog({
        eventId: event.event_id,
        title: "<strong>hello</strong>",
        errorFormEntry: "<img src=x onerror=alert(1)>XSS_1",
        successMessage: "<img src=x onerror=alert(2)>XSS_2",
        errorGeneric: "<img src=x onerror=alert(3)>XSS_3",
      });
    }

    return event;
  },
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
