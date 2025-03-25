import ClientProviders from '@/components/ClientProviders';

import { openSans } from '@/styles/fonts';

export const metadata = {
  title: 'Obrio test task',
  description: 'This is a test task for Obrio',
  icons: {
    icon: '/favicon.png',
  },
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en" className={openSans.className} suppressHydrationWarning>
    <body>
      <ClientProviders>{children}</ClientProviders>
    </body>
  </html>
);

export default RootLayout;
