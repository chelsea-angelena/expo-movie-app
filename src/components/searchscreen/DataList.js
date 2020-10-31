import React from 'react';
import {
	Dimensions,
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
	FlatList,
} from 'react-native';
import ListItem from './ListItem';
import { useNavigation } from '@react-navigation/native';
import Screen from '../../screens/Auth/Screen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DataList = ({ movies, loading, error }) => {
	const navigation = useNavigation();
	
	if (loading || !movies) {
		return <Text>Loading...</Text>;
	}
	if (error) {
		return <Text> Error...</Text>;
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