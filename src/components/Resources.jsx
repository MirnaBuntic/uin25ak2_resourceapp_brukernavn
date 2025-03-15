import PageTitle from "./PageTitle";
import resources from "../ressurser";

export default function Resources( {category} ) {
    
    const filteredResources = resources.filter((res) => res.category === category);
    
    if (filteredResources.length === 0) return null;

    const categoryTitles = {
        "html": "HTML",
        "css": "CSS",
        "javascript": "JavaScript",
        "react": "React",
        "headless-cms": "Sanity and headless CMS"
    };

    const pageTitle = categoryTitles[category] || category.charAt(0).toUpperCase() + category.slice(1);

    return (
        <section>
            <PageTitle title={pageTitle} />
            <ul>
              {filteredResources.map((res, index) => (
                   <li key={index}>
                      <a href={res.url}>{res.title}</a>
                   </li>
                ))}
            </ul>
        </section>
    );
}