import "./Component.css";
import { useState } from "react";
import Signup from "./SignUp";
import Login from "./Login";


function Homepage() {
    const [showSignupPage, setShowSignupPage] = useState(false);
    const [showLoginPage, setShowLoginPage] = useState(false);

    function display(value) {
        if (value === 's') {
            setShowSignupPage(true);
            setShowLoginPage(false);
        }
        else {
            setShowLoginPage(true);
            setShowSignupPage(false);
        }

    }
    function closePage(value) {
        if (value === 's') {
            setShowSignupPage(false);
        }
        else {
            setShowLoginPage(false);
        }

    }

    return (
        <div>
            {showSignupPage && <Signup onClose={() => closePage('s')} />}
            {showLoginPage && <Login onClose={() => closePage('l')} />}
            <div id="home">
                <div id="topdiv">
                    <div id="topfirst">
                        <div>
                            <img
                                src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Symbol.png"
                                alt="swiggy"
                            />
                            <div>
                                <button onClick={() => display('l')} >Login</button>
                                <button onClick={() => display('s')} >SignUp</button>
                            </div>

                        </div>
                        <div>
                            <h1> Cooking gone wrong </h1>
                            <p>Order food from favourite restaurants near you.</p>
                        </div>
                        <div>
                            <input type="text" placeholder="Enter your delivery location" />
                            <button>FIND FOOD</button>
                        </div>
                        <div>
                            <p>POPULAR CITIES IN INDIA</p>
                            <p> <strong>Ahmedabad</strong> Bangalore <strong> Chennai</strong> Delhi <strong>Gurgaon</strong> Hyderabad <strong>Kolkata</strong> Mumbai <strong>Pune</strong> & more.</p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div id="bottomdiv">
                    <div>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" alt="" />
                        <p><strong>No Minimum Order</strong> <br />
                            Order in for yourself or for the group, with no restrictions on order value
                        </p>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" alt="" />
                        <p><strong>Live Order Tracking</strong> <br />
                            Know where your order is at all times, from the restaurant to your doorstep

                        </p>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" alt="" />
                        <p><strong>Lightning-Fast Delivery</strong> <br />
                            Experience Swiggy's superfast delivery for food delivered fresh & on time

                        </p>
                    </div>

                </div>




            </div>
        </div>
    )
}
export default Homepage;
