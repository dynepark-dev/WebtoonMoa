import React from "react";
import styles from "../Styles/Teenager.module.scss";

function Teenager() {
  return (
    <div className={styles.Teenager}>
      <div className={styles.wrapper}>
        <h2>청소년 보호정책</h2>
        <button onClick={() => window.print()}>인쇄하기</button>
        <div className={styles.content}>
          <p>
            ㈜웹툰모아(이하 ‘회사’라 합니다)는 회사가 운영하는 웹툰 플랫폼
            웹툰모아에서의 청소년 보호를 위한 정책을 수립 및 시행하고 있습니다.
          </p>

          <h3>&lt; 웹툰모아 청소년 보호정책 &gt;</h3>
          <p>
            회사는 건전한 웹툰 문화 발전과 청소년의 보호를 위하여 청소년
            보호정책을 아래와 같이 수립, 시행하고 있습니다.
          </p>

          <h3>1. 성인 작품 등에 대한 청소년 접근 제한 및 관리 조치</h3>
          <p>
            회사는 청소년들의 청소년 유해간행물로 지정된 웹툰 작품 및 창작자들의
            연령등급 자가진단을 통하여 19세 이상 이용가로 분류된 웹툰 작품에
            대한 접근을 관련 법령에 따른 연령 확인 절차, 청소년 유해간행물 표시
            등을 통하여 방지하고 있습니다.
          </p>

          <h3>2. 청소년 보호를 위한 연령등급 표시제도 운용</h3>
          <p>
            회사는 웹툰모아에서 서비스되는 웹툰 작품의 열람에 적정한 연령등급을
            표시하고 있습니다.
          </p>

          <h3>3. 청소년 보호를 위한 업무 담당자 교육 시행</h3>
          <p>
            회사는 각 부서의 담당자를 대상으로 청소년 보호 관련 법령 및
            가이드라인, 보고절차 및 대응방법에 대하여 교육을 시행하고 있습니다.
          </p>

          <h3>4. 민원 및 제보에 대한 신속 처리</h3>
          <p>
            회사는 전문인력을 배치하여 청소년 보호와 관련된 민원 및 제보를 받아
            신속히 처리하고 있습니다. 청소년 보호와 관련된 민원 및 제보는 아래
            메일 또는 연락처로 하실 수 있습니다.
          </p>
          <p>- 민원 및 제보 연락처 : 000-000-0000 / webtoonMoa@gmail.com</p>

          <h3>5. 청소년 보호 책임자 및 담당자의 소속, 성명 및&nbsp;연락처</h3>
          <p>
            회사는 아래와 같이 청소년 보호 책임자 및 담당자를 지정하여 청소년
            보호와 관련 정책 수립 등 청소년 보호업무를 수행하고 있습니다.
          </p>

          <table class={styles.lawTable}>
            <thead>
              <tr>
                <th>청소년 보호 책임자</th>
                <th>청소년 보호 담당자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li>성명: 김김김</li>
                    <li>소속 부서/직위: 사업팀/팀장</li>
                    <li>전화: 00-000-0000</li>
                    <li>문의: webtoonMoa@gmail.com</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>성명: 김김김</li>
                    <li>소속 부서/직위: 사업팀/매니저</li>
                    <li>전화: 00-000-0000</li>
                    <li>문의: webtoonMoa@gmail.com</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Teenager;
