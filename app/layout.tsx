import { NavProvider } from '@/context/NavContext';
import './globals.css'; // Or '../styles/globals.css' based on your choice
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supply Chain Dashboard',
  description: 'A Next.js dashboard for supply chain management',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavProvider>
          <Navbar /> {/* Add Navbar here if it should be global */}
          {children}
        </NavProvider>
      </body>
    </html>
);
}