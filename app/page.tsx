import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Hero from '../app/components/Hero';

import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
