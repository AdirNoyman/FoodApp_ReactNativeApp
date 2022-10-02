import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.titleStyle}>{title}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={results}
				keyExtractor={result => result.id}
				renderItem={({ item }) => <ResultsDetail result={item} />}
			/>
		</View>
	);
};

export default ResultsList;

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
	},
	titleStyle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 15,
		marginBottom: 5,
	},
});
