import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ClientRow extends Component {

  render() {

    var positive = {
      icon:"check-circle",
      style: {color: 'LimeGreen'},
      className:"fa-2x"
    }

    var negative = {
      icon:"times-circle",
      style: {color: 'red'},
      className:"fa-2x"
    }

    var phone = {
      icon:"phone",
      style: {color: 'grey'},
      className:"fa-2x"
    }

    var fb = {
      icon:['fab', 'facebook'],
      style: {color: '#4267b2'},
      className:"fa-2x"
    }

    var obj = Math.random() >= 0.5 ? negative : positive;
    var channel = this.props.obj.channel == "FB" ? fb : phone;

    return (
      <tr>
        <td>
          {this.props.obj.name}
        </td>
        <td>
          <FontAwesomeIcon {...channel} />
        </td>
        <td>
          {new Date(this.props.obj.time).toDateString()}
        </td>
        <td>
          <FontAwesomeIcon {...Math.random() >= 0.5 ? negative : positive}/>
        </td>
        <td>
          <FontAwesomeIcon {...Math.random() >= 0.5 ? negative : positive}/>
        </td>
        <td>
          <FontAwesomeIcon {...Math.random() >= 0.5 ? negative : positive}/>
        </td>
        <td>
          <Link to={"client/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }
}

export default ClientRow;
