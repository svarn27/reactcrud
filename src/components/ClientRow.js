import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ClientRow extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.obj.name}
        </td>
        <td>
          {this.props.obj.psid}
        </td>
        <td>
          {this.props.obj.time}
        </td>
        <td>
          <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }
}

export default ClientRow;
