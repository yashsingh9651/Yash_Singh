import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';
import { Chakra_Petch} from 'next/font/google';

const chakraPetch = Chakra_Petch({ subsets: ['latin'],weight:['300','400','500','600','700'] });

export const metadata = {
  title: 'YASH SINGH-Web Developer',
  description: 'Created by Yash Singh using Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={chakraPetch.className}>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        {children}</body>
    </html>
  )
}
