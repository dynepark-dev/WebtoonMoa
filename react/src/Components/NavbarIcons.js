import React, { useState, useEffect, useRef } from "react";
import styles from "../Styles/NavbarIcons.module.scss";
import { CSSTransition } from "react-transition-group";
import SlideSwitch from "./SlideSwitch";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function NavbarIcons({ loginOpen }) {
  return (
    <div className={styles.NavbarIcons}>
      <NavItem title="new" icon={<i className="fa-solid fa-bell" />} />
      <NavItem
        title="search"
        icon={<i className="fa-solid fa-magnifying-glass" />}
      />
      <NavItem title="more" icon={<i className="fa-solid fa-caret-down" />}>
        <DropdownMenu loginOpen={loginOpen}></DropdownMenu>
      </NavItem>
    </div>
  );
}

export default NavbarIcons;

function NavItem({ icon, children, title }) {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.NavItem} title={title}>
      <div className={styles.iconLeft} onClick={() => setOpen(!open)}>
        {icon}
      </div>
      {open && children}
    </li>
  );
}

function DropdownMenu({ loginOpen }) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const user = useSelector((state) => state.reducerUser);
  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
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
            children={user._id ? user.username : "Guest"}
            children2={user._id ? user.email : "Join Now"}
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
            children="Menu"
            leftIcon={<i className="fa-solid fa-bars" />}
            rightIcon={<i className="fa-solid fa-chevron-right" />}
            goToMenu="menu"
          />
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
          {user._id ? (
            <DropdownItem
              children="Logout"
              leftIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}
            />
          ) : (
            <DropdownItem
              children="Login"
              leftIcon={<i className="fa-solid fa-arrow-right-to-bracket" />}
              click={loginOpen}
            />
          )}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "menu"}
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
            <h2>Menu</h2>
          </DropdownItem>
          <DropdownItem
            children="최신웹툰"
            leftIcon={<i className="fa-solid fa-fire" />}
            link="/new"
          />
          <DropdownItem
            children="연재웹툰"
            leftIcon={<i className="fa-solid fa-hourglass" />}
            link="/webtoons?category=ongoing"
          />
          <DropdownItem
            children="완결웹툰"
            leftIcon={<i className="fa-solid fa-hourglass-end" />}
            link="/webtoons?category=finished"
          />
          <DropdownItem
            children="성인웹툰"
            leftIcon={<i className="fa-solid fa-heart" />}
            link="/webtoons?category=adult"
          />
          <DropdownItem
            children="BL/GL"
            leftIcon={<i className="fa-solid fa-mars-double" />}
            link="/webtoons?category=blgl"
          />
          <DropdownItem
            children="MyPage"
            leftIcon={<i className="fa-solid fa-user" />}
            link="/my"
          />
          <DropdownItem
            children="커뮤니티"
            leftIcon={<i className="fa-solid fa-users" />}
            link="/community"
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
            children="Settings*"
            leftIcon={<i className="fa-solid fa-gear" />}
          />
          <DropdownItem
            children="Privacy Checkup*"
            leftIcon={<i className="fa-solid fa-lock" />}
          />
          <DropdownItem
            children="Activity Log*"
            leftIcon={<i className="fa-solid fa-list" />}
          />
          <DropdownItem
            children="Language*"
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
            children="Faq"
            leftIcon={<i className="fa-solid fa-circle-question" />}
            link="/faq"
          />
          <DropdownItem
            children="Contact"
            leftIcon={<i className="fa-solid fa-envelope" />}
          />
          <DropdownItem
            children="Terms"
            leftIcon={<i className="fa-solid fa-book" />}
            link="/policy/terms"
          />
          <DropdownItem
            children="Privacy Policy"
            leftIcon={<i className="fa-solid fa-book" />}
            link="/policy/privacy"
          />
          <DropdownItem
            children="Teenager Policy"
            leftIcon={<i className="fa-solid fa-book" />}
            link="/policy/teenager"
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
    link,
    click,
  }) {
    const navigate = useNavigate();

    return (
      <div
        className={styles.menuItem}
        onClick={() =>
          (goToMenu && setActiveMenu(goToMenu)) ||
          (link && navigate(link)) ||
          (click && click())
        }
        title=""
      >
        <div className={styles.iconLeft}>{leftIcon}</div>
        <div className={styles.iconText}>
          <div className={styles.title}>{children}</div>
          <div className={styles.subtitle}>{children2}</div>
        </div>
        <div className={styles.iconRight}>{rightIcon}</div>
      </div>
    );
  }
}
