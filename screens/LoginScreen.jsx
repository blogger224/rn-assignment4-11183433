
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Divider from '../components/Divider';
import facebook from "../assets/facebook.png"
import google from "../assets/google.png"
import apple from "../assets/apple.png"

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.biz}> Jobizz</Text>
        <Text style={styles.welcome}>Welcome Back </Text>
        <Text style={styles.apply}>Let's log in. Apply to jobs!</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Button style={styles.button} title="Login" onPress={handleLogin} />
      </View>



      <View style={styles.divider}>
        <Divider label={"Or continue with"} />
      </View>

      <View style={styles.icons}>
        <View style={{ backgroundColor: "white", padding: 25, borderRadius: 45}}><Image style={{ height: 30, width: 30 }} source={apple} /></View>
        <View style={{ backgroundColor: "white", padding: 25, borderRadius: 55}}><Image style={{ height: 30, width: 30 }} source={google} /></View>
        <View style={{ backgroundColor: "white", padding: 20, borderRadius: 50}}><Image style={{ height: 40, width: 40 }} source={facebook} /></View>
      </View>

      <Text style={{ textAlign: "center", marginTop: 40}}>
        <Text style={{ opacity: 0.4}}>Haven't and account?</Text> <Text style={{color: "#356899", }}>Register</Text>
      </Text>
    </SafeAreaView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: "center",
    padding: 16,
  },

  biz: {
    color: "#356899",
    fontSize: 22,
    fontWeight: "bold",

  },

  welcome: {
    color: "#0D0D26",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10
  },

  form: {
    marginTop: 20,
  },

  input: {
    height: 48,
    borderColor: 'gray',
    borderWidth: 0.5,
    marginBottom: 12,
    padding: 8,
    borderRadius: 10,
    marginTop: 10
  },

  apply: {
    color: "#0D0D26",
    opacity: 0.4,
    fontSize: 17,
    paddingVertical: 5
  },

  btn: {
    height: 48,
    marginTop: 10,
    padding: 10,
    backgroundColor:"#356899"
  },

  divider: {
    opacity: 0.5,
    marginTop: 40
  },

  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  }

});