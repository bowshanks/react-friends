import React from 'react';
import Friend from '../Friend/Friend.jsx';
import friends from '../../../friends.js';

class FriendList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      orderBy: 'name',
      order: 'ascending'
    };

  }

  handleChange(field,event) {
    this.setState({
      [field]: event.target.value
    })
  }

  render() {
    const friendList = friends
    	.filter( friend => friend.name.toLowerCase().indexOf( this.state.searchText.toLowerCase() ) !== -1 )
    	.sort( ( a, b ) => a[ this.state.orderBy ] > b[ this.state.orderBy ] )
    	.map( friend => (
      <Friend
        currentLocation={ friend.current_location || {} }
        friendCount={ friend.friend_count }
        key={ friend.$$hashKey }
        name={ friend.name }
        pictureUrl={ friend.pic_square }
        status={ friend.status ? friend.status.message : "" }
      />
      ) );
    const displayFriends = this.state.order === "ascending" ? friendList : friendList.slice().reverse();
      return (
        <div>
          <form
  					className="form-inline searchForm"
  					role="form"
  				>
  					<div className="form-group">

  						<input
  							className="form-control"
  							onChange={ this.handleChange.bind( this, "searchText" ) }
  							placeholder="Search For Friends"
  							value={ this.state.searchText }
  						/>

  						<select
  							className="input-medium"
  							onChange={ this.handleChange.bind( this, "orderBy" ) }
  							value={ this.state.orderBy }
  						>
  							<option value="name">Name</option>
  							<option value="friend_count">#Friends</option>
  						</select>

  						<select
  							className="input-medium"
  							onChange={ this.handleChange.bind( this, "order" ) }
  							value={ this.state.order }
  						>
  							<option value={ "descending" }>Descending</option>
  							<option value={ "ascending" }>Ascending</option>
  						</select>

  					</div>
  				</form>

        	<ul>
            { friendList }
        	</ul>
        </div>
      )
  }

}

export default FriendList;
