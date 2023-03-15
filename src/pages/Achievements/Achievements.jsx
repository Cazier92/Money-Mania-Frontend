import AchievementCard from "../../components/AchievementCard/AchievementCard";
import './Achievements.css'
import yen from '../../achievements/yen.svg'
import usd from '../../achievements/usd.svg'
import euro from '../../achievements/euro.svg'
import pound from '../../achievements/pound.svg'

const Achievements = (props) => {
    const { userProfile } = props

    const achievements = [
        {
            icon: usd,
            name: "US Dollar",
            category: "Personal Finance",
            threshold: 10
        },
        {
            icon: euro,
            name: "European Euro",
            category: "Taxes",
            threshold: 10
        },
        {
            icon: yen,
            name: "Japanese Yen",
            category: "Investing",
            threshold: 10
        },
        {
            icon: pound,
            name: "British Pound",
            category: "Global Finance",
            threshold: 10
        }
    ]

    function sumAchievements(data) {
        let currencies = 0
        if (data.persFinance >= 10) { currencies += 1 }
        if (data.buisEcon >= 10) { currencies += 1 }
        if (data.investing >= 10) { currencies += 1 }
        if (data.taxes >= 10) { currencies += 1 }
        if (data.finHistory >= 10) { currencies += 1 }
        if (data.insurance >= 10) { currencies += 1 }
        if (data.stock >= 10) { currencies += 1 }
        if (data.finInst >= 10) { currencies += 1 }
        return currencies
    }

    return (
        <>
            <h2>Achievements</h2>
            <p className="achievement-total bold">{sumAchievements(userProfile)}/180</p>
            <div className="achievements">
                {achievements.map((achievement, idx) => (
                    <div className="card-container" key={idx}>
                        <AchievementCard icon={achievement.icon} name={achievement.name} category={achievement.category} threshold={achievement.threshold} userProfile={userProfile} />
                        <hr />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Achievements;