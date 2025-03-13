import { useParams } from "react-router-dom";
import PageTitle from "./PageTitle";
import resources from "../ressurser";

export default function Resources( {category} ) {
    const { slug } = useParams();
    const filteredResources = resources.filter((res) => res.category.toLowerCase() === slug.toLowerCase());
    
    if (filteredResources.length === 0) return null;

    const categoryTitles = {
        "html": "HTML",
        "css": "CSS",
        "javascript": "JavaScript",
        "react": "React",
        "headless-cms": "Sanity and headless CMS"
    };

    const pageTitle = categoryTitles[slug] || category.charAt(0).toUpperCase() + category.slice(1);

    return (
        <section>
            <PageTitle title={pageTitle} />

            {filteredResources.map((res, index) => (
                <li key={index}>
                    <a href={res.url}>{res.title}</a>
                </li>
            ))}
        </section>
    );
}