import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProductPage = () =>{
    const [singleProduct, setSingleProduct] = useState();
    console.log(singleProduct, 'singleProduct');
    const data = useParams();

    useEffect(() =>{
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      
      .then((res) => res.json())
      .then((Json) => Json.drinks)
      .then((json) => json.filter((obj) => obj.idDrink === data.id))
      .then((data) => setSingleProduct(data[0]));
    }, [])
    console.log(data.id)

    return(
        <>
        <div>
        SingleProductPage
        {singleProduct && <div>
            <img src ={singleProduct.strDrinkThumb} alt="product"/>
            <h1>{singleProduct.strDrink}</h1>
            <button>Buy</button> 
            </div>}
        </div>
        </>
    )
} 
export default SingleProductPage;