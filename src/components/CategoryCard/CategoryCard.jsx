import styles from './CategoryCard.module.css'

const CategoryCard = () => {
  const categories = ["Taxes", "Insurance", "Economics", "Stock Markets", "Global Finance", "Personal Finance" ]

  return ( 
    <main className={styles.categoryList}>
    {categories.map((category) => 
      <p className={styles.category}>{category}</p>
    )}
    </main>
  );
}

export default CategoryCard;