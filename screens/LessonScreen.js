import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LessonListScreen from './LessonListScreen'; // หน้าสารบัญ
import Chapter1Screen from './Chapter1Screen';
import Chapter2Screen from './Chapter2Screen';
import Chapter3Screen from './Chapter3Screen';
import Chapter4Screen from './Chapter4Screen';
import Chapter5Screen from './Chapter5Screen';

const Stack = createNativeStackNavigator();

export default function LessonScreen() {
  return (
    <Stack.Navigator initialRouteName="LessonList">
      <Stack.Screen 
        name="LessonList" 
        component={LessonListScreen} 
        options={{ title: 'รายการบทเรียน' }} 
      />
      <Stack.Screen 
        name="Chapter1" 
        component={Chapter1Screen} 
        options={{ title: 'บทที่ 1' }} 
      />
      <Stack.Screen 
        name="Chapter2" 
        component={Chapter2Screen} 
        options={{ title: 'บทที่ 2' }} 
      />
       <Stack.Screen 
        name="Chapter3" 
        component={Chapter3Screen} 
        options={{ title: 'บทที่ 3' }} 
      />
      <Stack.Screen 
        name="Chapter4" 
        component={Chapter4Screen} 
        options={{ title: 'บทที่ 4' }} 
      />
      <Stack.Screen 
        name="Chapter5" 
        component={Chapter5Screen} 
        options={{ title: 'บทที่ 5' }} 
      />
    </Stack.Navigator>
  );
}