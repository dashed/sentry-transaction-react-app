/* eslint-disable */
import * as Sentry from "@sentry/browser";
import { Integrations as ApmIntegrations } from "@sentry/apm";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

Sentry.init({
  // http://dev.getsentry.net:8000/free-plan-2/test-trace-react/getting-started/javascript-react/
  // dsn: "http://75403a5614aa44a09fbff20f07d78eae@dev.getsentry.net:8000/14",

  // sentry/free-plan/test-trace-react
  dsn:
    "https://e0b8bf87fe754732864263e79983ddaa@o408398.ingest.sentry.io/5280150",

  // local/tracing-test-co/test-tracing-react
  // dsn: "http://8b47cca89c884eda825d9c2472387f99@dev.getsentry.net:8000/13",

  tracesSampleRate: 1.0,
  integrations: [
    new ApmIntegrations.Tracing({
      debug: {
        spanDebugTimingInfo: true,
        writeAsBreadcrumbs: true,
      },
    }),
  ],

  // beforeSend(event, hint) {
  //   // Check if it is an exception, and if so, show the report dialog
  //   if (event.exception) {
  //     Sentry.showReportDialog({
  //       eventId: event.event_id,
  //       title: "<strong>hello</strong>",
  //       errorFormEntry: "<img src=x onerror=alert(1)>XSS_1",
  //       successMessage: "<img src=x onerror=alert(2)>XSS_2",
  //       errorGeneric: "<img src=x onerror=alert(3)>XSS_3",
  //     });
  //   }

  //   return event;
  // },
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
