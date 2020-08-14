import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Head from '../components/Head';

const Home = () => {
  let today = new Date();
  let eday = new Date(today.getFullYear(), 10, 3);
  if (today.getMonth() === 11 && today.getDate() > 3) {
    eday.setFullYear(eday.getFullYear() + 1);
  }

  const oneDay = 1000 * 60 * 60 * 24;
  const diffDays = Math.ceil((eday.getTime() - today.getTime()) / (oneDay));

  return (
    <Layout>
      <Head title="Home" />
      <p>We have <span>{diffDays}</span> days until election Day.</p>
      <p>I wanted to make a little site to help everyone either find out if they are registered to vote, register you if you are not, and find some state-specific information!</p>
      <p>Luckily for all of us (I guess?) due to COVID, we live in states that allow no-excue mail-in voting (sorry *** and ***, NY State doesn't).</p>
      <p>BUT that means there is really no excuse not to vote since you literally have to mail a piece of paper in...</p>
      <p>With our Dear Leader supposedly trying to slow our mail down (any maybe jepordizing democracy itself, but minor detail in 2020), it's best to get started early and mail in early, so here we are!</p>
    </Layout>
  )
}

export default Home
