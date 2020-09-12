import React from 'react';
import * as Assets from '../../../../assets/assets-common';
import * as Components from '../../../components-common';

const LandingNavigation = ({state, setState, width, height}) => {
  return (
    <nav className="landing-nav">
      {width <= 800 ? <Components.Hamburger state={state} setState={setState}/> : null}
      <img src={Assets.MockLogo} alt="" className="nav-logo"/>
    </nav>
  );
}

export default LandingNavigation;