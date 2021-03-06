import React from 'react';

// Views
import Player from '../Player/Player';
import Chessboard from '../Chessboard/Chessboard';
import MessageBox from '../MessageBox/MessageBox';

// Components should represent one piece of data model
class PlayView extends React.Component {

  // It only has a render method, because this is a static version of app
  // To make UI interactive, we need to be able to trigger changes to underlying data model
  render() {
    return (
      <section className="play-view">
        <Chessboard player={this.props.player} />
        <Player player={this.props.player} />
        <MessageBox player={this.props.player} messages={this.props.messages}/>
      </section>
    );
  }
}

export default PlayView;