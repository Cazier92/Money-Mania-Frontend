import AchievementCard from "../../components/AchievementCard/AchievementCard";

const Achievements = () => {
    const achievements = [
        {
            icon: "",
            name: "US Dollar",
            category: "(category)",
            total: 10
        },
        {
            icon: "",
            name: "European Euro",
            category: "(category)",
            total: 10
        },
        {
            icon: "",
            name: "Japanese Yen",
            category: "Budgeting",
            total: 10
        },
        {
            icon: "",
            name: "British Pound",
            category: "(category)",
            total: 10
        }
    ]

    return (
        <>
            <h1>Achievements</h1>
            <p>(number)/180</p>
            {achievements.map((achievement, idx) => <AchievementCard icon={achievement.icon} name={achievement.name} category={achievement.category} total={achievement.total} key={idx} />)}
        </>
    );
}

export default Achievements;