import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ searchTerm, onTermChange, onSearchSubmitted }) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name='search' style={styles.iconStyle} />
			<TextInput
				autoCapitalize='none'
				autoCorrect={false}
				placeholder='Search'
				value={searchTerm}
				onChangeText={newTerm => onTermChange(newTerm)}
				style={styles.inputStyle}
				onEndEditing={onSearchSubmitted}
			/>
		</View>
	);
};

export default SearchBar;

const styles = StyleSheet.create({
	backgroundStyle: {
		marginTop: 10,
		backgroundColor: '#d9eff7',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row',
		marginBottom: 15,
	},
	inputStyle: {
		flex: 1,
		fontSize: 18,
	},
	iconStyle: {
		fontSize: 35,
		color: 'black',
		alignSelf: 'center',
		marginHorizontal: 15,
	},
});
