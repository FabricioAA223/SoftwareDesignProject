import React from 'react';
import NavigationBar from '../navBar/NavigationBar';

function Landing() {
  return (
    <div>
      <NavigationBar isLandingPage={true} />
      {/* Resto del contenido de tu página de inicio */}
    </div>
  );
}

export default Landing;
