import { Metadata } from "next"
import '../../app/style/globals.css';

export const metadata: Metadata = {
  title: {
    default: "Product page",
    template: "%s | My Blog",
    absolute: "",
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
