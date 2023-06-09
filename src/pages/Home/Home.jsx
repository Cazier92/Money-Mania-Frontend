import { Link } from "react-router-dom";
import './Home.css'
import Banner from "../../components/Banner/Banner";
import PiggyBank from "../../components/PiggyBank/PiggyBank";
import continueTrivia from "../../buttons/continue-trivia.svg"
import changeCat from "../../buttons/change-category.svg"

const Home = ({ currentCategory, handleChangeTrivia, userProfile }) => {
    return (
        <>
            <Banner userProfile={userProfile} />
            <PiggyBank />
            {currentCategory ?
                (<>
                    <div className="home-btn-div">
                        <h2>Category: {currentCategory}</h2>
                        <Link to='/gamepage'><img src={continueTrivia} onClick={handleChangeTrivia} alt="continue" className="btn-img"/></Link>
                        <Link to='/categories'><img src={changeCat} alt="change" className="btn-img"/></Link>
                    </div>
                </>) : (<div className="home-btn-div">
                    <Link to='/categories'><button className='homeButton'>Choose Category</button></Link>
                </div>)}
        </>
    );
}

export default Home;