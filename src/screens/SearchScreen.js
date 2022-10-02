import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [searchApi, results, errorMessage] = useResults();

	const filterResultsByPrice = price => {
		return results.filter(result => result.price === price);
	};

	return (
		<>
			<SearchBar
				searchTerm={term}
				onTermChange={setTerm}
				onSearchSubmitted={() => searchApi(term)}
			/>
			{errorMessage && <Text>{errorMessage}</Text>}

			<ScrollView>
				<ResultsList
					results={filterResultsByPrice('$')}
					title='Cost Effective'
				/>
				<ResultsList
					results={filterResultsByPrice('$$')}
					title='Bit Pricier'
				/>
				<ResultsList
					results={filterResultsByPrice('$$$')}
					title='Big Spender'
				/>
			</ScrollView>
		</>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({
	textStyle: {
		marginLeft: 15,
		marginVertical: 5,
	},
});
