import './App.css';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart, removeItemFromCart, updateItemFromCart} from "./redux/cart/actions";

function App() {
    const {products} = useSelector(state => state.product);
    const {cart} = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let sum = Object.values(cart).map(value => {
            return Object.keys(value).map(product => {
                return value[product].totalPrice
            })
        });
        setTotal(sum.flat().reduce((a, b) => a + b, 0));
    }, [cart]);
    return (
        <div>
            <div className="wrapper">
                {products.map((product, index) => <div key={index} className="product">
                    <div className="title">
                        {product.marca}
                    </div>
                    {product.telefonos.map((phone, index) => <>
                        <div className="text">
                            <div className="code">{phone.modelo}</div>
                            <div className="description">
                                Poner descripción en caso de estar en el JSON
                            </div>
                            <div className="description">
                                {phone.color}
                            </div>
                            <div className="review">
                                <span className="star-icon"></span>
                                <span className="star-icon"></span>
                                <span className="star-icon"></span>
                                <span className="star-icon"></span>
                                <span className="star-icon star-disable"></span>
                                <span className="star-reviews">84 reseñas</span>
                            </div>
                            <div className="price">
                                $ {phone.precio}
                            </div>
                            <div className="shop-actions">
                                <button
                                    onClick={() => dispatch(addItemToCart(phone, product.marca))}
                                ><img
                                    src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png"/> Agregar
                                    al carrito
                                </button>
                            </div>
                        </div>
                        <div className="preview">
                            <svg className="svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <circle className="circle" cx="100" cy="100" r="100"/>
                                <image className="image"
                                       x="0" y="0" width="200px" height="180px"/>
                            </svg>
                        </div>
                        <div style={{marginBottom: 30}}/>
                    </>)}
                </div>)}
            </div>
            <div id="w">
                <header id="title">
                    <h1>Carrito</h1>
                </header>
                {Object.keys(cart).map(brand => <div id="page">
                    <h1>{brand}</h1>
                    {Object.keys(cart[brand]).map(product => <table id="cart">
                        <thead>
                        <tr>
                            <th className="first">Foto</th>
                            <th className="second">Cantidad</th>
                            <th className="third">Producto</th>
                            <th className="fourth">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="productitm">
                            <td><img src="https://i.imgur.com/8goC6r6.png" className="thumb"/></td>
                            <td>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <div
                                        onClick={() =>
                                            cart[brand][product].cantidad === 1 ? dispatch(removeItemFromCart(cart[brand][product], brand)) : dispatch(updateItemFromCart(cart[brand][product], cart[brand][product].cantidad - 1, brand))
                                        }
                                        style={{
                                            width: 20,
                                            height: 20,
                                            borderRadius: 10,
                                            backgroundColor: 'black',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '1rem'
                                        }}>
                                        -
                                    </div>
                                    <p style={{margin: '0 10px'}}>{cart[brand][product].cantidad}</p>
                                    <div
                                        onClick={() => dispatch(updateItemFromCart(cart[brand][product], cart[brand][product].cantidad + 1, brand))}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            borderRadius: 10,
                                            backgroundColor: 'black',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '1rem'
                                        }}>
                                        +
                                    </div>
                                </div>
                            </td>
                            <td>{cart[brand][product].modelo}</td>
                            <td>$ {cart[brand][product].totalPrice}</td>
                        </tr>
                        </tbody>
                    </table>)}
                </div>)}
                <table>
                    <tbody>
                    <tr className="totalprice">
                        <td className="light">Total:</td>
                        <td colSpan="2">&nbsp;</td>
                        <td colSpan="2"><span className="thick">${total}</span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
