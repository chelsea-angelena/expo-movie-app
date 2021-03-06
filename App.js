import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { AuthContext } from './src/Context/AuthContext';
import { useAuth } from './src/screens/Auth/useAuth';
import { ThemeProvider } from 'react-native-elements';
import { useColorScheme } from 'react-native-appearance';
import MainNav from './src/navigation/MainNav';


function App() {
	const [user, loading] = useAuth();

	let colorScheme = useColorScheme();

	if (loading) {
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
			<Text>Please wait while we load our database...</Text>
		</View>;
	}
	return (
		<>
			<AuthContext.Provider value={user}>
				<ThemeProvider useDark={colorScheme === 'dark'}>
					<MainNav />
				</ThemeProvider>
			</AuthContext.Provider>
		</>
	);
}
export default App;
