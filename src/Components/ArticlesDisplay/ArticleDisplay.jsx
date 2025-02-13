import useArticle from "../../../Data/ArticleContext";
import { NavLink } from "react-router-dom";
import { ArticlesStyled } from "./Articles.styled";

const Article = () => {
    const { articles, error } = useArticle(); 

    if (error) {
        return <div>Fejl opstod: {error.message}</div>;
    }

    if (articles.length === 0) {
        return <div>No articles found.</div>;
    }
    
    return (
        <ArticlesStyled>
        <div className="news-container">
            {articles.map((article) => (
                <NavLink key={article.id} to={`/article/${article.slug}`} className="news-item">
                    <img className="news-image" src={article.image} alt={article.title} />
                    <div className="news-content">
                        <h2 className="news-title">{article.title}</h2>
                        <p className="news-date">{article.publishDate}</p>
                    </div>
                </NavLink>
            ))}
        </div>
        </ArticlesStyled>
    );
};

export default Article;
