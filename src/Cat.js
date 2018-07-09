import React from 'react';

const Cat = (props) => {
  const { hero } = props;
  return (
    <div>
      <p>name: {hero.name}</p>
    </div>
  );
};

export default Cat;