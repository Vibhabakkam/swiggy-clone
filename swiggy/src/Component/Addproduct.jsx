import{ useState } from "react";
import './Addproduct.css'


function Addproduct(){
    const [swiggyproduct, setUserData] = useState({ name: "", link: "", price: "" });

    function handleSubmit(event) {
        event.preventDefault();
        console.log(swiggyproduct, "after submit");
        var usersFromDB = JSON.parse(localStorage.getItem("swiggyproduct")) || [];
        usersFromDB.push(swiggyproduct);
        localStorage.setItem("swiggyproduct", JSON.stringify(usersFromDB));
        setUserData({ name: "", link: "", price: "" });
        alert("product added ...");
    }
    function updatingData(e) {
        var name = e.target.name;
        var value = e.target.value;
        console.log(e.target.name, e.target.value, "updatingData");
        setUserData({ ...swiggyproduct, [name]: value })
    }
     

return(
    <>
    
     <div id="body">
                <div id="register">
                    <div id="top">
                        <div>
                            <div>Add products </div>
                            <div>
                                {/* <a>login</a> */}
                            </div>
                        </div>
                        <div>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="img"/> 
                        </div>
                    </div>
                    <div>
                        <form onSubmit={(event) => handleSubmit(event)}>
                            <label> Product Title</label>
                            <input onChange={updatingData} name='name' type="text" placeholder="Enter your product Title" />
                            <label>Product link</label>
                            <input onChange={updatingData} name='link' type="url" placeholder="Enter your product link" />
                            <label> Product price</label>
                            <input onChange={updatingData} name='price' type="text" placeholder="Enter your product price" /> <br />
                            <label> submit product</label>
                            <input id="Rsubmit" type="submit" value="Add Product" />
                        </form>
                    </div>
                </div>
            </div>
        </>

)


}

export default Addproduct;