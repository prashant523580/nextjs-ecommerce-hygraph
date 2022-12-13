import React, { Component } from 'react'
interface PropsTypes {
    title : string
}
export default class HeadTitle extends Component<PropsTypes> {
  render() {
    return (
        <>
        <style jsx>
            {
                `
                .head{
                    box-shadow: 0 1px 0 rgba(0,0,0,0.34);
                    padding : 6px 8px;
                    text-transform: capitalize;
                }
                `
            }
        </style>
        <div className="head">
            <h2>{this.props.title}</h2>
        </div>
        </>
    )
  }
}
