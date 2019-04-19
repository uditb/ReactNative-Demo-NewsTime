// AuthenticationScreen.js

import React, { Component } from 'react';
import { Platform, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Card,
  Text, Label,
  Content, View,
  Form, Item,
  Input,
  Button
} from 'native-base';
import { Logo } from '../assets/images';
import { emailChanged, passwordChanged, loginUser } from '../actions/authActions';

class AuthenticationScreen extends Component {

  componentDidUpdate() {
    if (this.props.isLoggedIn) {
      this.props.navigation.navigate('Dashboard');
    }
  }


  onEmailChange(text) {
    this.props.emailChanged(text)
  };

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  };

  onSignInButtonPress() {
    const { email, password } = this.props;
    console.log(email);
    this.props.loginUser({ email, password });
  }

  renderError() {

  }

  renderButton() {
    if (this.props.loading) {
      return (
        <Button block disabled
          style={styles.loginButtonStyle}
          onPress={this.onSignInButtonPress.bind(this)}
        >
          <Text>Signing In!</Text>
          <ActivityIndicator style={{ padding: 3 }} />
        </Button>
      );
    }
    else {
      return (
        <Button block
          style={styles.loginButtonStyle}
          onPress={this.onSignInButtonPress.bind(this)}
        >
          <Text>Sign In!</Text>
        </Button>
      );
    }
  }



  render() {
    return (
      <Container>
        <Content contentContainerStyle={Platform.isPad ?
          styles.mainContainerStyleIpad :
          styles.mainContainerStyleIphone}>

          <View style={styles.parentViewLoginFormStyle}>
            <View style={styles.subViewLoginFormStyle}>

              <Card style={styles.cardStyle}>
                <Image source={Logo} style={styles.logoImageStyle} />
                <Form style={styles.formStyle}>
                  <Item floatingLabel>
                    <Label>Username</Label>
                    <Input
                      onChangeText={this.onEmailChange.bind(this)}
                      value={this.props.email}
                    />
                  </Item>
                  <Item floatingLabel>
                    <Label>Password</Label>
                    <Input
                      secureTextEntry
                      onChangeText={this.onPasswordChange.bind(this)}
                      value={this.props.password}
                    />
                  </Item>
                </Form>
                {this.renderButton()}
              </Card>

            </View>
          </View>

          <Button
            transparent
            style={styles.signUpButtonStyle}
          >
            <Text>Trouble Logging In!</Text>
          </Button>

        </Content>
      </Container>
    )
  };

}

const styles = {
  mainContainerStyleIphone: {
    flex: 1,
    alignItems: 'center'
  },
  mainContainerStyleIpad: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  parentViewLoginFormStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  subViewLoginFormStyle: {
    flex: 1,
    maxWidth: 600,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  cardStyle: {
    paddingBottom: 10
  },
  logoImageStyle: {
    height: 50,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20
  },
  formStyle: {
    paddingRight: 15
  },
  loginButtonStyle: {
    margin: 5,
    marginTop: 15
  },
  signUpButtonStyle: {
    alignSelf: 'center',
    paddingBottom: 20
  }
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(AuthenticationScreen)