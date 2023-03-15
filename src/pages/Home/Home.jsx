import { Link } from "react-router-dom";
import './Home.module.css'
import Banner from "../../components/Banner/Banner";
import PiggyBank from "../../components/PiggyBank/PiggyBank";

const Home = ({currentCategory, handleChangeTrivia, user}) => {
    return (
        <>
            <Banner user={user} />
            <PiggyBank />
            {currentCategory ? 
            (<>
                <h2>Category: {currentCategory}</h2>
                <button onClick={handleChangeTrivia}><Link to='/gamepage'>Continue Trivia</Link></button>
                <button><Link to='/categories'>Change Category</Link></button>
            </>) : (<>
                <button><Link to='/categories'>Choose Category</Link></button>
            </>)}
        </>
    );
}

export default Home;