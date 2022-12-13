import React, { Component } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Image from 'next/image';
import styles from "../../styles/productDetails.module.scss";
import HeadTitle from '../../components/UI/HeadTitle/HeadTitle';
import Card from '../../components/UI/Card/Card';
export async function getStaticPaths() {
    const client = new ApolloClient ({
        uri: "https://api-ap-south-1.hygraph.com/v2/clbgfje3709ye01t111f421vw/master",
        cache : new InMemoryCache()
    });
    const data =  await client.query({
        query : gql `
        query Product {
            products {
              id
              price
              slug
              title
              image {
                url
              }
            }
          }
        `
    });
    const paths = data.data.products.map((product : any) => {
        return{
            params:{
                productSlug : product.slug
            }
        }
    })
    return{
        paths,
        fallback : false
    }
}

export async function getStaticProps({ params }: any) {
    const client = new ApolloClient({
       uri: 'https://api-ap-south-1.hygraph.com/v2/clbgfje3709ye01t111f421vw/master',
       cache: new InMemoryCache(),
    });
   
    const data = await client.query({
       query: gql`
         query MyQuery($slug: String) {
          products(where: { slug: $slug }) {
             id
             title
             price
             slug
             description
             image {
                url
             }
          }
       
}
       `,
       variables: {
          slug: params.productSlug,
       },
    });
    const product = data.data.products[0];
    return {
       props: {
          product,
       },
    };
   }
export default class Product extends Component<any> {
   componentDidMount(): void {
      console.log(this.props.product)
   }
  render() {
    return (
        <div className={styles.container}>
        <div className={styles.section + " "+styles.left}>
         <div className="img">

           <Image src={`${this.props.product.image.url}`} width={250} height={300} alt={this.props.product.title} />
         </div>
           <h3>{this.props.product.title}</h3>
         <div className={styles.button_group}>
            <button>  <a className="btn">Add to cart 🛒</a></button>
            <button>buy</button>
         </div>
        </div>
        <div className={styles.section +" "+styles.right}>
         <div className="images">
            <div className="carousel">
               <div className="image">
                  <Image src={this.props.product.image.url} alt={this.props.product.title} width={300} height={350}  />
               </div>
            </div>
         </div>
         <div className={styles.product_details}>
         <Card title='Price'> 
           <p>${this.props.product.price}</p>
         
         </Card>
         <Card title='description'> 
         
           <div
              dangerouslySetInnerHTML={{
                 __html: this.props.product.description,
               }}
               ></div>
         </Card>
         <Card title='Ratings and reviews'>
            <div className={styles.rating_point}>
               <p>2.7</p>
               <p><code>10,200</code> Ratings  </p>
            </div>
            <div className={styles.rating_progress}>
               <div className={styles.progress_five}></div>
               <div className={styles.progress_four}></div>
               <div className={styles.progress_three}></div>
               <div className={styles.progress_two}></div>
               <div className={styles.progress_one}></div>
            </div>

         </Card>
         <Card title='additional information'>
            
              <p>Category : {this.props.product.slug}</p>
         </Card>
         
               </div>
        </div>
     </div>
    )
  }
}
