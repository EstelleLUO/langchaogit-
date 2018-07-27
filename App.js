/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, TextInput,Dimensions} from 'react-native';
import LoginButton from './LoginButton'
import WeiboButton from './WeiboButton'
import TwitterButton from './TwitterButton'
import EditView from './LoginInput'
import ImageButton from './BackButton'
import PasswordInput from './PasswordInput'

const {height,width} = Dimensions.get('window');
let widthOfMargin = Dimensions.get('window').width

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const onButtonPress = () => {
  Alert.alert('click');
}

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.backcontainer}>
        <ImageButton />
        <Text style={styles.loginText}>登入</Text>
      </View>
        <View style={styles.loginInterface}>
        <View style={{alginItems:'flex-start',width:widthOfMargin}}>
                  <Text style={styles.welcome}>用户名</Text>
                      <View style={{alignItems:'center',width:widthOfMargin}}>
                        <EditView  name='' onChangeText={(text) => {
                          this.userName = text;}}/>
                      </View>
                  <View style={{paddingTop:10}}>
                        <Text style={styles.welcome}>密码</Text>
                        <View style={{marginTop:0,alignItems:'center',width:widthOfMargin}}>
                          <PasswordInput name='' onChangeText={(text) => {
                            this.userName = text;}}/>
                        </View>
                  </View>
        </View>
          <View style={{marginTop:25}}>
            <LoginButton name='登入' onPressCallBack={this.onButtonPress} /> 
          </View> 
            <View style={{marginTop:25}}>
              <Text style={styles.login}>或使用以下账号登入</Text>
              <WeiboButton name='微博' onPressCallBack={this.onButtonPress} /> 
              <TwitterButton name='Twitter' onPressCallBack={this.onButtonPress} /> 
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    alignItems:'flex-start',
  },
  backcontainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  loginText: {
    color: 'grey',
    fontSize:50,
    fontWeight:'bold',
  },
  loginInterface: {
    marginTop:10,
    width: widthOfMargin,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    color: 'grey',
    paddingLeft:20,
  },
  login: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight:'bold',
  },
});
