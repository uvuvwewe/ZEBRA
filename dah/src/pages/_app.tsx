import { AppProps } from 'next/app';
import { ThemeProvider } from '../contexts/theme';
import '../styles/app.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className='h-full text-black dark:text-white bg-primary-100 dark:bg-gray-800 overflow-auto'>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
