/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import rowlist from './RowList';
import { history } from '../../routes';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const SideMenuBar = React.forwardRef((props, ref) => {
  const sideMenuBtnRefs = useRef(rowlist.map(() => React.createRef()));
  const [handler, setHandler] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    onRenderButtonHighter();
  });

  // Buttonlist mapping
  const sideMenuRows = rowlist.map(({
    id, label, icon, address,
  }, index) => (
    <div ref={sideMenuBtnRefs.current[index]} key={id} onClick={(event) => buttonClickHandler(event, address)}
      className={handler ? 'sidemenu-btn' : 'sidemenu-mini-btn'}>
      <FontAwesomeIcon className={handler ? 'sidemenu-btn-icon' : 'sidemenu-mini-btn-icon'} icon={icon} />
      {handler && <div className="sidemenu-btn-label">{label}</div>}
    </div>
  ));

  const buttonClickHandler = (event, address) => {
    if (address !== '') {
      history.push(`/${address}`);
      setShow(false);
    } else {
      setShow(true);
    }
    buttonHighlighter(event);
  };

  // Highlights the button based on url
  const onRenderButtonHighter = () => {
    sideMenuBtnRefs.current.forEach((element) => {
      const btn = element.current;
      btn.classList.remove('sidemenu-btn-highlight');
    });
    rowlist.forEach((Button, index) => {
      if (show && Button.label === 'Role Assignment') {
        sideMenuBtnRefs.current[index].current.classList.add('sidemenu-btn-highlight');
      } else if (!show && (history.location.pathname).includes(`/${Button.address}`) && Button.address.length !== 0) {
        sideMenuBtnRefs.current[index].current.classList.add('sidemenu-btn-highlight');
      }
    });
  };

  // Highlights the button based on clicks
  const buttonHighlighter = (event) => {
    sideMenuBtnRefs.current.forEach((element) => {
      const btn = element.current;
      btn.classList.remove('sidemenu-btn-highlight');
    });
    const { currentTarget } = event;
    currentTarget.classList.add('sidemenu-btn-highlight');
  };

  useEffect(() => {
    window.addEventListener('resize', sideMenuResponsive);
    const target = ref.current;
    target.classList.remove('sidemenu-mini-main-responsive');
    target.classList.add('sidemenu-main-responsive');
  }, []);


  // replace class if width <= 768px
  const sideMenuResponsive = () => {
    const target = ref.current;
    if (window.innerWidth <= 768) {
      target.classList.remove('sidemenu-main-responsive');
      target.classList.add('sidemenu-mini-main-responsive');
      setHandler(false);
    }
    else {
      target.classList.remove('sidemenu-mini-main-responsive');
      target.classList.add('sidemenu-main-responsive');
      setHandler(true);
    }
  };

  const sideBarMenuHandler = () => {
    const target = ref.current;
    handler && target.classList.add('sidemenu-main-responsive');
    if (target.classList.contains('sidemenu-main-responsive')) {
      target.classList.remove('sidemenu-main-responsive');
      target.classList.add('sidemenu-mini-main-responsive');
      setHandler(false)
    } else {
      target.classList.remove('sidemenu-mini-main-responsive');
      target.classList.add('sidemenu-main-responsive');
      setHandler(true)
    }
  };

  return (
    <div ref={ref} className="sidemenu-main">
      <div className="sidemenu-background">
        <div className="sidemenu-header">
          <div className="sidemenu-logo">
            {handler ? <img className="sidebar-instalogo" src="images/logo.png" alt="INSTAKART"></img> : null}
            <div className="hamburger-bars-icon" onClick={sideBarMenuHandler} >
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </div>
        <div>
          {sideMenuRows}
        </div>
      </div>
    </div>
  );
});

export default SideMenuBar;
