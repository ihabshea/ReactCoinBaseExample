import React, { Component } from 'react';
import {Table} from 'reactstrap'
class Header extends Component{
  constructor(props){
    super(props);
    this.state = {coins: []};
  }
  componentDidMount(){
    fetch("https://api.coinmarketcap.com/v1/ticker/?limit=15").then(res => res.json()).then(json => this.setState({coins: json}));
  }
  componentWillUnmount(){
    //later
  }
  render(){
    return(
      <Table responsive striped bordered hover dark>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Name</th>
          <th>BTC Price</th>
          <th>USD Price</th>
          <th>Current Supply</th>
          <th>Total Supply</th>
        </tr>
      </thead>
        <tbody>
      {this.state.coins.map(coin =>
        <tr>
          <td>{coin.symbol}</td>
          <td>{coin.name}</td>
          <td>{coin.price_btc}</td>
          <td>{coin.price_usd}</td>
          <td>{coin.available_supply}</td>
          <td>{coin.total_supply}</td>
        </tr>
      )}
      </tbody>
      </Table>
    );
  }
}
export default Header;
