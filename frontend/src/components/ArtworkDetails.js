import { useParams } from "react-router-dom";
import useFetch from "../useFetch"

const ArtworkDetails = () => {
    const { id } = useParams();
    const { data: artwork, error, isPending } = useFetch('http://localhost:3000/api/artwork/' + id);

    return (
        <div className="">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            { artwork && (
                <article>
                    <h2>{ artwork.title }</h2>
                    <p>{ artwork.size }</p>
                    <div>{ artwork.media }</div>
                </article>
            )}
        </div>
    );
}
 
export default ArtworkDetails;