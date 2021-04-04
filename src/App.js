// import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRenderProps.js';
import React from 'react';
 
export default class App extends React.Component {
  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users"
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({people: data, loading: false})
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h1>Contacts</h1>
        </div>

        {this.state.people.map(person => (
          <div key={person.id}>
            <Toggle render={({on, toggle}) => (
            <div>
              <button className="Contact-name" onClick={toggle}>{person.name}</button>
                {on && 
                <div>
                    <a>Name: {person.name}</a>
                    <h3></h3>
                    <a>Username: {person.username}</a>
                    <h3></h3>
                    <a>Email: {person.email}</a>
                    <h3></h3>
                    <a>Address: {person.address.suite + ' ' + 
                    person.address.street + ' ' +
                    person.address.city + ', ' +
                    person.address.zipcode
                    }</a>
                    <h3></h3>
                    <div>
                      <Toggle render={({on, toggle}) => (
                        <div>
                          <div onClick={toggle}> Geo:(click to view more/less)</div>
                            {on &&
                            <div>
                              <a>lat: {person.address.geo.lat}, </a>
                              <a>lng: {person.address.geo.lng}</a>
                            </div>
                            }
                        </div>
                      )} />
                    </div>
                    <h3></h3>
                    <a>Phone: {person.phone}</a>
                    <h3></h3>
                    <a>Website: {person.website}</a>
                    <h3></h3>
                    {/* <a>Company: {person.company.name}</a> */}
                    <div>
                      <Toggle render={({on, toggle}) => (
                        <div>
                          <div onClick={toggle}>Company: {person.company.name} (click to view more/less)</div>
                            {on &&
                            <div>
                              <a>Company catch Phrase: Multi-layered client-server neural-net</a>
                              <br></br>
                              <a>Company bs: harness real-time e-markets</a>
                            </div>
                            }
                        </div>
                      )} />
                    </div>
                </div>
              }
            </div>
            )} />
          </div>
        ))}
      </div>
    );
  }
}
