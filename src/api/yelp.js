import axios from 'axios';

// Configure our axios use
export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer 7w9AAlncmOqmJisXRgm3araMzXhj6Z2DF8WVdbTL7ffH_XCmAy2ZIdJUF9L8F7lxy1MhIpkXUJPXjTp8rVWFtNI0h5Q7iVcOa9yr1GuN09MxAqbBZtzchlmPnL8yY3Yx',
	},
});
