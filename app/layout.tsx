import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

// ====== GOOGLE ADS — PLACEHOLDER (عدّل قبل الرفع) ======
const AW_ID = "AW-XXXXXXXXXX"; // TODO

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#14201c",
};

export const metadata: Metadata = {
  title:
    "مشاريع مدينة مصر 2026 | أسعار كمبوند سراي وتاج سيتي وذا باترفلاي — أنظمة السداد",
  description:
    "اعرف أسعار مشاريع شركة مدينة مصر للإسكان والتعمير (مدينة نصر سابقًا): كمبوند سراي (Sarai New Cairo) — شقق وفيلات للبيع في سراي المستقبل سيتي — على 5.5 مليون م² بأكبر بحيرة صناعية قابلة للسباحة في مصر، وتاج سيتي على 900 فدان بطريق السويس على بُعد 5 دقائق من مطار القاهرة، وذا باترفلاي على 238 فدانًا بمدينة المستقبل. أسعار تبدأ من 9 مليون جنيه بمقدم 5% وتقسيط حتى 10 سنوات.",
  keywords: [
    "مشاريع مدينة مصر",
    "مدينة مصر للإسكان والتعمير",
    "كمبوند سراي",
    "Sarai New Cairo",
    "sarai new cairo prices",
    "اسعار سراي",
    "اسعار شقق سراي",
    "شقق للبيع في سراي",
    "فيلات للبيع في سراي",
    "سراي المستقبل سيتي",
    "سعر المتر في سراي",
    "اسعار الفيلات",
    "تاج سيتي",
    "Taj City New Cairo",
    "ذا باترفلاي",
    "The Butterfly Mostakbal City",
    "شقق للبيع في القاهرة الجديدة",
    "كمبوندات طريق السويس",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "مشاريع مدينة مصر — كمبوند سراي وتاج سيتي وذا باترفلاي | أسعار 2026",
    description:
      "أسعار وأنظمة سداد مشاريع مدينة مصر بالقاهرة الجديدة ومدينة المستقبل. أسعار تبدأ من 9 مليون، مقدم 5% وتقسيط حتى 10 سنوات.",
    type: "website",
    locale: "ar_EG",
    images: ["/images/hero.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,600;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-ivory text-ink antialiased">
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${AW_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${AW_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
