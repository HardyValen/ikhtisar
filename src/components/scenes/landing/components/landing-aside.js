import React, { useEffect, useRef } from 'react';
import * as Components from '../../../components-common';

const LandingAside = ({width, height, state}) => {
  const asideElmt = useRef(null);

  useEffect(() => {
    asideElmt.current.classList.toggle("active", state);
  }, [state]);

  return (
    <aside className="landing-aside" ref={asideElmt}>
      <div className="aside-pill-group">
        <div className="aside-pill">
          Home
        </div>
        <div className="aside-pill">
          Somewhere
        </div>
        <div className="aside-pill">
          Something
        </div>
        <Components.Collapsible title="Another one" className={["aside-pill"]}>
          <div className="aside-pill">
            Foo
          </div>
          <div className="aside-pill">
            Bar
          </div>
        </Components.Collapsible>
      </div>
    </aside>
  );
}

export default LandingAside;