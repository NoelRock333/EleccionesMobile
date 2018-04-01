import { StackNavigator } from 'react-navigation';
import Info from '../components/Info';

const StackNav = StackNavigator({
  Info: { screen: Info, headerMode: 'none' },
});

export default StackNav;
