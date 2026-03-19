"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  //   ReactDOM.preload('...', { as: '...' })
  ReactDOM.preconnect("https://robohash.org", { crossOrigin: "anonymous" });
  ReactDOM.preconnect("https://jsonplaceholder.typicode.com", {
    crossOrigin: "anonymous",
  });
  //   ReactDOM.prefetchDNS('...')

  return "...";
}
