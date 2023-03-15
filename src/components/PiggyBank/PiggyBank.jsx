import styles from './PiggyBank.module.css'
const PiggyBank = (props) => {
    return (
        <div>
            <img className={styles.coin} src="../coin.png" alt="" srcset="" />
            <img className={styles.pig} src="../pig.png" alt="" />
        </div>
    )
}

export default PiggyBank