import { useNavigate } from 'react-router-dom'

import styles from './CategoryCard.module.css'

const CategoryCard = ({setCurrentCategory}) => {
  const categories = ["Taxes", "Insurance", "Economics", "Stock Markets", "Global Finance", "Personal Finance" ]

  const navigate = useNavigate()

  const handleClick = (category) => {
    setCurrentCategory(category)
    navigate('/home')
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