import { FaGoogle, FaGithub, FaFacebook, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";

const RightNav = () => {

    return (
        <div>

            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login with</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    GitHub
                </button>
            </div>

            <div className="p-4 mb-6">
                <h2 className="text-3xl mb-4">Find Us On</h2>
                <a href="" className="p-4 flex text-lg items-center border rounded-t-lg">
                    <FaFacebook className="mr-3"></FaFacebook>
                    Facebook
                </a>
                <a href="" className="p-4 flex text-lg items-center border-x">
                    <FaSquareXTwitter className="mr-3"></FaSquareXTwitter>
                    Twitter
                </a>
                <a href="" className="p-4 flex text-lg items-center border rounded-b-lg">
                    <FaInstagram className="mr-3"></FaInstagram>
                    Instagram
                </a>
            </div>

            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Q Zone</h2>
                <img className="rounded" src="https://plus.unsplash.com/premium_photo-1688561383203-31fed3d85417?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <img className="rounded" src="https://images.unsplash.com/photo-1590719550920-7543bd5657a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBsaXZlcyUyMG1hdHRlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <img className="rounded" src="https://images.unsplash.com/photo-1649451844802-f444b7885ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhY2tpbmd8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>

        </div>
    );
};

export default RightNav;