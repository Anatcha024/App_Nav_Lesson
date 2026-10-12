import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import หน้าต่าง ๆ
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import LessonScreen from './screens/LessonScreen';
import SettingsScreen from './screens/SettingsScreen';
import styles, { COLORS } from './styles/ProjectStyles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// รวม Bottom Tab Menu
function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerTitleAlign: 'center',
        tabBarActiveTintColor: COLORS?.primary || '#FF1493',
        tabBarInactiveTintColor: COLORS?.textSecondary || 'gray',
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'บทเรียน') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'การตั้งค่า') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'หน้าแรก' }} />
      <Tab.Screen 
        name="บทเรียน" 
        component={LessonScreen} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen name="การตั้งค่า" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// รวม Stack สำหรับต้อนรับก่อนเข้าแอป
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="MainTab" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}