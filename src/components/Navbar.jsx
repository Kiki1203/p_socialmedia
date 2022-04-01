import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-dark bg4">
          <div className="container">
            <span className="navbar-brand mb-0 h1">LOGO</span>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
            <div className="d-flex">
              <div style={{ color: 'white' }}>
                <span>wer</span>
              </div>
              <div style={{ color: 'white' }}>
                <span>wer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
