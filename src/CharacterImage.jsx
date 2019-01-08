import React from 'react';

// Components should represent one piece of data model
class CharacterImage extends React.Component {
  render() {

    console.log(this.props);

    const character = this.props.character;

    return (
      <img src={character.image} alt={character.description} title={character.description} />
    );
  }
}

export default CharacterImage;