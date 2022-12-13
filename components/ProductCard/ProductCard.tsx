import Image from 'next/image'
import React, { Component } from 'react'
type PropsTypes = {
    title : string,
    price : string,
    imgUrl : string
}
export default class ProductCard extends Component<PropsTypes> {
  render() {
    return (
      <div className="card">
        <div className="img">
            <Image  priority src={this.props.imgUrl} alt={this.props.title} width={200} height={250}/>
         
        </div>
        <div className="title">{this.props.title}</div>
        <div className="price">{this.props.price}   <div className="off">{true && "50% off"}</div></div>
      </div>
    )
  }
}
