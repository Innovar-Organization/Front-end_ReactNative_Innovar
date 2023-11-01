import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HorariosList from './HorariosList';

const Stack = createNativeStackNavigator();

export default function Horarios() {
  return (
    <Stack.Navigator initialRouteName="HorariosList">
      <Stack.Screen
        name="HorariosList"
        component={HorariosList}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}