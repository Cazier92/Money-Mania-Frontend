import styles from './Banner.module.css'
const Banner = ({userProfile }) => {
    return (
        <main>
            {/* <div className={styles.circle}>
            </div> */}
            <h2 className={styles.bannerh2}>Money Mania</h2>
            <p className={styles.firstp}>Welcome back,</p>
            {userProfile ? <p className={styles.secondp}>{userProfile.name}!</p> : null}
        </main>
    )
}

export default Banner