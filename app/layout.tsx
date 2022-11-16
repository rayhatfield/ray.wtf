import './globals.css'

import Typography from 'typography'

// require to dodge missing types error
const { TypographyStyle } = require('react-typography');

import { typography } from './utils/typography'

import styles from './layout.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <TypographyStyle typography={typography} />
        <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/704534/7134372/css/fonts.css" />
      </head>
      <body>
        <div className={styles.container}>
          <main className={styles.main}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
