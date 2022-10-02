import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const searchApi = async searchTerm => {
		try {
			const response = await yelp.get('/search', {
				// The URL request params we need to supply the Yelp API
				params: {
					limit: 50,
					term: searchTerm,
					location: 'san jose',
				},
			});
			setResults(response.data.businesses);
		} catch (error) {
			setErrorMessage('Something went wrong 😩');
			console.log(error);
		}
	};

	useEffect(() => {
		setErrorMessage('');
		searchApi('pasta');
		console.log('Getting data 🤓');
	}, []);

	return [searchApi, results, errorMessage];
};
