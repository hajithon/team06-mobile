// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';
import { SvgProps } from 'react-native-svg';
import Location from '@/assets/svg/location.svg';
import QR from '@/assets/svg/qr.svg';
import QRActive from '@/assets/svg/qractive.svg';
import My from '@/assets/svg/my.svg';
import { grey, mainStrongThemeColor } from '@/assets/styles/RawColors';
import { View } from 'react-native';

type Icons = "location" | "qr" | "my";

export function TabBarIcon({ name, focused, ...rest }:
   { name: Icons, focused: boolean } & SvgProps) {
  let icon = <></>
  
  switch(name){
    case "location":
      icon = <Location {...rest} stroke={focused ? mainStrongThemeColor : undefined}></Location>
      break;
    case "qr":
      icon = <View style={{ width: 20, height: 20, position: 'relative' }}>
      {!focused && <QR {...rest} stroke={focused ? mainStrongThemeColor : undefined} style={
        {
          position:'absolute',
          bottom: -20,
          left: -26,
        }
      }></QR>}
      {focused && <QRActive {...rest} stroke={focused ? mainStrongThemeColor : undefined} style={
        {
          position:'absolute',
          bottom: -20,
          left: -26,
        }
      }></QRActive>}
      </View>
      break;
    case "my":
      icon = <My {...rest} stroke={focused ? mainStrongThemeColor : undefined}></My>
      break;
  }

  return icon;
}
