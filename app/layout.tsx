import { NavProvider } from '@/context/NavContext';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import ModalProvider from '@/components/ModalProvider';

export const metadata: Metadata = {
  title: 'Supply Chain Dashboard',
  description: 'A Next.js dashboard for supply chain management',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ModalProvider>
          <NavProvider>
            <Navbar />
            {children}
          </NavProvider>
        </ModalProvider>
      </body>
    </html>
  );
}