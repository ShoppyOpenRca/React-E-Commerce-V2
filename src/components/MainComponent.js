import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Details from './Details';
import Footer from '../Pages/Footer';
import Header from '../Pages/Header';
import Home from './Home';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { fetchArrivals, fetchProducts, fetchCategories } from '../redux/ActionCreators';
import ProductList from './ProductList';
import Default from './Default';
import Cart from '../Cart/Cart';
import CartContext from '../context/cartContext';
import ArrivalMenu from './Arrivals';
import About from './about';
import Contact from './contact';

const mapStateToProps = state => {
    return {
        arrivals: state.arrivals,
        products: state.products,
        categories: state.categories
    }
}

const mapDispatchToProps = dispatch => ({
    fetchArrivals: () => { dispatch(fetchArrivals()) },
    fetchProducts: () => { dispatch(fetchProducts()) },
    fetchCategories: () => { dispatch(fetchCategories()) }
});

class Main extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchArrivals();
        this.props.fetchProducts();
        this.props.fetchCategories();
    }

    render() {
        const HomePage = () => {
            console.log("props", this.props);
            return (
                <div>
                    <Header />
                    <Home
                        arrivals={this.props.arrivals}
                        arrivalLoading={this.props.arrivals.isLoading}
                        arrivalErrMess={this.props.arrivals.errMess}
                        product={this.props.products.products.filter((product) => product.featured)[0]}
                        productLoading={this.props.products.isLoading}
                        productErrMess={this.props.products.errMess}
                        categories={this.props.categories}
                        categoryLoading={this.props.categories.isLoading}
                        categoryErrMess={this.props.categories.errMess}
                    />
                </div>
            );
        }
        return (
            <div>
                <Navbar />
                <CartContext.Provider value={{ cart: [] }}>
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path="/shop" component={ProductList} />
                        <Route exact path='/arrivals' component={() => <ArrivalMenu arrivals={this.props.arrivals} />} />
                        <Route path="/details" component={Details} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route component={Default} />
                        <Redirect to="/home" />
                    </Switch>
                </CartContext.Provider>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));