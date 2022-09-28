import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
	const [term, setTerm] = useState('');

	return (
		<View style={styles.screen}>
			<SearchBar
				searchTerm={term}
				onTermChange={newTerm => setTerm(newTerm)}
				onSearchSubmitted={() => console.log('search submitted!')}
			/>
			<Text>{term}</Text>
		</View>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({});
