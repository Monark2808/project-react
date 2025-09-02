import React, { useEffect } from 'react';
import "./card.css";

// let temp = 10;
// function sum(num1, num2) {
//     const ans = num1 + num2;
//     // console.log(ans);
//     // temp = "hello";
//     // // writing something in text file
//     // // making a network request (async) 
//     return ans;
// }
// impure function => function with side effects
// pure function => function without side effects

// sum(10, 20); // 30

// "hello"

function Card(props) {
    const { detail } = props;

    return (
        <div id="card">
            <img src={detail.image} alt="Image..." />
            <span id="title">{detail.title}</span>
            <p>{detail.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                <strong>Price: {detail.price}$</strong>
                <button className="btn">Add to Cart</button>
            </div>
        </div>
    )
}




let flag = false;
const Products = () => {
    console.log("---Products---");
    const [products, setProducts] = React.useState([]);
    const [count, setCount] = React.useState(0);
    const [count2, setCount2] = React.useState(0);

    // what to do
    // when to do it
    useEffect(() => {
        console.log("---useEffect---");
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                flag = true;
            })
            .catch(err => setProducts([]));
    }, []);

    useEffect(() => {
        console.log("Count changed", count);
    }, [count]);


    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click me {count}</button>
            <button onClick={() => setCount2(count2 + 1)}>Click me{2} {count2}</button>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', padding: '1rem' }}>
                {products.map(product => (
                    <Card detail={product} />
                ))}
            </div>
        </div>
    )
}

export default Products;


// initial render => useEffect? => render => useEffect? => changes? => render => useEffect? => changes? => render