import React from 'react';
import PropTypes from 'prop-types';

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
  position: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  recentScore: PropTypes.number.isRequired,
  allTimeScore: PropTypes.number.isRequired
}

export default User;
