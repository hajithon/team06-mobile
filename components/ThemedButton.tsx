import { Text, type TextProps, StyleSheet, Pressable, PressableProps, StyleProp, View, ViewStyle, TextStyle } from 'react-native';
import { black, darkGery, lightGery, mainStrongThemeColor, mainThemeColor, veryDarkGery, veryLightGery, white } from '@/assets/styles/RawColors';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

export type ThemedTextProps = PressableProps & {
    type?: 'default' | 'greyed' | "onboard";
    text: string;
    textStyle?: TextStyle;
    containerStyle?: ViewStyle;
};

export function ThemedButton({
    containerStyle,
    text,
    textStyle,
    type = 'default',
    ...rest
}: ThemedTextProps) {
    let color = black;
    let backgroundColor = mainThemeColor;

    switch(type) {
        case "greyed":
            color = veryDarkGery;
            backgroundColor = veryLightGery;
            break;
        case "onboard":
            color = black;
            backgroundColor = mainStrongThemeColor
    }

    const size = useSharedValue(1);
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: size.value }],
    }));

    return (
        <Pressable
        style={[
            styles.defaultContainer,
            containerStyle,
        ]}
        onPressIn={() => {
            size.value = withSpring(0.9, { duration: 75 });
        }}
        onPressOut={() => {
            size.value = withSpring(1, { duration: 75 });
        }}
        {...rest}>
            <Animated.View style={[
                    styles.defaultAnimated,
                    { backgroundColor },
                    animatedStyle
                ]}>
                <Text style={[
                    styles.default,
                    textStyle,
                    { color }
                ]}>{text}</Text>
            </Animated.View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    default: {
        fontSize: 16,
        height: 'auto',
        textAlign: 'center',
        fontWeight: 'bold',
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
        justifyContent: 'center'
    }
});
