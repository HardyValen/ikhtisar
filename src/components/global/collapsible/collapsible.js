import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import "./style.scss";

const Collapsible = ({children, title, className, width, height}) => {
  const collapseBody = useRef(null);
  const collapseIcon = useRef(null);
  const collapseHeader = useRef(null);

  const collapseClick = () => {
    collapseBody.current.classList.toggle("show");
    collapseIcon.current.classList.toggle("active");
  }

  useEffect(() => {
    if (className) {
      collapseHeader.current.classList.add(...className);
    }
  }, [className])

  return (
    <div className="collapsible">
      <div className="collapsible-header" onClick={collapseClick} ref={collapseHeader}>
        <span className="collapsible-title">{title}</span>
        <span className="collapsible-icon" ref={collapseIcon}>
          <FontAwesomeIcon icon={['fas', 'caret-down']}/>
        </span>
      </div>
      <div className="collapsible-body collapse" ref={collapseBody}>
        {children}
      </div>
    </div>
  );
}

export default Collapsible;