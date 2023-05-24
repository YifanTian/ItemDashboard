import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

// function Menu() {

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: MenuList,
      searchTerm: '',
      sortBy: 'name' // default sorting criteria
    };
  }

  componentDidMount() {
    // fetch item data from server and update state
    // example: fetch('/api/items')
    //            .then(response => response.json())
    //            .then(data => this.setState({ items: data }));
  }

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSortChange = (event) => {
    this.setState({ sortBy: event.target.value });
  }

  render() {
      const { items, searchTerm, sortBy } = this.state;
      const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

    // Sort the items based on the selected sorting criteria
    const sortedItems = filteredItems.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'price') {
        return a.price - b.price;
      }
      // Add more sorting criteria if needed
    });
      
      return (
      <div className="menu">
        <h1 className="menuTitle">Item Board</h1>
          <div>
            <label htmlFor="search">Search:</label>
            <input type="text" id="search" value={searchTerm} onChange={this.handleSearchChange} />
          </div>

          <div>
            <label htmlFor="sort">Sort By:</label>
            <select id="sort" value={sortBy} onChange={this.handleSortChange}>
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </div>
        <div className="menuList">
          {sortedItems.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
                keyname={menuItem.keyname}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Menu;
