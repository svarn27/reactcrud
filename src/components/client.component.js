import React, {Component} from 'react';
import axios from 'axios';
import ClientRow from './ClientRow';

export default class Contacts extends Component {
  constructor(props){
    super(props);
    this.state = {client: []};
  }
  componentDidMount(){
    axios.get('http://localhost:4000/client')
      .then(res => {
        this.setState({ client: res.data });
      })
      .catch(err => console.log)
  }

  tabRow(){
    return this.state.client.map(function(object,i){
      return <ClientRow obj={object} key={i} />
    })
  }

  render(){
    return (
      <div>
        <h3 align='center'>Business List</h3>
          <table className="table table-striped" style={{ marginTop:20 }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Channel</th>
                <th>Date/Time</th>
                <th>Response?</th>
                <th>Apt?</th>
                <th>Sale?</th>
                <th colSpan="2" style={{'text-align': 'center'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.tabRow()}
            </tbody>
          </table>
      </div>
    )
  }
}
