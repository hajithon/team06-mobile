import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { mainThemeColor } from '@/assets/styles/RawColors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: mainThemeColor,
        headerShown: false,
        tabBarStyle: { position: 'absolute', borderRadius: 8, bottom: 8, left: 8, right: 8 }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '메인 메뉴',
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
