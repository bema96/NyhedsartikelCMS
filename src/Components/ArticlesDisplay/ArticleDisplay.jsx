import useArticle from "../../../Data/ArticleContext";
import { NavLink } from "react-router-dom";
import { ArticlesStyled } from "./Articles.styled";

// Komponent til at vise artikler
const Article = () => {
    const { articles, error } = useArticle(); // Hent artikler og fejltilstand

    // Vis fejlmeddelelse hvis der er en fejl
    if (error) {
        return <div>Fejl opstod: {error.message}</div>;
    }

    // Vis meddelelse hvis der ikke findes nogen artikler
    if (articles.length === 0) {
        return <div>Ingen artikler fundet.</div>;
    }
    
    // Render artikler
    return (
        // Styled komponent til artikler
        <ArticlesStyled>
            <div className="news-container">
                {articles.map((article) => (
                    // Link til individuel artikel side
                    <NavLink key={article.id} to={`/article/${article.slug}`} className="news-item">
                        {/* Artikel billede */}
                        <img className="news-image" src={article.image} alt={article.title} />
                        <div className="news-content">
                            {/* Artikel titel */}
                            <h2 className="news-title">{article.title}</h2>
                            {/* Artikel udgivelsesdato */}
                            <p className="news-date">{article.publishDate}</p>
                        </div>
                    </NavLink>
                ))}
            </div>
        </ArticlesStyled>
    );
};

export default Article;
