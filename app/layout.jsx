import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Main from '@/components/Main'; // Import the Main component
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GoEvents-app',
  description: 'Site Web d une salle de conference qui affiche les differents evenements',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full flex flex-col">
        <Header />
        <Main>{children}</Main> {/* Use the Main component here */}
        <Footer />
      </body>
    </html>
  );
}
