import React, { Component } from 'react';
import axios from 'axios';

export default class ClientEdit extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      number: ''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/client/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({
                name: response.data.name,
                number: response.data.number });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeNumber(e) {
    this.setState({
      number: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      number: this.state.number
    };
    axios.post('http://localhost:4000/client/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));

    this.props.history.push('/client');
  }

  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Person Name:  </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>Phone Number: </label>
                    <input type="text"
                      className="form-control"
                      value={this.state.number}
                      onChange={this.onChangeNumber}
                      />
                </div>
                <div className="form-group">
                    <input type="submit"
                      value="Update Client"
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}
