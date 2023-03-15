const AchievementCard = (props) => {
    const { icon, name, category, total } = props

    return (
        <section>
            <img src={icon} alt={name} />
            <h3>{name}</h3>
            <p>Answer {total} questions correctly in {category}</p>
            <p>0%</p>
            <p>[ - progress bar - ]</p>
        </section>
    )
}

export default AchievementCard