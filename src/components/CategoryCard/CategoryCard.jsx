import { useNavigate } from 'react-router-dom'

import styles from './CategoryCard.module.css'

const CategoryCard = ({handleChangeCategory}) => {
  const categories = ["Taxes", "Insurance", "Economics", "Stock Markets", "Global Finance", "Personal Finance" ]

  const navigate = useNavigate()

  return ( 
    <main className={styles.categoryList}>
    {categories.map((category) => 
      <p className={styles.category} onClick={() => handleChangeCategory(category)}>{category}</p>
    )}
    </main>
  );
}

export default CategoryCard;