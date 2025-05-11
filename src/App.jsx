import { Routes, Route } from "react-router-dom"
import Layout from "./Layout/Layout"
import FrontPage from "./Pages/FrontPage/Home"
import Article from "./Components/ArticlesDisplay/ArticleDisplay"
import ArticleInfo from "./Components/ArticleMoreInfo/ArticleInfo"
import { Analytics } from "./Analytics"
import { CookieConsent } from "./Components/CookieConsent/cookies"

function App() {
  
  return (
    <>
    <Analytics />
    <CookieConsent />
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<FrontPage /> } />
        <Route path="category/:category" element={<Article />} />
        <Route path="/article/:slug" element={<ArticleInfo />} />
      </Route>
    </Routes> 
    </>
  )
}

export default App
