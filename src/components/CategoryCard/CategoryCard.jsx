import styles from './CategoryCard.module.css'

const CategoryCard = ({setCurrentCategory}) => {
  const categories = ["Taxes", "Insurance", "Economics", "Stock Markets", "Global Finance", "Personal Finance" ]

  const handleClick = (category) => {
    setCurrentCategory(category)
    console.log(category)
  }

  return ( 
    <main className={styles.categoryList}>
    {categories.map((category) => 
      <p className={styles.category} onClick={() => handleClick(category)}>{category}</p>
    )}
    </main>
  );
}

export default CategoryCard;