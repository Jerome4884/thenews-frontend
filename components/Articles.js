import styles from '../styles/Articles.module.css';
import Image from 'next/image';

function Articles(props) {
  
  return (
    <div>
        <div className={styles.articleContainer}>
          <h1 className={styles.title}>{props.title}</h1>
          <p className={styles.author}>{props.author}</p>
          <div>
            <Image src={props.urlToImage} alt={props.title} width={350} height={150} />
          </div>
          <p className={styles.articleResume}>{props.description}</p>
        </div>
    </div>
  );
}

export default Articles;
