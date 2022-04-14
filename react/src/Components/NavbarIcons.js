import React, { useState, useEffect, useRef } from "react";
import styles from "../Styles/NavbarIcons.module.scss";
import { CSSTransition } from "react-transition-group";
import SlideSwitch from "./SlideSwitch";

function NavbarIcons() {
  return (
    <div className={styles.NavbarIcons}>
      <NavItem title="new" icon={<i className="fa-solid fa-bell" />} />
      <NavItem
        title="search"
        icon={<i className="fa-solid fa-magnifying-glass" />}
      />
      <NavItem title="more" icon={<i className="fa-solid fa-caret-down" />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </div>
  );
}

export default NavbarIcons;

function NavItem({ icon, children, title }) {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.NavItem} title={title}>
      <a href="/#" className={styles.iconLeft} onClick={() => setOpen(!open)}>
        {icon}
      </a>
      {open && children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(div) {
    const height = div.offsetHeight;
    setMenuHeight(height);
  }
  return (
    <div
      className={styles.dropdown}
      style={{ height: menuHeight }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames={{
          enter: styles.menuPrimaryEnter,
          enterActive: styles.menuPrimaryEnterActive,
          exit: styles.menuPrimaryExit,
          exitActive: styles.menuPrimaryExitActive,
        }}
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={styles.menu}>
          <DropdownItem
            children="Guest"
            children2="Join now"
            leftIcon={<i className="fa-solid fa-user" />}
          />
          <hr />
          <DropdownItem
            children="Give FeedBack"
            // children2="Help us imporve"
            leftIcon={<i className="fa-solid fa-comment-dots" />}
          />
          <hr />
          <DropdownItem
            children="Settings & Privacy"
            leftIcon={<i className="fa-solid fa-gear" />}
            rightIcon={<i className="fa-solid fa-chevron-right" />}
            goToMenu="settings"
          />
          <DropdownItem
            children="Help & Support"
            leftIcon={<i className="fa-solid fa-circle-question" />}
            rightIcon={<i className="fa-solid fa-chevron-right" />}
            goToMenu="help"
          />
          <DropdownItem
            children="Darkmode"
            leftIcon={<i className="fa-solid fa-moon" />}
            rightIcon={<SlideSwitch />}
          />
          <DropdownItem
            children="Logout"
            leftIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}
          />
          <DropdownItem
            children="Login"
            leftIcon={<i className="fa-solid fa-arrow-right-to-bracket" />}
          />
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames={{
          enter: styles.menuSecondaryEnter,
          enterActive: styles.menuSecondaryEnterActive,
          exit: styles.menuSecondaryExit,
          exitActive: styles.menuSecondaryExitActive,
        }}
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={styles.menu}>
          <DropdownItem
            goToMenu="main"
            leftIcon={<i className="fa-solid fa-chevron-left" />}
          >
            <h2>Settings & Privacy</h2>
          </DropdownItem>
          <DropdownItem
            children="Settings"
            leftIcon={<i className="fa-solid fa-gear" />}
          />
          <DropdownItem
            children="Privacy Checkup"
            leftIcon={<i className="fa-solid fa-lock" />}
          />
          <DropdownItem
            children="Activity Log"
            leftIcon={<i className="fa-solid fa-list" />}
          />
          <DropdownItem
            children="Language"
            leftIcon={<i className="fa-solid fa-globe" />}
          />
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "help"}
        timeout={500}
        classNames={{
          enter: styles.menuSecondaryEnter,
          enterActive: styles.menuSecondaryEnterActive,
          exit: styles.menuSecondaryExit,
          exitActive: styles.menuSecondaryExitActive,
        }}
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className={styles.menu}>
          <DropdownItem
            goToMenu="main"
            leftIcon={<i className="fa-solid fa-chevron-left" />}
          >
            <h2>Help & Support</h2>
          </DropdownItem>
          <DropdownItem
            children="x"
            leftIcon={<i className="fa-solid fa-gear" />}
          />
          <DropdownItem
            children="x"
            leftIcon={<i className="fa-solid fa-gear" />}
          />
          <DropdownItem
            children="x"
            leftIcon={<i className="fa-solid fa-gear" />}
          />
          <DropdownItem
            children="x"
            leftIcon={<i className="fa-solid fa-gear" />}
          />
          <DropdownItem
            children="x"
            leftIcon={<i className="fa-solid fa-gear" />}
          />
        </div>
      </CSSTransition>
    </div>
  );

  function DropdownItem({
    children,
    children2,
    leftIcon,
    rightIcon,
    goToMenu,
  }) {
    return (
      <a
        href="/#"
        className={styles.menuItem}
        onClick={() => goToMenu && setActiveMenu(goToMenu)}
        title=""
      >
        <div className={styles.iconLeft}>{leftIcon}</div>
        <div className={styles.iconText}>
          <div className={styles.title}>{children}</div>
          <div className={styles.subtitle}>{children2}</div>
        </div>
        <div className={styles.iconRight}>{rightIcon}</div>
      </a>
    );
  }
}
