import { Link } from 'react-router-dom'

import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Money Mania</h1>
      {user ?  
      <h1>Welcome back {user.name}</h1>
      : 'Sign-in to play'}
      {user ? 
      <>
        <div>
          <button><Link to='/homepage'>Play</Link></button>
        </div>
      </> 
      : 
      <>
        <div>
          <button><Link to='/signup'>Sign Up</Link></button>
          <button><Link to='/login'>Log In</Link></button>
        </div>
      </>}
    </main>
  )
}

export default Landing
