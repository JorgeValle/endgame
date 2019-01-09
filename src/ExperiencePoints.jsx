import React from 'react';

// Components should represent one piece of data model
class ExperiencePoints extends React.Component {
  render() {

    const xp = this.props.character.xp;

    return (
      <div className="experience-points">
        <span>XP</span>
        <meter value={xp} min="0" max="10" low="2" high="8" optimum="10"></meter>
      </div>
    );
  }
}

export default ExperiencePoints;