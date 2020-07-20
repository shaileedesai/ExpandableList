import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from "../pages/Home";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;
