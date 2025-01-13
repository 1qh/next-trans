import Script from 'next/script'
import './globals.css'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body>
        <Script src='/translation.js' strategy='beforeInteractive' />
        <Script
          src='//translate.google.com/translate_a/element.js?cb=TranslateInit'
          strategy='afterInteractive'
        />
        {children}
      </body>
    </html>
  )
}
