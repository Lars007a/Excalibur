import styles from "./newsInfo.module.css";
<<<<<<< Updated upstream
import articlesData from "../../data/articles.json";
=======
import { fetchArticles } from "../fetchArticleData/FetchArticleData.jsx";
import { ArticlesTeaserTmpl } from "./templates.js";
>>>>>>> Stashed changes

const NewsInfo = () => {
  return (
    <>
      {/* <section className={styles.news}>
        <h2>Seneste artikler</h2>
<<<<<<< Updated upstream

        <div className={styles.newsContent}>
          <div className={styles.newsContentItem}>
            <img
              src="../../../src/assets/galleryImgs/DSC06973.JPG"
              alt="news"
            />
            <p className={styles.newsDate}>08 december 2025</p>
            <h3 className={styles.newsTitle}>
              Bliv en del af Excalibur: Alt du skal vide om vores
              rollespilsklub.
            </h3>
            <p className={styles.newsText}>
              Er du interesseret i rollespil, eller har du altid drømt om at
              skabe din egen helt og træde ind i fantastiske verdener? Så er...
            </p>
          </div>
          <div className={styles.newsContentItem}>
            <img
              src="../../../src/assets/galleryImgs/DSC06961.JPG"
              alt="news"
            />
            <p className={styles.newsDate}>08 december 2025</p>
            <h3 className={styles.newsTitle}>
              Bliv en del af Excalibur: Alt du skal vide om vores
              rollespilsklub.
            </h3>
            <p className={styles.newsText}>
              Er du interesseret i rollespil, eller har du altid drømt om at
              skabe din egen helt og træde ind i fantastiske verdener? Så er...
            </p>
          </div>
          <div className={styles.newsContentItem}>
            <img
              src="../../../src/assets/galleryImgs/DSC06960.JPG"
              alt="news"
            />
            <p className={styles.newsDate}>08 december 2025</p>
            <h3 className={styles.newsTitle}>
              Bliv en del af Excalibur: Alt du skal vide om vores
              rollespilsklub.
            </h3>
            <p className={styles.newsText}>
              Er du interesseret i rollespil, eller har du altid drømt om at
              skabe din egen helt og træde ind i fantastiske verdener? Så er...
            </p>
          </div>
          <div className={styles.newsContentItem}>
            <img
              src="../../../src/assets/galleryImgs/DSC06975.JPG"
              alt="news"
            />
            <p className={styles.newsDate}>08 december 2025</p>
            <h3 className={styles.newsTitle}>
              Bliv en del af Excalibur: Alt du skal vide om vores
              rollespilsklub.
            </h3>
            <p className={styles.newsText}>
              Er du interesseret i rollespil, eller har du altid drømt om at
              skabe din egen helt og træde ind i fantastiske verdener? Så er...
            </p>
          </div>
          <div className={styles.newsContentItem}>
            <img
              src="../../../src/assets/galleryImgs/DSC06978.JPG"
              alt="news"
            />
            <p className={styles.newsDate}>08 december 2025</p>
            <h3 className={styles.newsTitle}>
              Bliv en del af Excalibur: Alt du skal vide om vores
              rollespilsklub.
            </h3>
            <p className={styles.newsText}>
              Er du interesseret i rollespil, eller har du altid drømt om at
              skabe din egen helt og træde ind i fantastiske verdener? Så er...
            </p>
          </div>
          <div className={styles.newsContentItem}>
            <img
              src="../../../src/assets/galleryImgs/DSC06969.JPG"
              alt="news"
            />
            <p className={styles.newsDate}>08 december 2025</p>
            <h3 className={styles.newsTitle}>
              Bliv en del af Excalibur: Alt du skal vide om vores
              rollespilsklub.
            </h3>
            <p className={styles.newsText}>
              Er du interesseret i rollespil, eller har du altid drømt om at
              skabe din egen helt og træde ind i fantastiske verdener? Så er...
            </p>
          </div>
        </div>
      </section> */}
=======
      </section>
>>>>>>> Stashed changes
    </>
  );
};

export default NewsInfo;
