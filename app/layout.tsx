import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
export const metadata = {
  title: 'Car Dekho',
  description: 'Discover the Best Cars in You Surroundings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
