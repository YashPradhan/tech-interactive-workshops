// You don't need to change anything here

import Image from "next/image";
import styles from "./cookie.module.scss";

export default function Cookie(props) {
  return (
    <div {...props} className={styles.cookie}>
      <Image 
          src="/cookie.png"
          alt="A Cookie"
          style={{ objectFit: "contain" }}
          fill={true}
      />
    </div>
  );
}