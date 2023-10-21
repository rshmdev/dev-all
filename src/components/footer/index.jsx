// components/Footer.js

import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.row}>
          <ul>
            <li>
              <a href="https://itexto.com.br/contato">Fale conosco</a>
            </li>
            <li>
              <a href="https://itexto.com.br/sobre-nos">Sobre nós</a>
            </li>
            <li>
              <a href="https://itexto.com.br/conhecimentos">Conhecimentos</a>
            </li>
          </ul>
        </div>

        <div className={styles.row}>
          Itexto Copyright © 2023 - All rights reserved || Designed By: Rian
          Moraes
        </div>
      </div>
    </footer>
  );
};

export default Footer;
