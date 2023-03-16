import "./Component.css";

function Login(props){
    return(
        <div id='login'>
            <div className="login-page">
                <div onClick={props.onClose}> X </div>
                <div>
                    <div>
                        <h2>Log in</h2>
                        <p> <strong> or </strong> create an account</p>
                    </div>
                    <div></div>
                </div>

                <div>
                    <form>
                        <input type='number' placeholder="Phone Number" />
                    </form>
                </div>

                <div>
                    <button>Continue</button>
                    <p class='tc'>By creating an account, I accept the <strong>Terms & Conditions & Privacy Policy</strong></p>
                </div>
            </div>
        </div>
    )
}

export default Login;