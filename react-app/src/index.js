import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import reportWebVitals from './reportWebVitals';
import ViewAllProvider from './components/viewAll/ViewAllContext';

ReactDOM.render(
    <React.StrictMode>
    <ViewAllProvider>
        <App/>
    </ViewAllProvider>

</React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Use Fake Store AUPI to fetch products data and build a simple products page
// using Fetch API and React. https://fakestoreapi.com/

// 1. Use useEffect to call fetch function to call the products API at
// https://fakestoreapi.com/products
//2. Save the response into a state called 'products'
//3. Render the products state into the DOM as a simple list of products
// 4. Create a <Product /> component that will receive all the keys in the
// product object as props
//5. Add a Product.css file and make the Product component nicer
// 6. Use Flexbox or CSS Grid to arrange the Products in a nicer way on the
// screen (see attached image for reference)