import React, { Component } from 'react';
import ImageLoad from 'react-native-image-placeholder';
import {
    Text, Left, Body, Right, Card, CardItem, Icon,
    Button
} from 'native-base';
import { TouchableOpacity } from 'react-native';

import Moment from 'moment';

class NewsListItem extends Component {
    onPress = () => {
        this.props.onPressItem(this.props.item)
    }

    render() {
        Moment.locale('en');

        return (
            <TouchableOpacity onPress={this.onPress}>
                <Card>

                    <CardItem cardBody>
                        <ImageLoad
                            loadingStyle={{ size: 'large', color: 'gray' }}
                            source={{ uri: this.props.item.urlToImage }}
                            style={{ height: 200, width: null, flex: 1 }} />
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>{this.props.item.title}</Text>
                            <Text note style={{ paddingTop: 5 }}>{this.props.item.description}</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                                <Icon active name="thumbs-up" />
                                <Text>12 Likes</Text>
                            </Button>
                        </Left>
                        <Body style={{ flex: 1.25 }}>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>4 Comments</Text>
                            </Button>
                        </Body>
                        <Right style={{ flex: 1.5 }}>
                            <Text>{Moment(this.props.item.publishedAt).format('MMM d, hh:mm a')}</Text>
                        </Right>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        );
    }
}

export default NewsListItem;
