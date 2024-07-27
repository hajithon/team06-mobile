import { Text, type TextProps, StyleSheet, Pressable, PressableProps, StyleProp, View, ViewStyle, TextStyle } from 'react-native';
import { black, darkGery, lightGery, mainThemeColor, white } from '@/assets/styles/RawColors';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import Google from '../assets/svg/google.svg';

export type ThemedTextProps = PressableProps & {
    text?: string,
    type?: 'default' | 'greyed';
    textStyle?: TextStyle;
    containerStyle?: ViewStyle;
};

export function GoogleButton({
    text,
    containerStyle,
    textStyle,
    type = 'default',
    ...rest
}: ThemedTextProps) {
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
                    { backgroundColor: white },
                    animatedStyle
                ]}>
                <Google width={25} height={25} style={{ marginLeft: 25 }}></Google>
                <Text style={[ 
                    textStyle,
                    { color: black },
                    styles.default
                ]}>{text || "구글 계정으로 로그인"}</Text>
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
        fontWeight: 'bold',
        marginLeft: 16,
    },
    defaultContainer: {
        display: 'flex',
        height: 80
    },
    defaultAnimated: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
