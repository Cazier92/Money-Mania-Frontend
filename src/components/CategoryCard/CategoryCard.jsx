

import styles from './CategoryCard.module.css'

const CategoryCard = ({handleChangeCategory}) => {
  const categories = [
    {name: "Personal Finance", 
    img: "../personal.svg"}, 
    {name: "Taxes", 
    img: "../taxes.svg"}, 
    {name: "Financial Institutions", 
    img: "../financial.svg"},  
    {name: "Economics", 
    img: "../economics.svg"}, 
    {name: "Insurance", 
    img: "../insurance.svg"}, 
    {name: "Investing", 
    img: "../global.svg"},  
    {name: "Stock Markets", 
    img: "../stock.svg"}, 
    {name: "Financial History", 
    img: "../history.svg"},  ]


  return ( 
    <main className={styles.categoryList}>
    {categories.map((category, idx) => 
    <div key={idx} className={styles.categoryDiv}>
      <p className={styles.category} onClick={() => handleChangeCategory(category.name)} > <img className={styles.icon} src={category.img} alt="" />{category.name}</p>
    </div>
    )}
    </main>
  );
}

export default CategoryCard;