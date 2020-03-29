import React from 'react';
import PropTypes from 'prop-types';
function Home({ auth }){
	return <h1 className='jumbotron text-center'>Welcome to the home page</h1>;
}
Home.propTypes = {
	auth : PropTypes.string.isRequired
};
export default Home;
