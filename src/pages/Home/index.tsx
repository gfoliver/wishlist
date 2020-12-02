import React, { useState, useEffect, useCallback } from 'react';
import { getLinkPreview } from 'link-preview-js';
import { useToasts } from 'react-toast-notifications';

import { Container, Header, Button, Grid, Card, SmallButton, Input, Form, Remove } from './styles';

interface IProduct {
    url: string;
    title: any;
    siteName: any;
    description: any;
    mediaType: any;
    contentType?: string;
    images: string[];
    favicons: any[];
}

const Home: React.FC = () => {
    const { addToast } = useToasts();

    const [products, setProducts] = useState<IProduct[]>(() => {
        const localStorageProducts = localStorage.getItem('wishlist:products');
        if (localStorageProducts)
            return JSON.parse(localStorageProducts);

        return [];
    });

    const [link, setLink] = useState('');

    useEffect(() => {
        localStorage.setItem('wishlist:products', JSON.stringify(products));
    }, [products]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        getLinkPreview(link).then(response => {
            setProducts(products => [...products, response as IProduct]);
            setLink('');
            addToast('Product added to wishlist! :D', {appearance: 'success'});
        }).catch(e => addToast('Couldn\'t add this product to your wishlist :(', {appearance: 'error'}));
    }, [link, addToast]);

    const getSrcFromImages = useCallback((images: string[]) => {
        return images[0].split('?')[0];
    }, []);

    const removeProduct = useCallback((index: number) => {
        let tempProducts = [...products];
        tempProducts.splice(index, 1);
        setProducts(tempProducts);
    }, [products]);

    return (
        <Container>
            <Header>
                <h1>wishlist</h1>
                <Form onSubmit={handleSubmit}>
                    <Input value={link} onChange={e => setLink(e.target.value)} placeholder="Product Link" />
                    <Button>Add Item</Button>
                </Form>
            </Header>
            <Grid>
                {products.map((product, index) => (
                    <Card key={`prod-${index}`}>
                        {product.images.length && (
                            <img className="thumb" src={getSrcFromImages(product.images)} alt={product.title} />
                        )}
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <SmallButton target="_blank" href={product.url}>View</SmallButton>
                        <Remove onClick={() => removeProduct(index)}>Remove</Remove>
                    </Card>
                ))}
            </Grid>
        </Container>
    );
}

export default Home;