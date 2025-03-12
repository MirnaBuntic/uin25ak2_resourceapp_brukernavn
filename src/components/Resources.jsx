import { useParams } from "react-router-dom";
import PageTitle from "./PageTitle";
import resources from "../ressurser";

export default function Resources() {
    const { category } = useParams();
    const filteredResources = resources.filter((res) => res.category.toLowerCase() === category.toLowerCase());
    

    if (filteredResources.length === 0) return null;

    return (
        <section>
            <PageTitle title={`${category}`} />

            {filteredResources.map((resource, index) => (
                <div key={index}>
                    <p>{resource.text}</p>

                    <ul>
                        {resource.sources.map((source, i) => (
                           <li key={i}>
                               <a href={source.url} target="_blank" rel="noopener noreferrer">
                                  {source.title}
                               </a>
                            </li>
                          ))}
                       </ul>
                </div>
            ))}
        </section>
    );
}