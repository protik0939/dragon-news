import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, image_url, details, _id } = news;
    return (
        <div className="card bg-base-100 image-full shadow-xl mb-10">
            <figure>
                <img
                    src={image_url}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="bottom-10 absolute">
                    {
                        details.length > 200 ? <p>{details.slice(0, 100)} <Link to={`/news/${_id}`}><button className="btn btn-outline btn-primary btn-xs" >Read More</button></Link></p> : <p>{details}</p>
                    }
                </div>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default NewsCard;