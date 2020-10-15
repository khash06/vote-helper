import React from "react";
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/fontawesome';

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
        <div className={homeStyles.titleContainer}>
          <p className={homeStyles.landingText}>We have</p><span className={homeStyles.days}>{diffDays} days</span><p className={homeStyles.landingText}>until</p><p className={homeStyles.landingText}>Election Day</p>      
        </div>
        {diffDays <= 20 ? <span className={homeStyles.emoji} role='img' aria-label="Scream Face">&#128561;</span> : null}
        <p className={homeStyles.ready}>Are you ready?</p>
      </section>
      <section>
        <p className={homeStyles.scrollDown}><FontAwesomeIcon icon={'chevron-down'} />&nbsp; Scroll Down &nbsp;<FontAwesomeIcon icon={'chevron-down'} /></p>
      </section>
      <main className={homeStyles.main}>
        <section className={homeStyles.text}>
          <p>OK Park family, I get it...</p>
          <p>It's the most important election of our lifetimes. Again.</p>
          <p>So, I wanted to help you guys get more information to help you vote! Thanks (I guess?) to COVID, all of us have no excuse mail-in voting, so there really is no reason not to vote when you can vote in your pajamas at home.</p>
          <p>Select your state below and from there, you can get state-specific information to check if you are registered, how you can register if you are not, and how to request an absentee ballot. Most importantly, I put the deadlines.</p>
        </section>
        <section className={homeStyles.buttonContainer}>
            <Link className={homeStyles.button} to="/illinois/">Illinois</Link>
            <Link className={homeStyles.button} to="/michigan/">Michigan</Link>
            <Link className={homeStyles.button} to="/minnesota/">Minnesota</Link>
            <Link className={homeStyles.button} to="/new-hampshire/">New Hampshire</Link>
            <Link className={homeStyles.button} to="/new-york/">New York</Link>
            <Link className={homeStyles.button} to="/washington/">Washington</Link>
        </section>
        <section className={homeStyles.text}>
          <p>For more information and, to be honest, better looking places to get your information, check out these sites</p>
          <ul>
            <li><a href="https://votesaveamerica.com/" target="_blank" rel="noopener noreferrer">Vote Save America <FontAwesomeIcon icon={'external-link-alt'}/></a></li>
            <li><a href="https://www.washingtonpost.com/elections/2020/how-to-vote/" target="_blank" rel="noopener noreferrer">Washington Post <FontAwesomeIcon icon={'external-link-alt'}/></a></li>
            <li><a href="https://projects.fivethirtyeight.com/how-to-vote-2020/?cid=rrpromo" target="_blank" rel="noopener noreferrer">FiveThirtyEight <FontAwesomeIcon icon={'external-link-alt'}/></a></li>
            <li><a href="https://www.vote.org/" target="_blank" rel="noopener noreferrer">Vote.org <FontAwesomeIcon icon={'external-link-alt'} /></a></li>
          </ul>
        </section>
        <p className={homeStyles.bottomNote}>Please, don't eff this one up...<span role='img' aria-label="Fingers Crossed">&#129310;</span></p>
      </main>
      <footer className={homeStyles.footer}>
        <p>Created by Keishi Hashimoto, {year}</p>
      </footer>
    </Layout>
  )
}

export default Home
