import { Text, type TextProps, StyleSheet, Pressable, PressableProps, StyleProp, View, ViewStyle, TextStyle } from 'react-native';
import { darkGery, lightGery, mainThemeColor, white } from '@/assets/styles/RawColors';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

export type ThemedTextProps = PressableProps & {
    type?: 'default' | 'greyed';
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
    const color = type === 'default' ? white : darkGery;
    const backgroundColor = type === 'default' ? mainThemeColor : lightGery;

    const size = useSharedValue(1);
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: size.value }],
    }));

    return (
        <Pressable
        style={[
            containerStyle,
            styles.defaultContainer,
        ]}
        onPressIn={() => {
            size.value = withTiming(0.9, { duration: 50 });
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
                    textStyle,
                    { color },
                    styles.default
                ]}>{text}</Text>
            </Animated.View>
        </Pressable>
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
