// import '@/styles/globals.css'
import styles from '@/styles/Home.module.css'
import { Poppins } from 'next/font/google'
import AppLayout from "@/components/layout";
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";
import AppHome from './home';

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({ 
  weight: ['400', '700'],
  subsets: ['devanagari'] })

export default function App({ Component, pageProps }) {

  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.js')
}, []);

  return (

    <main className={`${styles.main} ${poppins.className}`} >
    <AppLayout >
    <AppHome />
    {/* <Component {...pageProps} /> */}
    </AppLayout>
    </main>
    
)}
