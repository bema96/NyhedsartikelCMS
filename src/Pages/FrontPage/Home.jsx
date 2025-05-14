import Articles from "../../Components/ArticlesDisplay/ArticleDisplay";
import { Helmet } from "react-helmet-async";

const FrontPage = () => {
    return (
        <>
            <Helmet>
                <title>Nyhedsoversigt | Bema Nyheder</title>

                {/* SEO: vises i Google som beskrivelse under titlen */}
                <meta name="description" content="Få overblik over de seneste nyhedsartikler, analyser og opdateringer samlet ét sted." />

                {/* SEO: bruges af nogle søgemaskiner (ikke Google) */}
                <meta name="keywords" content="nyheder, artikler, analyser, dansk presse, aktuelle emner" />

                {/* Gør siden responsiv på mobil og tablets */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Sociale medier: titel når siden deles (fx Facebook) */}
                <meta property="og:title" content="Nyhedsoversigt | Bema Nyheder" />

                {/* Sociale medier: beskrivelse under titlen ved deling */}
                <meta property="og:description" content="Læs med i vores dækning af aktuelle emner og de seneste artikler." />

                {/* Sociale medier: billede som vises når siden deles */}
                <meta property="og:image" content="https://via.placeholder.com/1200x630.png?text=Bema+Nyheder" />

                {/* Sociale medier: URL'en der deles */}
                <meta property="og:url" content="https://nyhedsartikler.netlify.app" />

                {/* Sociale medier: angiver at det er en almindelig website-side */}
                <meta property="og:type" content="website" />

                {/* SEO: fortæller Google at dette er den officielle URL (undgår duplikater) */}
                <link rel="canonical" href="https://nyhedsartikler.netlify.app" />
            </Helmet>



            {/* Indhold */}
            <Articles />

        </>
    )
}

export default FrontPage;