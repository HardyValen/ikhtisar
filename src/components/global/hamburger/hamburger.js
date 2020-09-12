import React, { useRef, useEffect } from "react";
import "./style.scss";

const Hamburger = ({state, setState}) => {
  const hamburgerElmt = useRef(null);

  const handleClick = () => {
    setState(!state);
  }

  useEffect(() => {
    hamburgerElmt.current.classList.toggle("active", state);
  }, [state])

  const handleChildClick = (e) => {
    e.target.parentElement.click();
  }

  return (
    <div className="hamburger" onClick={handleClick} ref={hamburgerElmt}>
      <div className="line line1" onClick={handleChildClick}></div>
      <div className="line line2" onClick={handleChildClick}></div>
    </div>
  )
}

export default Hamburger