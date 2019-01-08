import React from 'react';

// Components should represent one piece of data model
class CharacterName extends React.Component {
  render() {

    console.log(this.props);

    const character = this.props.character;

    return (
      <h1>{character.name}</h1>
    );
  }
}

export default CharacterName;