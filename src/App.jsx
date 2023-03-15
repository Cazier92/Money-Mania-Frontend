// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Home from './pages/Home/Home'
import Categories from './pages/Categories/Categories'
import GamePage from './pages/GamePage/GamePage'
import Achievements from './pages/Achievements/Achievements'
import Settings from './pages/SettingsPage/Settings'
import Profile from './pages/Profile/Profile'
import Leaderboard from './pages/Leaderboard/Leaderboard'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as triviaService from './services/triviaService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [userProfile, setUserProfile] = useState()
  const [allTrivia, setAllTrivia] = useState([])
  const [currentCategory, setCurrentCategory] = useState('')
  const [currentTrivia, setCurrentTrivia] = useState({})


  const navigate = useNavigate()

  useEffect(() => {
    const fetchProfile = async () => {
      if(user) {
        const profileData = await profileService.show(user.profile)
        setUserProfile(profileData)
      }
    }
    fetchProfile()
  }, [user])

  useEffect(() => {
    const fetchTrivia = async () => {
      if (user) {
        const triviaData = await triviaService.index()
        setAllTrivia(triviaData)
      }
    }
    fetchTrivia()
  }, [user])

  useEffect(() => {
    if (currentCategory !== '' && allTrivia) {
      let catTrivia = []
      allTrivia.forEach(q => {
        if (q.category === currentCategory) {
          catTrivia.push(q)
        }
      })
      let i = Math.floor(Math.random() * catTrivia.length)
      setCurrentTrivia(catTrivia[i])
    }
  }, [user, allTrivia, currentCategory])


  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }




  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" 
          element={<Landing user={user} />} 
          />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/home"
          element={
            // <ProtectedRoute>
              <Home />
            // </ProtectedRoute>
          }
        />
        <Route 
          path="/categories"
          element={
            <ProtectedRoute>
              <Categories setCurrentCategory={setCurrentCategory}/>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/gamepage"
          element={
            <ProtectedRoute>
              <GamePage currentTrivia={currentTrivia}/>
            </ProtectedRoute>
          }
        />
        <Route 
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile userProfile={userProfile}/>
            </ProtectedRoute>
          }
        />
        <Route 
          path="leaderboard"
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/achievements"
          element={
            // <ProtectedRoute>
              <Achievements />
            // </ProtectedRoute>
          }
        />
        <Route 
          path="/settings"
          element={
              <Settings />
          }
        />
      </Routes>
    </>
  )
}

export default App
