import React, { useState } from 'react';
import * as LandingComponents from './components/landing-common';
import './style.scss';

const LandingScene = ({width, height}) => {
  const [showNav, setShowNav] = useState(false);

  const closeNav = (e) => {
    e.preventDefault();
    setShowNav(!showNav);
  }

  return (
    <div className="landing">
      <div className="nav-overlay" active={showNav ? "active" : ""} onClick={closeNav}/>
      <LandingComponents.LandingNavigation state={showNav} setState={setShowNav} width={width} height={height}/>
      <div className="landing-body">
        <LandingComponents.LandingAside width={width} height={height} state={showNav}/>
        <section className="landing-content">
          <div className="content-body">

            <div className="row">
              <div className="col-12 col-md-8">
                <span className="font title">Hello Mortals.</span><br/>
                <small>This is my default design language system.</small>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-8 mt-5">
                <p className="mb-3">
                  <big><b> Ikhtisar </b></big> is one of my projects to reuse my design framework across projects.
                  I have a certain love-hate relationship to CSS global class provider like bootstrap.
                  It dictates my previous web project with customizable, but rigid components.
                  But, i really love Bootstrap's grid and box-sizing feature.
                </p>
                <p className="mb-3">
                  I'm not using bootstrap in past few years and devoting myself to the Block Element Modifier approach.
                  In this phase, i learned about flexbox and SCSS.
                </p>
                <p className="mb-3">
                  The BEM approach is really great for creating custom web page without CSS framework.
                  However, it is not desirable to do this approach as project scale is getting bigger and bigger.
                  Almost everyone i knew have easier time to do the project with robust CSS Framework like Bootstrap or Tailwind.
                </p>
                <p className="mb-3">
                  So, i thought it would've been better to make a design language system that uses common utilities from bootstrap and granular styling with SCSS.
                  I don't plan to make this design language system as a node package. 
                  I hope it helps future people who are working with me. 
                </p>
                <p className="mb-3">
                  This project is partially inspired by Gojek Asphalt, Bootstrap, Material Design, Fluid Design, and many more.
                </p>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingScene;
