import { useState, useEffect } from "react";
import client from "../src/Utils/contentfulClient";
import { useParams } from "react-router-dom";

const useArticle = () => {
    const { category } = useParams();
    const [articles, setArticles] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [error, setError] = useState(null);

    const date = new Date().toLocaleDateString('da-DK')


    useEffect(() => {

        client.getEntries({ content_type: 'nyhedsartikler' })
            .then((data) => {

                const fetchedArticles = data.items.map((item) => ({
                    id: item.sys.id,
                    title: item.fields.overskrift,
                    publishDate: new Date(item.fields.udgivelsesdato).toLocaleDateString("da-DK"),
                    author: item.fields.skribent,
                    image: item.fields.artikelbillede ? item.fields.artikelbillede.fields.file.url : null,
                    content: item.fields.indhold,
                    category: item.fields.kategori,
                    slug: item.fields.slug,
                }));

                setArticles(fetchedArticles);
               
            })
            .catch((error) => {
                setError(error);
                console.error("Error fetching articles:", error);
            });
    }, []);


    useEffect(() => {
        if (category) {
            const filtered = articles.filter(article => article.category.toLowerCase() === category.toLowerCase() );
            setFilteredArticles(filtered);
        }
        else {
            setFilteredArticles(articles);
        }
    }, [category, articles])



    useEffect(() => {
        console.log(filteredArticles); 
    }, [filteredArticles]);

    return { articles: filteredArticles, error };
};

export default useArticle;
