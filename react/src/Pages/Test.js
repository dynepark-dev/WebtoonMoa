import React from "react";
import Modal from "../Components/Modal";
import Searchbar from "../Components/Searchbar";
import styles from "../Styles/Test.module.scss";
import useToggle from "../Hooks/useToggle";

function Test() {
  const [searchOpen, setSearchOpen] = useToggle(false);

  return (
    <div className={styles.Test}>
      <Modal isOpen={searchOpen} onClose={() => setSearchOpen(false)}>
        <Searchbar />
      </Modal>
    </div>
  );
}

export default Test;
