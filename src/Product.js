import React, { Component } from "react";

let products = [
    {
        id: 1,
        name: "IMG",
        price: 4500000
    },
    {
        id: 2,
        name: "IMG1",
        price: 4500000
    },
    {
        id: 3,
        name: "IMG2",
        price: 4500000
    },
];

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: products,
            newProduct: {
                id: "",
                name: "",
                price: ""
            },
            editingProductId: null
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            newProduct: {
                ...prevState.newProduct,
                [name]: value
            }
        }));
    }

    handleAddProduct = () => {
        const { newProduct, products } = this.state;
        const id = products.length + 1;
        const updatedProduct = {
            id: id,
            name: newProduct.name,
            price: newProduct.price
        };
        const updatedProducts = [...products, updatedProduct];
        this.setState({
            products: updatedProducts,
            newProduct: {
                id: "",
                name: "",
                price: ""
            }
        });
    }

    handleEditProduct = (id) => {
        const { products } = this.state;
        const productToEdit = products.find(product => product.id === id);
        this.setState({
            newProduct: {
                id: productToEdit.id,
                name: productToEdit.name,
                price: productToEdit.price
            },
            editingProductId: id
        });
    }

    handleUpdateProduct = () => {
        const { newProduct, products, editingProductId } = this.state;
        const updatedProducts = products.map(product => {
            if (product.id === editingProductId) {
                return {
                    id: product.id,
                    name: newProduct.name,
                    price: newProduct.price
                };
            }
            return product;
        });
        this.setState({
            products: updatedProducts,
            newProduct: {
                id: "",
                name: "",
                price: ""
            },
            editingProductId: null
        });
    }

    handleDeleteProduct = (id) => {
        const { products } = this.state;
        const updatedProducts = products.filter(product => product.id !== id);
        this.setState({
            products: updatedProducts
        });
    }

    render() {
        const { products, newProduct, editingProductId } = this.state;

        return (
            <>
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <button onClick={() => this.handleEditProduct(product.id)}>Edit</button>
                                <button onClick={() => this.handleDeleteProduct(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={newProduct.name}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="text"
                        name="price"
                        placeholder="Product Price"
                        value={newProduct.price}
                        onChange={this.handleInputChange}
                    />
                    {editingProductId ? (
                        <button onClick={this.handleUpdateProduct}>Update</button>
                    ) : (
                        <button onClick={this.handleAddProduct}>Add</button>
                    )}
                </div>
            </>
        );
    }
}
export default Product