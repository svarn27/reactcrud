import React, { Component } from 'react';
import axios from 'axios';

export class Input extends Component{
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      business_name: '',
      business_gst_number:''
    }
  }
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      business_name: e.target.value
    })
  }
  onChangeGstNumber(e) {
    this.setState({
      business_gst_number: e.target.value
    })
  }

  onSubmit(e) {

    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      business_name: this.state.business_name,
      business_gst_number: this.state.business_gst_number
    };

    if(this.props.name === 'edit'){

      axios.post('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
          .then(res => console.log(res.data));

      this.props.history.push('/index');

    } else if(this.props.name === 'create'){

      axios.post('http://localhost:4000/business/add', obj)
        .then(res => console.log(res.data));

      this.setState({
        person_name: '',
        business_name: '',
        business_gst_number: ''
      })
    }
  }

  componentDidMount() {
    if(this.props.name === 'edit'){
      axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
          .then(res => {
              this.setState({
                person_name: res.data.person_name,
                business_name: res.data.business_name,
                business_gst_number: res.data.business_gst_number });
          })
          .catch(function (error) {
              console.log(error);
          })
    }
  }

  render() {

    const btnText = this.props.name === "create" ? "Register Business" : "Update Business";
    const hdrText = this.props.name === "create" ? "Add New Business" : "Update Business";

      return (
          <div style={{ marginTop: 10 }}>
              <h3>{hdrText}</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Person Name:  </label>
                      <input
                        type="text"
                        className="form-control"
                        value={this.state.person_name}
                        onChange={this.onChangePersonName}
                        />
                  </div>
                  <div className="form-group">
                      <label>Business Name: </label>
                      <input type="text"
                        className="form-control"
                        value={this.state.business_name}
                        onChange={this.onChangeBusinessName}
                        />
                  </div>
                  <div className="form-group">
                      <label>GST Number: </label>
                      <input type="text"
                        className="form-control"
                        value={this.state.business_gst_number}
                        onChange={this.onChangeGstNumber}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value={btnText} className="btn btn-primary"/>
                  </div>
              </form>
          </div>
      )
  }

}

export default Input;
