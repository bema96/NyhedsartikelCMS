import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ArticleInfoStyled } from "./Article.styled"
import { useParams } from "react-router-dom";
import useArticle from "../../../Data/ArticleContext";

// Komponent til at vise detaljeret information om en artikel
const ArticleInfo = () => {
    const { slug } = useParams(); // Hent slug fra URL
    const { articles, error } = useArticle(); // Hent artikler og fejltilstand

    // Vis fejlmeddelelse hvis der er en fejl
    if (error) {
        return <div>Fejl opstod: {error.message}</div>;
    }

    // Find artikel baseret på slug
    const article = articles.find((article) => article.slug === slug);

    // Vis meddelelse hvis artiklen ikke findes
    if (!article) {
        return <div>Artikel ikke fundet.</div>;
    }

    const content = article.content; // Hent artikel indhold
    const renderedContent = documentToReactComponents(content); // Konverter indhold til React komponenter

    return (
        // Styled komponent til artikel information
        <ArticleInfoStyled>
            {/* Artikel billede */}
            <img src={article.image} alt={article.title} />
            {/* Artikel titel */}
            <h1>{article.title}</h1>
            {/* Artikel indhold */}
            <div>{renderedContent}</div>
        </ArticleInfoStyled>
    );
};

export default ArticleInfo;