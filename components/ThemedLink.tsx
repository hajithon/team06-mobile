import { Text, type TextProps, StyleSheet, Pressable, PressableProps, StyleProp, View, ViewStyle, TextStyle } from 'react-native';
import { black, darkGery, lightGery, mainStrongThemeColor, mainThemeColor, veryDarkGery, veryLightGery, white } from '@/assets/styles/RawColors';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { Link } from 'expo-router';
import { LinkProps } from 'expo-router/build/link/Link';

export type ThemedLinkProps = LinkProps & {
    type?: 'default' | 'greyed' | "onboard";
    textStyle?: TextStyle;
    containerStyle?: ViewStyle;
};

export function ThemedLink({
    containerStyle,
    textStyle,
    type = 'default',
    children,
    ...rest
}: ThemedLinkProps) {
    let color = black;
    let backgroundColor = black;

    switch(type) {
        case "greyed":
            color = veryDarkGery;
            break;
        case "onboard":
            color = mainStrongThemeColor;
    }

    const size = useSharedValue(1);
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: size.value }],
    }));

    return (
        <Link
        style={[
            containerStyle,
            { color },
            textStyle,
            styles.default,
        ]}
        {...rest}>
            {children}
        </Link>
    );
}

const styles = StyleSheet.create({
    default: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        flex: 1,
        fontWeight: 'bold'
    },
    defaultContainer: {
        display: 'flex',
        height: 40
    },
    defaultAnimated: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
        padding: 8,
    }
});
