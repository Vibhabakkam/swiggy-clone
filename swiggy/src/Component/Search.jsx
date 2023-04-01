import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Search = () => {
    const [SearchProduct, setSearchProduct] = useState();
    console.log(SearchProduct, 'SearchProduct');
    const data = useParams();

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
            .then((res) => res.json())
            .then((Json) => Json.drinks)
            .then((json) => json.filter((obj) => obj.strDrink === data.name))
            .then((dataa) => setSearchProduct(dataa));
    }, [])
    console.log(data.name)

    return (
        <>
            <div>
                SearchProductPage
                {SearchProduct && SearchProduct.map((e,i) => (
                    <div key={i} >
                        <img src={e.strDrinkThumb} alt="product" />
                        <h1>{e.strDrink}</h1>
                        <button>Buy</button>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Search;