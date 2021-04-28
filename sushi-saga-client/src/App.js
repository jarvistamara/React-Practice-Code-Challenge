import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3001/sushis"

class App extends Component {
  state = {
    sushis: [],
    uneatenSushis: []
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const four = data.slice(0, 4)
      console.log(data, four)
      this.setState({sushis: data, uneatenSushis: four})
    })
  }

  getSushi = () => {
    const four = data.slice(0, 4)
    console.log(data, four)
    this.setState(state => {
      const newSushis = state.sushis
      const newUneaten = newSushis.splice(0,4)
      return {
      sushis: newSushis, 
      uneatenSushis: newUneaten
    }})
  }

  eatSushi = (e) => {
    console.log(e.target.id)
    this.setState({...this.state, uneatenSushis: this.state.uneatenSushis.filter(s => s.id != e.target.id)})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer uneatenSushis={this.state.uneatenSushis} eatTheSushi={this.eatSushi} getTheSushi={this.getSushi}/>
        <Table />
      </div>
    );
  }
}

export default App;