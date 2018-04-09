import { StackNavigator } from 'react-navigation';
import Municipalities from '../components/Municipalities';
import ElectionTypes from '../components/ElectionTypes';
import PresidenteR from '../components/Poll/PresidenteR';

const StackNav = StackNavigator({
  PresidenteR: { screen: PresidenteR },
  Municipalities: { screen: Municipalities, headerMode: 'none' },
  ElectionTypes: { screen: ElectionTypes },
});

export default StackNav;
