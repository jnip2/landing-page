import Header from "@/components/Header";
import Image from "next/image";
import styles from '../styles/Home.module.css'
import TestimonialContainer from "@/components/TestimonialContainer";
import MembershipContainer from "@/components/MembershipContainer";
import NewsletterContainer from "@/components/NewsletterContainer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <TestimonialContainer />
      <MembershipContainer />
      <NewsletterContainer />
      <Footer />
    </main>
  );
}
