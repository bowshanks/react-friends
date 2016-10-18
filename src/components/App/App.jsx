import React from 'react';
import FriendList from '../FriendList/FriendList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
          <h1>The <strong>facebook</strong> Friend Machine</h1>

          <div className="friends">
            <FriendList />
          </div>
      </div>
    )
  }

}

export default App;
