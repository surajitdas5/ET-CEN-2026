import axios from "axios";
import { useState, useEffect } from "react";

function ApiCall(){
    let [ products, setProducts ] = useState([])
    let url ="https://fakestoreapi.com/products"
    async function getProducts(){
        try {
          let data = await axios.get(url);
        // let products = data.data
        setProducts(data.data)
        console.log(products)
        } catch (error) {
            console.log(data)
        }
    }

    // getProducts()
    useEffect(()=>{
        getProducts()
    }, [])

    console.log(products)
    return (
        <div className="container my-4">
            <ul>
                {
                    products.map( p => (
                        <li key={p.id}>{p.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ApiCall;