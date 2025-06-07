import React from 'react';
import Section from '../components/Section';

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Where Businesses and Customers Come Together</h1>
          <p className="hero-subtitle">Grow a Thriving Community. Boost Your Sales</p>
          <button className="hero-cta">Get Started</button>
        </div>
      </section>

      <main className="main-content">
        <Section
          image="/placeholder1.png"
          title="Vision"
          headline="Where Business Meets Community"
          description="We're building a platform where businesses can bring their communities together—offering products and services effortlessly through a beautifully simple mobile experience."
          reverse={false}
        />

        <Section
          image="/placeholder2.png"
          title="Community"
          headline="Building community-first businesses where every connection drives growth"
          description="Invite your loyal customers into a shared-interest community where they can connect, engage, and build lasting relationships—extending far beyond the walls of your business."
          reverse={true}
        />

        <Section
          image="/placeholder3.png"
          title="Commerce"
          headline="Offer Your Goods and Services Directly to Your Community"
          description="Seamlessly launch and sell vouchers to promote the goods and services your business provides."
          reverse={false}
        />
      </main>
    </>
  );
};

export default Home;
