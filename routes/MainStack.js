import { StackNavigator } from 'react-navigation';
import Municipalities from '../components/Municipalities';
import ElectionTypes from '../components/ElectionTypes';
import PresidenteR from '../components/Poll/PresidenteR';

const StackNav = StackNavigator({
  ElectionTypes: { screen: ElectionTypes },
  PresidenteR: { screen: PresidenteR },
  Municipalities: { screen: Municipalities, headerMode: 'none' },
});

export default StackNav;
