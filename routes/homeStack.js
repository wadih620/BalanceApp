import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import LoginScreen from "../views/loginScreen";
import SignupScreen from "../views/signupScreen";
import HomeScreen from "../views/homeScreen";
import TransactionsScreen from "../views/transactionsScreen";
import HistoryScreen from "../views/historyScreen";
import MoreScreen from "../views/moreScreen";

const screens = {
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: "My Balance App",
      headerTitleStyle: {
        fontSize: 24,
      },
      headerStyle: {
        backgroundColor: "#77F77F",
        height: 95,
      },
    },
  },
  Signup: {
    screen: SignupScreen,
    navigationOptions: {
      headerLeft: () => null,
      title: "Sign Up",
      headerTintColor: "#77F77F",
      headerStyle: {
        backgroundColor: "#202024",
        elevation: 0,
        shadowOpacity: 0,
      },
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
    },
  },
  Transcation: {
    screen: TransactionsScreen,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
      animationEnabled: false,
    },
  },
  History: {
    screen: HistoryScreen,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
      animationEnabled: false,
    },
  },
  More: {
    screen: MoreScreen,
    navigationOptions: {
      headerShown: false,
      gestureEnabled: false,
      animationEnabled: false,
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
