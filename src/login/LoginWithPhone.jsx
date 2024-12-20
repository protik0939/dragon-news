import { Link } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import app from "../firebase/firebase.config";

const LoginWithPhone = () => {

    const auth = getAuth(app);

    // const location = useLocation();
    // const navigate = useNavigate();


    const setUpRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier(
            'recaptcha-container',
            {
                size: 'invisible',
                callback: () => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    handleLoginWithPhone();
                },
                'expired-callback': () => {
                    console.log('reCAPTCHA expired. Please try again.');
                }
            },
            auth
        );
    };


    const handleLoginWithPhone = e => {
        e.preventDefault();
        setUpRecaptcha();
        const phoneNo = e.target.number.value;
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            'size': 'normal',
            'callback': (response) => {
                console.log(response);
            },
            'expired-callback': () => {
                // Response expired. Ask user to solve reCAPTCHA again.
                // ...
            }
        });
    }

    return (
        <div>
            <Navbar></Navbar>
            <div >
                <h2 className="text-3xl my-10 text-center">
                    Please Login
                </h2>
                <div id="recaptcha-container"></div>
                <form onSubmit={handleLoginWithPhone} className="lg:w-1/2 md:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone no</span>
                        </label>
                        <input type="number" placeholder="number" name="number" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button id="sign-in-button" className="btn btn-primary">Send OTP</button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not have an account? <Link to="/register" className="text-blue-600 font-bold">Register</Link></p>
            </div>

        </div>
    );
};

export default LoginWithPhone;