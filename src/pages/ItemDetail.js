import React from 'react';
import { MenuDict } from "../helpers/MenuList";
import {Route, Link, Routes, useParams} from 'react-router-dom';


class ItemDetail extends React.Component {

  constructor(props) {
    super(props);

    console.log(props.match.params.id);
    this.state = {
      item: MenuDict[props.match.params.id]
    };

    // let params = useParams();
    // console.log(params);
  }

  componentDidMount() {
    // fetch item data from server using this.props.itemId and update state
    // example: fetch('/api/items/' + this.props.itemId)
    //            .then(response => response.json())
    //            .then(data => this.setState({ item: data }));
  }

  render() {
    const { item } = this.state;

    return (
      <div>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <img src={item.image} alt={item.name} />
        <p>{item.price}</p>
        <button>Add to Cart</button>
      </div>
    );
  }
}

export default ItemDetail;
