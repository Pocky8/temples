import React, { useState, useEffect } from 'react';
import Temples from './components/temples';
import Visitors from './components/visitors';

function App() {
  const backgroundImageUrl = 'https://cdn.discordapp.com/attachments/806018511495102484/1149392986430521545/cool3.jpg'; 

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };

  return (
    <div style={backgroundStyle}>
      <Temples /> 
      <Visitors />
    </div>
  );
}

export default App;
