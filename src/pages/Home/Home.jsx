import { Link } from "react-router-dom";

import Banner from "../../components/Banner/Banner";
import PiggyBank from "../../components/PiggyBank/PiggyBank";

const Home = () => {
    return (
        <>
            <Banner />
            <PiggyBank />
            <button><Link to='/gamepage'>Continue Trivia</Link></button>
            <button><Link to='/categories'>Change Category</Link></button>
        </>
    );
}

export default Home;