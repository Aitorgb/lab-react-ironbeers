import React from 'react';
import DetailBeer from '../components/DetailBeer';
import NavBar from '../components/Navbar';
import { randomBeer } from '../services/api-client';

export default class RandomBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null,
    };
  }

  componentDidMount() {
    randomBeer().then((res) =>
      this.setState({
        beer: res
      })
    );
  }

  render() {
    const beer = this.state.beer;

    if (beer === null) {
      return (
        <div>
          <NavBar />
          <div className="container">
            <div className="alert alert-warning mt-5">Loading...</div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <NavBar />
        <DetailBeer beer={beer} randomBeer={true}/>
      </div>
    );
  }
}
