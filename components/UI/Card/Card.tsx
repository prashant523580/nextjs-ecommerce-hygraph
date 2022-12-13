import React, { Component } from 'react'
import HeadTitle from '../HeadTitle/HeadTitle'
interface PropsTypes{
    title: string,
    children: React.ReactNode
}
export default class Card extends Component<PropsTypes> {
  render() {
    return (<>
        <style jsx>
            {`
                .card{
                    width: 100%;
                    background-color:white;
                    border-radius: .4em;
                    margin: .6em auto;
                    border: 1px solid rgba(0,0,0,0.3);
                }
                .card .body{
                    padding: 6px 8px;
                }
            `}
        </style>
      <div className="card">
        <HeadTitle title={this.props.title}/>
        <div className="body">
            {this.props.children}
        </div>
      </div>
    </>
    )
  }
}
