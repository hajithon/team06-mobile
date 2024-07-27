import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { grey, lightBlack, mainThemeColor, veryDarkGery } from '@/assets/styles/RawColors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: mainThemeColor,
        headerShown: false,
        tabBarStyle: { 
          position: 'absolute', 
          height: '10%', 
          backgroundColor: veryDarkGery,
          paddingBottom: 10,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25
        }
      }}>
      <Tabs.Screen
        name="maps"
        options={{
          title: '보관함 찾기',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              name={'location'}
              focused={focused} 
              color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'QR',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              name={'qr'}
              focused={focused} 
              color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="my"
        options={{
          title: '마이페이지',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon 
              name={'my'}
              focused={focused} 
              color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
