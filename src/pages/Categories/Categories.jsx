import CategoryCard from "../../components/CategoryCard/CategoryCard";
import styles from './Categories.module.css'

const Categories = ({handleChangeCategory}) => {
  return ( 
    <main>
      <h1 className={styles.title}>Categories</h1>
      <CategoryCard handleChangeCategory={handleChangeCategory}/>
    </main>

  );
}

export default Categories;