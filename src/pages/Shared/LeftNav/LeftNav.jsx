import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/protik0939/categories/main/categories.json`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="space-y-6">
            <h2 className="text-3xl">All Categories</h2>
            {
                categories.map(category => <Link className="block ml-4 text-xl font-semibold" key={category.id} to={`/category/${category.id}`}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftNav;