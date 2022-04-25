import React, { useState } from "react";
import { Link } from "react-router-dom";
import useToggle from "../Hooks/useToggle";
import styles from "../Styles/Auth.module.scss";
import Checkbox from "./Checkbox";
import HorizontalLine from "./HorizontalLine";
import { useDispatch } from "react-redux";
import { login, signup } from "../Redux/actions";

function Auth({ onClose }) {
  const dispatch = useDispatch();
  const oAuthArray = [
    {
      id: 0,
      name: "네이버웹툰",
      logo: "https://pbs.twimg.com/profile_images/1354260464918650880/xoLLbayG_400x400.jpg",
      link: "https://comic.naver.com/webtoon/weekday",
    },
    {
      id: 1,
      name: "카카오웹툰",
      logo: "https://pbs.twimg.com/profile_images/1409350659468521481/MXuVnpZh_400x400.png",
      link: "https://webtoon.kakao.com/",
    },
    {
      id: 2,
      name: "카카오페이지",
      logo: "https://pbs.twimg.com/profile_images/953939366321123329/csukmFK1_400x400.jpg",
      link: "https://page.kakao.com/",
    },
    {
      id: 3,
      name: "레진코믹스",
      logo: "https://pbs.twimg.com/profile_images/1268361909163528197/WUZiABiv_400x400.jpg",
      link: "https://www.lezhin.com/ko",
    },
  ];
  const tabArray = [
    { id: 0, content: "로그인" },
    { id: 1, content: "회원가입" },
  ];
  const [active, setActive] = useToggle(0);
  const isLogin = active === 0;

  const newUser = {
    username: "NewUser",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [inputValue, setInputValue] = useState(newUser);

  const onChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(login(inputValue));
      onClose();
    } else {
      dispatch(signup(inputValue));
      setInputValue(newUser);
      setActive(0);
    }
  };
  return (
    <div className={styles.Auth}>
      <Banner onClose={onClose} />
      <div className={styles.content}>
        <Top tabArray={tabArray} setActive={setActive} active={active} />
        <HorizontalLine content={isLogin ? "SNS 로그인" : "SNS 1초 회원가입"} />
        <Sns oAuthArray={oAuthArray} />
        <HorizontalLine
          content={isLogin ? "휴대폰 / 이메일 로그인" : "휴대폰 / 이메일 가입"}
        />
        <form onSubmit={handleSubmit}>
          <InputsAndSubmit
            isLogin={isLogin}
            handleSubmit={handleSubmit}
            onChange={onChange}
            inputValue={inputValue}
          />
          {isLogin ? <CheckboxAndFind /> : <TermsAndCondition />}
        </form>
      </div>
    </div>
  );
}

export default Auth;

function Banner({ onClose }) {
  return (
    <div className={styles.banner}>
      <div className={styles.ad} alt="banner ad">
        대충 광고 들어가는 곳
      </div>
      <div className={styles.close} onClick={onClose}></div>
    </div>
  );
}

function Top({ tabArray, setActive, active }) {
  return (
    <ul className={styles.top}>
      {tabArray.map((item) => (
        <li
          key={item.id}
          onClick={() => setActive(item.id)}
          className={`${styles.tab} ${item.id === active && styles.active}`}
        >
          {item.content}
        </li>
      ))}
    </ul>
  );
}

function Sns({ oAuthArray }) {
  return (
    <div className={styles.sns}>
      {oAuthArray.map((item) => (
        <img key={item.name} src={item.logo} alt={item.name} />
      ))}
    </div>
  );
}

function InputsAndSubmit({ isLogin, handleSubmit, onChange, inputValue }) {
  return (
    <div className={styles.inputsAndSubmit}>
      <div className={styles.inputs}>
        <input
          name="email"
          type="email"
          required
          value={inputValue.email}
          onChange={onChange}
          placeholder="이메일 또는 휴대폰 아이디"
        />
        <input
          name="password"
          type="password"
          required
          value={inputValue.password}
          onChange={onChange}
          pattern="^.{8,16}$"
          placeholder={isLogin ? "비밀번호" : "비밀번호(8~16자리)"}
        />
        {!isLogin && (
          <input
            name="confirmPassword"
            type="password"
            required
            onChange={onChange}
            placeholder="비밀번호 확인"
            pattern={inputValue.password}
          />
        )}
      </div>
      <input
        type="submit"
        className={styles.button}
        value={isLogin ? "로그인" : "회원가입"}
      />
    </div>
  );
}

function CheckboxAndFind() {
  return (
    <div className={styles.checkboxAndFind}>
      <div className={styles.checkbox}>
        <Checkbox id="remember_id" content="아이디 저장" />
        <Checkbox id="keep_logged_in" content="로그인 유지" />
      </div>
      <div className={styles.find}>
        <Link to="#">아이디 찾기</Link>
        <Link to="#">비밀번호 찾기</Link>
      </div>
    </div>
  );
}

function TermsAndCondition() {
  return (
    <div className={styles.termsAndCondition}>
      <Checkbox id="agree_all" content="전체 동의" />
      <Checkbox required={true} id="terms" content="이용약관[필수]" />
      <Checkbox required={true} id="age14" content="만 14세 이상입니다[필수]" />
      <Checkbox id="auto_login" content="자동 로그인[선택]" />
      <Checkbox id="promotion" content="프로모션 수신동의(이메일/SMS)[선택]" />
    </div>
  );
}
