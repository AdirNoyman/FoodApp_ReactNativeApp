import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ResultsDetail = ({ result }) => {
	const { name, image_url, rating, review_count } = result;

	return (
		<View style={styles.container}>
			<Image style={styles.imageStyle} source={{ uri: image_url }} />
			<Text style={styles.titleStyle}>{name}</Text>
			<Text style={styles.textStyle}>
				{rating} Stars, {review_count} Reviews
			</Text>
		</View>
	);
};

export default ResultsDetail;

const styles = StyleSheet.create({
	container: {
		marginLeft: 15,
	},
	imageStyle: {
		width: 200,
		height: 120,
		borderRadius: 4,
		marginBottom: 5,
	},
	titleStyle: {
		fontWeight: 'bold',
	},
	textStyle: {
		color: 'gray',
		fontSize: 13,
	},
});
