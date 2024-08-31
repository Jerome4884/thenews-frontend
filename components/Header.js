import styles from '../styles/Header.module.css';
import { format, compareAsc } from 'date-fns';

function Header() {

    const date = format(new Date(), 'dd MMMM yyyy')

    return (
        <div className={styles.header}>
            {date}
            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>The News</h1>
            </div>
            <div className={styles.connexion}>
                <p className={styles.logo}>connexion</p>
            </div>
        </div>
    );
  }
  
  export default Header;
  