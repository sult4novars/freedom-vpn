import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import {NextUIProvider} from '@nextui-org/react'

export default function Home() {
  return (
    <>
      <NextUIProvider>
        <SeoHead title='LaslesVPN Landing Page' />
        <Layout>
          <Hero />
          <Feature />
          <Pricing />
        </Layout>
      </NextUIProvider>
    </>
  );
}
