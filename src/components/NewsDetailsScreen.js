import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem,  Text, Left, Body } from 'native-base';
import ImageLoad from 'react-native-image-placeholder';

class NewsDetailsScreen extends Component {
  render() {
    console.log(this.props.navigation.state.params.item);
    const { titleStyle, descriptionStyle } = styles;
    const {title,publishedAt,author,content,urlToImage} = this.props.navigation.state.params.item;
    return (
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text style={titleStyle}>{title}</Text>
                  <Text note>{publishedAt}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
              <ImageLoad
                            loadingStyle={{ size: 'large', color: 'gray' }}
                            source={{ uri: urlToImage }}
                            style={{width: '100%', height: 200}}/>

                <Text  style={descriptionStyle} >
                  {content}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                  <Text note>{author}</Text>
              </Left>
            </CardItem>
          </Card>
    );
  }
}
const styles = {
  titleStyle: {
    fontSize: 18,
  },
  descriptionStyle: {
    fontSize: 15,
    marginTop:5,
    color : '#333333'
  },
  listCenterView: {
    borderColor: 'black',
    borderWidth: 0.5,
    alignItems: 'center',
    flexDirection: 'row',
    width: 60,
    aspectRatio: 1
  },
};

export default NewsDetailsScreen;