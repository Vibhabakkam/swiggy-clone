import { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";



function Home() {
  const [data, setData] = useState();
  const router2 = useNavigate();
  const [currentUser, setcurrentUser] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then(res => res.json())
      .then(JSON => setData(JSON.drinks))
  }, []);

  useEffect(() => {
    var currentUserfromLs = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUserfromLs) {
      setcurrentUser(true)
    }
  }, [])

  function logout(event) {
    event.preventDefault(event);
    localStorage.removeItem("currentUser");
    setcurrentUser(false)
    alert("Logout sucessful");
  }
  function addToCart(product) {
    const currentUserfromLs = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUserfromLs) {
      alert("Please login to add items to cart");
      return;
    }
  
    let userData = JSON.parse(localStorage.getItem("userData")) || {};
  
    if (!userData[currentUserfromLs.email]) {
      userData[currentUserfromLs.email] = { cartItems: [] };
    }
  
    userData[currentUserfromLs.email].cartItems.push(product);
  
    localStorage.setItem("userData", JSON.stringify(userData));
  
    alert("Item added to cart");
  }
  
  function addToCart(e){
      
    var dataFromLs = JSON.parse(localStorage.getItem("userData"));
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if(currentUser){
      for(var i=0; i<dataFromLs.length; i++){
        if(dataFromLs[i].email === currentUser){
          var newObj = dataFromLs[i];
          newObj["cartData"] =newObj["cartData"] || [];
          newObj.cartData.push(e);
          dataFromLs[i] =newObj;
        }
      }
      localStorage.setItem("userData",JSON.stringify(dataFromLs));
      alert("Product added to cart");
    }
    else{
      router2('/login');
      alert("login to add products");
    }
  }

  return (
    <div>
      <div class="navbar">
        <div>
          <div class="navbar-l">
            <div>
              <img
                src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg"
                alt="logo"
              />
            </div>
            <div>
              <p>
                <strong>Malad West </strong>
                Malad, Malad West, Mumbai, Mah....
              </p>
            </div>
          </div>

          <div class="navbar-r">
            <div>
              <p>Search</p>
            </div>
            <div>
              <p>
                Offers <sup> New</sup>
              </p>
            </div>
            <div>
              <p>Help</p>
            </div>
            <div>
              <p>Sign In </p>
              {currentUser ? <button onClick={logout}>Logout</button> : <button onClick={() => router2('/Login')}>login</button>}
            </div>
            <div>
              <p>Cart</p>
            </div>
          </div>
        </div>
      </div>
      <div class="index-top">
        <div>
          <div>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep"
              alt="food"
            />{" "}
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t"
              alt="food"
            />{" "}
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym"
              alt="food"
            />{" "}
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3"
              alt="food"
            />{" "}
          </div>
        </div>
      </div>
      <div class="display-food">
        <div>
          <div class="display-food-l"><p>1355 restaurants</p></div>
          <div class="display-food-r">
            <p>Relevance</p>
            <p>Delivery Time</p>
            <p>Rating</p>
            <p>Cost: Low To High</p>
            <p>Cost: High To Low</p>
            <p>Filters</p>
          </div>
        </div>
        <div class="display-food-data">
          {data && data.map((e, i) => (
            <div key={i}>
              <img src={e.strDrinkThumb} alt="img" />
              <h4>{e.strDrink}</h4>
              <p> <b>250</b> <br /> {e.idDrink}</p>
              <button id="myButton" onClick={() => addToCart(e)}>Add to cart</button>
            </div>
          ))}

        </div>
      </div>
     
    </div>
  );
}
export default Home;