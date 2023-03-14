import CategoryCard from "../../components/CategoryCard/CategoryCard";
import styles from './Categories.module.css'

const Categories = ({setCurrentCategory}) => {
  return ( 
    <main>
      <h1 className={styles.title}>Categories</h1>
      <CategoryCard setCurrentCategory={setCurrentCategory}/>
    </main>

  );
}

export default Categories;