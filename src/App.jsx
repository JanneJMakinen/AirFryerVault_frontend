
// Air Fryer Vault Application 2025 Janne J. Mäkinen
// frontend

// TODO (front and back)
// add functionality for recipe edit, add, remove
// limit of showing recipes
// better looking card
// search functionality
// add more requests for testing

// ADDED
// added error handling -> catch()

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import recipeService from './services/recipeService'
import './App.css'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Recipes from './pages/Recipes'
import About from './pages/About'
import Settings from './pages/Settings'
import Profile from './pages/Profile'

const App = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    console.log('FE: App.useEffect()')
    console.log('FE: getting all receipes from Mongo Atlas')
    recipeService
      .getAll()
      .then(initialRecipes => {
        setRecipes(initialRecipes)
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }, [])

  return (
    <Router>
      <div className="app-container">
        <Header />
        <Navbar />
        <div className="main-content">
          <Sidebar />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<Recipes recipes={recipes} />} />
              <Route path="/about" element={<About />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
