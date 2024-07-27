import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { lightBlack, mainThemeColor, veryDarkGery } from '@/assets/styles/RawColors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: mainThemeColor,
        headerShown: false,
        tabBarStyle: { 
          position: 'absolute', 
          height: '7.5%', 
          backgroundColor: veryDarkGery,
          paddingBottom: 10
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '보관함 찾기',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              name={focused ? 'home' : 'home-outline'} 
              color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="maps"
        options={{
          title: '근처 편의점 찾기',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              name={focused ? 'code-slash' : 'code-slash-outline'} 
              color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
