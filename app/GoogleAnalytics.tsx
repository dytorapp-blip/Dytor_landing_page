// app/GoogleAnalytics.tsx
"use client";

import Script from "next/script";
import React from "react";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BWP8YDE3VM"
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BWP8YDE3VM');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
