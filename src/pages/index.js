import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';

import homeStyles from './index.module.css';

const Home = () => {
  let today = new Date();
  let eday = new Date(today.getFullYear(), 10, 3);
  //TODO: change to show past day when past election day
  if (today.getMonth() === 11 && today.getDate() > 3) {
    eday.setFullYear(eday.getFullYear() + 1);
  }

  const oneDay = 1000 * 60 * 60 * 24;
  const diffDays = Math.ceil((eday.getTime() - today.getTime()) / (oneDay));

  const year = new Date().getFullYear();

  return (
    <Layout>
      <Head title="Home" />
      <section className={homeStyles.landing}>      
        <p className={homeStyles.landingText}>We have <span className={homeStyles.days}>{diffDays}</span> days until election day.</p>
        <p className={homeStyles.ready}>Are you ready?</p>
      </section>
      <main className={homeStyles.main}>
        <section className={homeStyles.text}>
          <p>OK Park family, I get it...</p>
          <p>It's the most important election of our lifetimes. Again.</p>
          <p>So, I wanted to help you guys get more information to help you vote! Thanks (I guess?) to COVID, all of us have no excuse mail-in voting, so there really is no reason not to vote when you can vote in your pajamas at home.</p>
          <p>Select your state below and from there, you can get state-specific information to check if you are registered, how you can register if you are not, and how to request an absentee ballot. Most importantly, I put the deadlines.</p>
        </section>
        <section className={homeStyles.buttonContainer}>
            <button type="button"><Link to="/illinois/">Illinois</Link></button>
            <button type="button"><Link to="/michigan/">Michigan</Link></button>
            <button type="button"><Link to="/minnesota/">Minnesota</Link></button>
            <button type="button"><Link to="/new-hampshire/">New Hampshire</Link></button>
            <button type="button"><Link to="/new-york/">New York</Link></button>
            <button type="button"><Link to="/washington/">Washington</Link></button>
        </section>
        <p>Please, don't eff this one up...</p>
      </main>
      <footer>
        Created by Keishi Hashimoto, {year}
      </footer>
    </Layout>
  )
}

export default Home
