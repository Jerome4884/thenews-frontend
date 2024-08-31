import styles from '../styles/Home.module.css';
import Articles from './Articles';
import Header from './Header';
import { useEffect, useState } from 'react';

function Home() {

  const [ articleData, setArticleData ] = useState([]);
  const [ businessArticlesData, setBusinessArticlesData ] = useState([]);

  // Affichage des articles de base
  useEffect(() => {
    fetch('http://localhost:3000/articles')
    .then(response => response.json())
    .then(data => {
      setArticleData(data.articles);
    });
  }, []);

  const articles = articleData.map((data, i) => {
    console.log("articleData => ", articleData);
    return <Articles key={i} {...data} />
  });
  
  const handleClickBusiness = () => {
    try {
      fetch('http://localhost:3000/businessArticles')
      .then(response => response.json())
      .then(data => {
        setBusinessArticlesData(data.businessArticles);
      });  
    } catch (error) {
      console.error("Error fetching businessArticles: ", error.message)
    }
  }

  return (
    <div>
     <Header /> 
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the all news you want!
        </h1>
        <div className={styles.categories}>
          <span>Catégories : </span>
          <div className={styles.btnCategory}>
            <span className={styles.business} 
            onClick={() => handleClickBusiness()}
            > Business</span>
            <span className={styles.divertissement}>Divertissement</span>
            <span className={styles.general}>Général</span>
            <span className={styles.sante}>Santé</span>
            <span className={styles.science}>Science</span>
            <span className={styles.sports}>Sports</span>
            <span className={styles.tech}>Tech</span>
          </div>
        </div>
        <div className={styles.articlesContainer}>
          {articles}
        </div>
      </main>
    </div>
  );
}

export default Home;
