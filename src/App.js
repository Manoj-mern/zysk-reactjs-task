import React from 'react';
import A from './app.module.css'
import Nav from './nav/nav';
import Graph from './middlebodysection/graph';
import SocialProofSection from './SocialProofSection';

const App = () => {
  return (
    <div className={A.entirecontainer}>
    <Nav/>
    <Graph/>
    <SocialProofSection/>

    </div>
  );
}

export default App;
