// ========== StackScreen
// import all modules
import React, {Fragment, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';

// import all screens
import Welcome from './screens/Welcome';

const Stack = createNativeStackNavigator();

function StackScreen() {
	useEffect(() => {
		RNBootSplash.hide({fade: true});
	});

	return (
		<Fragment>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Welcome"
						component={Welcome}
						options={{headerShown: false}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Fragment>
	);
}

export default StackScreen;
