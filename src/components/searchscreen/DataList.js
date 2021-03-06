import React from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
	FlatList,
	ActivityIndicator,
} from 'react-native';
import ListItem from './ListItem';
import { useNavigation } from '@react-navigation/native';
import Screen from '../../screens/Auth/Screen';

const DataList = ({ movies, loading, error }) => {
	const navigation = useNavigation();

	if (loading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					flexDirection: 'row',
					justifyContent: 'space-around',
					padding: 10,
					backgroundColor: 'black',
				}}
			>
				<ActivityIndicator color='white' size='large' />
			</View>
		);
	}

	return (
		<Screen>
			<View style={styles.listView}>
				<FlatList
					style={styles.list}
					showsVerticalScrollIndicator={false}
					data={movies}
					keyExtractor={(movies) => movies.imdbID}
					renderItem={({ item }) => {
						return (
							<ListItem
								navigation={navigation}
								item={item}
								id={item.imdbID}
								title={item.Title}
								year={item.Year}
								imageUri={item.Poster}
								movies={movies}
							/>
						);
					}}
				/>
			</View>
		</Screen>
	);
};

export default DataList;
const styles = StyleSheet.create({
	listView: {
		height: '100%',
	},
	list: {
		paddingBottom: 64,
	},
});
