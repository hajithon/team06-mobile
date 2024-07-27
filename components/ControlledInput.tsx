import React, { useRef } from "react";
import { Control, Controller, UseFormRegisterReturn } from "react-hook-form";
import { Pressable, StyleProp, TextInput, TextStyle, View } from "react-native";

import Mail from '@/assets/svg/mail.svg';
import Key from '@/assets/svg/key.svg';
import Lock from '@/assets/svg/lock.svg';
import Person from '@/assets/svg/profile.svg';
import Calander from '@/assets/svg/calender.svg';
import Edit from '@/assets/svg/edit.svg';

import { grey } from "@/assets/styles/RawColors";
import styles from "@/assets/styles/FormStyles";

type InputPresets = 'code' | 'default' | 'password' | 'birth';
type Icons = 'mail' | 'key' | 'lock' | 'person' | 'calander';

type Preset = {
    [key: string]: {
        maxLength?: number;
        keyboardType?: string;
        autoComplete?: string;
        secureTextEntry?: boolean;
    }
};

const ControlledInput = ({ name, style, placeholder, errorExists, control, register, preset, icon, editable, onChangeText } : {
    name: string,
    style?: StyleProp<TextStyle> | StyleProp<TextStyle>[],
    placeholder?: string,
    errorExists?: boolean
    control: Control<any>,
    register?: UseFormRegisterReturn<any>,
    preset?: InputPresets,
    icon?: Icons,
    editable?: boolean,
    onChangeText?: (value: string) => void
}) => {
    const presets: Preset = {
        'default': {},
        'code': { 
            maxLength: 6,
            keyboardType: 'numeric',
            secureTextEntry: true,
        }, 
        'password': {
            autoComplete: 'off',
            secureTextEntry: true,
        },
        'birth': {
            autoComplete: 'off',
            keyboardType: 'numeric',
        }
    };
    const usePreset = preset ? preset : 'default';
    const textInputRef = useRef<TextInput | null>();

    return (<Controller
        control={control}
        name={name}
        render={({field: { onChange, value }}) => (
            <View style={[style, errorExists && styles.error, { 
                flexDirection: 'row', 
                alignItems: 'center'
            }]}>
                {icon && <View style={{marginRight: 8}}>
                    {icon === 'mail' && <Mail width={20} height={20}/>}
                    {icon === 'key' && <Key width={20} height={20}/>}
                    {icon === 'lock' && <Lock width={20} height={20}/>}
                    {icon === 'person' && <Person width={20} height={20}/>}
                    {icon === 'calander' && <Calander width={20} height={20}/>}
                </View>}
                <TextInput
                    style={{flex : 1}}
                    onChangeText={value => {
                        if(onChangeText)
                            onChangeText(value);
                        onChange(value);
                    }}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={errorExists ? 'red' : grey}
                    maxLength={presets[usePreset].maxLength}
                    keyboardType={presets[usePreset].keyboardType as any}
                    autoComplete={presets[usePreset].autoComplete as any}
                    secureTextEntry={presets[usePreset].secureTextEntry}
                    {...register}
                    ref={(e) => {
                        if(register)
                            register.ref(e);
                        textInputRef.current = e;
                    }}
                />
                {editable && <Pressable onPress={() => {
                    textInputRef.current?.focus();
                }}>
                        <Edit></Edit>
                    </Pressable>}
            </View>

        )}
    />);
}

export default ControlledInput;
