import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import "@/css/custom.css"
import "@/css/tailwind.css"
import Footer from '@/components/Footer';
import Header from '@/components/Header';


const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Livraizo',
  description: 'Livraiso',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

