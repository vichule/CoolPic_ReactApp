import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SearchHome } from './pages/search/searchHome.jsx'
import { Favorites } from './pages/favorites/favorites.jsx'
import { Header } from './components/header/header.jsx'
import { Footer } from './components/footer/footer.jsx'
import { SearchBar } from './components/searchbar/searchbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<SearchHome />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
