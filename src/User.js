import React from 'react';

const User = (props) => {
  return (
    <tr>
      <td className='text-center'>{props.position + 1}</td>
      <td className='text-left'>
        <span><img src={props.profileImage} alt='imgNotFound' width='50' height='50'/></span>
        <span> {props.username}</span>
      </td>
      <td className='text-center'>{props.recentScore}</td>
      <td className='text-center'>{props.allTimeScore}</td>
    </tr>
  );
};

User.propTypes = {
  position: React.PropTypes.number.isRequired,
  username: React.PropTypes.string.isRequired,
  profileImage: React.PropTypes.string.isRequired,
  recentScore: React.PropTypes.number.isRequired,
  allTimeScore: React.PropTypes.number.isRequired
}

export default User;
