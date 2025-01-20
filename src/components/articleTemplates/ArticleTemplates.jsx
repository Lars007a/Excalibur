export const ArticlesTeaserTmpl = (article) =>
  ` <div className={styles.newsContent}>
        <div className={styles.newsContentItem}>
            <img src="${article.img}">
            <p className={styles.newsDate}>${article.date}</p>
            <h3 className={styles.newsTitle}>${article.heading}</h3>
            <p className={styles.newsText}>${article.subheading}</p>
        </div>
    </div>
        `;

export const ArticlesTmpl = (article) =>
  ` <div class="article">
                      
    <div className={styles.articleContainer}>
     
    <div className={styles.imageContainer}>
        <img src="${article.img}">
     </div>

         <h1 className={styles.heading}>${article.heading}</h1>

     <div className={styles.bylineContainer}>
        <p className={styles.author}> af ${article.author} |</p>
        <p className={styles.date}>${article.date}</p>
     </div>

     <div className={styles.bodyTextContainer}>
      <p className={styles.bodyTextHeadline}>${article.bodyTextHeadline1}</p>
      <p className={styles.bodyText}>${article.bodyText1}</p>

      <p className={styles.bodyTextHeadline}>${article.bodyTextHeadline2}</p>
      <p className={styles.bodyText}>${article.bodyText2}</p>
       </div> 

     </div>
                  `;
