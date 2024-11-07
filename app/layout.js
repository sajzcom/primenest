import '@/assets/styles/globals.css';

export const metadata = {
  title: 'PrimeNest | Find the Perfect Home',
  description: 'Wide array of properties for rent',
  keywords: 'rent, property, house, apartment, condo, townhouse',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
