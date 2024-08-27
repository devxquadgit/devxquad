import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Styled from '@emotion/styled';

export default function App({ Component, pageProps }: AppProps) {


  const ContainerDiv = Styled.div`
    --bs-gutter-x: 2.5rem;
    --bs-gutter-y: 0;
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(var(--bs-gutter-x)* .5);
    padding-right: calc(var(--bs-gutter-x)* .5);
    width: 100%;

    @media (min-width: 1400px) {
      max-width: 1320px;
    }

    @media (max-width: 767px) {
      max-width: 540px;
    }
  `;

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Sidebar />

      {/* Uncomment after other pages */}
      {/* <ContainerDiv>
        <Footer />
      </ContainerDiv> */}
    </>
  );
}
