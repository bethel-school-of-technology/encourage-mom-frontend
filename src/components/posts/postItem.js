// import React, { Fragment } from 'react';
// import PropTypes, { object } from 'prop-types';
// import { Link } from 'react-router-dom';
// import {connect} from 'react-redux';
// import Moment from 'react-moment'

// const PostItem = () => ({
//     auth,
//     post: {_id, title, text, username, date},
//     showActions
// }) => (
//     <div>
//     <div>
//         {/* <Link to={`/profile/${user}`}> */}
//             <h4>{username}</h4>
//         {/* </Link> */}
//     </div>
//     <div>
//         <h3>{title}</h3>
//         <p>{text}</p>
//         <p>Posted on <Moment format='MM/DD/YYY'>{date}</Moment></p>
//     </div>
//     </div>
// )

// PostItem.defaultProps = {
//     showActions: true
// }

// PostItem.propTypes = {
//     post: PropTypes.object.isRequired,
//     auth: PropTypes.object.isRequired
// }

// const mapStateToProps = state => ({
//     auth: state.auth
// });

// export default connect(mapStateToProps, {})(PostItem)






// {!auth.loading && user === auth.user._id && (
//     <button
//       onClick={() => deletePost(_id)}
//       type='button'
//       className='btn btn-danger'
//     >
//       <i className='fas fa-times' />
//     </button>
//   )}