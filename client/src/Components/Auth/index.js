import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useRef, useState, useCallback, useEffect } from 'react'
import tw from 'twrnc';
import { BlurView } from 'expo-blur'
import RBSheet from 'react-native-raw-bottom-sheet'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import * as ACTIONS from '../../redux/actions/auth'

const Auth = () => {
    const refRBSheet = useRef()
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const message = useSelector((state) => state.auth.message)

    // login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // register
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [crEmail, setCrEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const [crPassword, setCrPassword] = useState('');
    const [crCfPassword, setCrCfPassword] = useState('')

    const [signInWarn, setSignInWarn] = useState('');
    const [signUpWarn, setSignUpWarn] = useState('')



    const handleSignIn = () => {
        if (!email) {
            setSignInWarn(`Please enter your email`)
        }
        else if (!password) {
            setSignInWarn(`Please enter your password`)
        } else {
            dispatch(ACTIONS.loginStart({ email, password }))
        }
    }

    const handleSignUp = () => {
        if (!firstName || !lastName) {
            setSignInWarn(`Please enter your name`)
        }
        else if (!crEmail) {
            setSignInWarn(`Please enter your email`)
        }
        else if (!phoneNumber) {
            setSignInWarn(`Please enter your phone number`)
        }
        else if (!crPassword || !crCfPassword) {
            setSignInWarn(`Please enter your password`)
        }
        else if (crPassword != crCfPassword) {
            setSignInWarn(`Confirm password doesn't match`)
        }
        else {
            setSignInWarn(``)
            dispatch(ACTIONS.registerStart({ firstName, lastName, crEmail, phoneNumber, crPassword }))
        }
    }

    return (
        <ImageBackground
            source={require('../../images/login-bg.jpg')}
            style={tw`w-full h-full`}
        >
            <SafeAreaView style={tw`py-2 flex flex-col  h-full`}>
                <View>
                    <View style={tw`w-full px-10 my-15`}>
                        <Text style={tw`text-5xl font-bold text-white`}>
                            Hello!
                        </Text>
                        <Text style={tw`text-lg tracking-wide text-white`}>
                            Sign in to your account.
                        </Text>
                    </View>
                </View>
                <View style={tw`w-full h-full px-8`}>
                    <BlurView
                        intensity={30}
                        style={tw`w-full rounded-lg overflow-hidden p-3`}
                    >
                        <TextInput
                            style={tw`w-full p-2 rounded-lg bg-[#F3F0F6] items-center`}
                            placeholder='Email...'
                            onChangeText={val => setEmail(val)}
                        />

                        <TextInput
                            style={tw`w-full p-2 rounded-lg bg-[#F3F0F6] items-center my-3`}
                            placeholder='Password...'
                            secureTextEntry={true}
                            onChangeText={val => setPassword(val)}
                        />
                        <TouchableOpacity>
                            <Text style={tw`text-pink-500`}>Forgot your password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={tw`w-full bg-pink-500 p-3 items-center rounded-lg mt-3`}
                            onPress={handleSignIn}
                        >
                            <Text style={tw`text-white font-medium`}>
                                Login
                            </Text>
                        </TouchableOpacity>
                        {
                            signInWarn ? (
                                <View style={tw`justify-center mt-2`}>
                                    <Text style={tw`text-pink-500`}>{signInWarn}</Text>
                                </View>
                            ) : <></>
                        }
                    </BlurView>

                    <Text style={tw`text-center text-black`}>
                        or
                    </Text>
                    <BlurView
                        intensity={30}
                        style={tw`w-full rounded-lg overflow-hidden px-3 py-3 mt-1`}
                    >
                        <TouchableOpacity style={tw`flex flex-row items-center w-full px-5`}>
                            <Image
                                style={tw`w-6 h-6`}
                                source={require('../../images/google_icon.png')}
                            />
                            <Text style={tw`flex-1 text-center font-medium`}>Continue with Google</Text>
                        </TouchableOpacity>
                    </BlurView>
                    <View style={tw`flex flex-row items-center mt-3 ml-3`}>
                        <Text style={tw`text-black`}>Don't have any account?</Text>
                        <TouchableOpacity
                            style={tw` px-2`}
                            onPress={() => refRBSheet.current.open()}
                        >
                            <Text style={tw`text-pink-500 font-medium`}> Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <RBSheet
                    ref={refRBSheet}
                    height={420}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    closeOnPressBack={true}
                    openDuration={300}
                    customStyles={{
                        container: tw`flex rounded-t-xl px-5`
                    }}
                >
                    <Text style={tw`text-2xl text-pink-500 font-medium mb-5`}>Create Account</Text>
                    <View style={tw`flex flex-row`}>
                        <TextInput
                            style={tw`flex-1 p-2 rounded-lg bg-[#F3F0F6] `}
                            placeholder='First name...'
                            onChangeText={val => setFirstName(val)}
                        />
                        <TextInput
                            style={tw`flex-1 p-2 rounded-lg bg-[#F3F0F6] ml-2`}
                            placeholder='Last name...'
                            onChangeText={val => setLastName(val)}
                        />
                    </View >
                    <TextInput
                        style={tw`w-full p-2 rounded-lg bg-[#F3F0F6] items-center my-2`}
                        placeholder='Phone number...'
                        onChangeText={val => setPhoneNumber(val)}
                    />
                    <TextInput
                        style={tw`w-full p-2 rounded-lg bg-[#F3F0F6] items-center`}
                        placeholder='Email...'
                        onChangeText={val => setCrEmail(val)}
                    />
                    <TextInput
                        style={tw`w-full p-2 rounded-lg bg-[#F3F0F6] items-center my-2`}
                        placeholder='Password...'
                        secureTextEntry={true}
                        onChangeText={val => setCrPassword(val)}
                    />
                    <TextInput
                        style={tw`w-full p-2 rounded-lg bg-[#F3F0F6] items-center`}
                        placeholder='Confirm password...'
                        secureTextEntry={true}
                        onChangeText={val => setCrCfPassword(val)}
                    />
                    <TouchableOpacity
                        style={tw`w-full bg-pink-500 p-3 items-center rounded-lg mt-5`}
                        onPress={handleSignUp}
                    >
                        <Text style={tw`text-white font-medium`}>
                            Register
                        </Text>
                    </TouchableOpacity>
                    {
                        signInWarn ? (
                            <Text style={tw`mt-2 text-pink-500`}>{signInWarn}</Text>
                        ) : <></>
                    }
                    {
                        message ? (
                            <Text style={tw`mt-2 text-pink-500`}>{message}</Text>
                        ) : <></>
                    }
                </RBSheet>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default Auth