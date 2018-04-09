import { StackNavigator } from 'react-navigation';
import Municipalities from '../components/Municipalities';
import ElectionTypes from '../components/ElectionTypes';

const StackNav = StackNavigator({
  Municipalities: { screen: Municipalities, headerMode: 'none' },
  ElectionTypes: { screen: ElectionTypes }
});

export default StackNav;
