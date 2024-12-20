import { useLoaderData } from "react-router-dom";
import BrakingNews from "./BrakingNews";
import Header from "./Shared/Header";
import LeftNav from "./Shared/LeftNav/LeftNav";
import Navbar from "./Shared/Navbar";
import RightNav from "./Shared/RightNav/RightNav";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = JSON.parse(useLoaderData());
    console.log(news);

    return (
        <div>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navbar></Navbar>
            <div className="grid-cols-1 grid md:grid-cols-4 gap-6">
                <div>
                    <LeftNav></LeftNav>
                </div>
                <div className="col-span-2">
                    {
                        news.map(aNews => <NewsCard key={aNews.id} news={aNews}></NewsCard>)
                    }
                </div>
                <div>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;