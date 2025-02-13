import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useParams } from "react-router-dom";
import useArticle from "../../../Data/ArticleContext";
import { ArticleInfoStyled } from "./Article.styled"

const ArticleInfo = () => {
    const { slug } = useParams();
    const { articles, error } = useArticle();

    if (error) {
        return <div>Fejl opstod: {error.message}</div>
    }

    const article = articles.find((article) => article.slug === slug);

    if (!article) {
        return <div>Artikel ikke fundet.</div>
    }

    const content = article.content;
    const renderedContent = documentToReactComponents(content);

    return (
        <ArticleInfoStyled>
            <img src={article.image} alt={article.title} />
            <p>{article.publishDate}</p>
            <h2>{article.title}</h2>
            <div>{renderedContent}</div>
        </ArticleInfoStyled>
    )
}

export default ArticleInfo; 