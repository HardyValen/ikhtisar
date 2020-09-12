import React, { useRef, useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import lottie from 'lottie-web';
import * as Assets from '../../../assets/assets-common';
import './style.scss';

const LandingScene = () => {
  const [pause, setPause] = useState(false);
  const [stop, setStop] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Assets.LottieDemo,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  
  const animationContainer = useRef(null); 

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: Assets.LottieDemo2
    })
  }, []);

  const handleStop = (e) => {
    e.preventDefault();
    setStop(!stop);
    setPause(false);
  };

  const handlePause = (e) => {
    e.preventDefault();
    setPause(!pause);
  };

  return (
    <div className="landing">
      <nav className="landing-nav">
        <img src={Assets.MockLogo} alt=""/>
      </nav>
      <div className="landing-body">
        <aside className="landing-aside">
          <div>Hello World</div>
          <div ref={animationContainer}></div>
          <Lottie options={defaultOptions} isStopped={stop} isPaused={pause}/>
          <button onClick={handleStop}>{stop ? "play" : "stop"}</button>
          <button onClick={handlePause} disabled={stop}>{pause ? "resume" : "pause"}</button>
        </aside>
        <section className="landing-content">
          <div className="content-body">
            Lottie Demo
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingScene;
