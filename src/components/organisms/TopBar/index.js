import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import { MdClose as Close, MdMenu as Hamburger } from 'react-icons/md';
import Button from '../../atoms/Button';

const TopBar = ({ drawerOpen, toggleDrawer, children }) => {
  return (
    <header className="TopBar">
      <div className="TopBar__Row">
        <section className="TopBar__Section">
          <Button
            icon={drawerOpen ? Close : Hamburger}
            className="TopBar__MenuButton"
            iconClass="TopBar__Icon"
            onClick={toggleDrawer}
          />
          <span className="TopBar__Title">
            <Link to="/">
              <img
                alt="Planical7012"
                src="/screenshot/logo%20white%20bg-200h-400w.png"
                className="home-branding-logooo"
              />
            </Link>
          </span>
        </section>
        <section className="TopBar__Section TopBar__Section_align_end">
          <Link to="/code-editor" className="TopBar__Button TopBar__Button_code" > 
            Code Editor
          </Link>
          {children}
        </section>
      </div>
    </header>
  );
};

export default TopBar;
