import React from "react";
import styles from "../Styles/LoadingAndError.module.scss";

function LoadingAndError({ loading, error, data }) {
  return (
    <div className={styles.LoadingAndError}>
      <h5>
        {!loading && !error && data.length === 0 && "찾으신 결과가 없습니다."}
      </h5>
      <h5>{loading && "Loading..."}</h5>
      <h5>{!loading && error && "Error!!!"}</h5>
      <h5>{!data?.meta?.nextPage && "마지막 페이지 입니다."}</h5>
    </div>
  );
}

export default LoadingAndError;
