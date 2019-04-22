import React, { Component } from 'react';
import { FlatList, View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { newsApiFetch } from '../actions/newsActions';
import NewsListItem from './NewsListItem';

class DashboardScreen extends Component {

    componentWillMount = () => {
        this.props.newsApiFetch({ pageNo: 1, count: 30 });
    };

    componentDidUpdate = (nextProps, nextState) => {
        //console.log('componentDidUpdate');
        //console.log(this.props.newsArticles);
    };

    callApi() {
        this.props.newsApiFetch({ pageNo: this.props.pageNo, count: 30 });
    }

    onPress = (item) => {
        this.props.navigation.navigate('NewsDetails', { item });
    };

    _keyExtractor = (item, index) => index.toString();

    render() {
        if (this.props.newsArticles.length === 0) {
            return (
                //View to show when list is empty
                <View style={styles.emptyListStyle}>
                    <ActivityIndicator size="large" color="gray" />
                    <Text style={{ textAlign: 'center' }}>Loading News...</Text>
                </View>
            );
        }

        return (
            <View>
                <FlatList
                    data={this.props.newsArticles}
                    onEndReached={() => { this.callApi() }}
                    keyExtractor={this._keyExtractor}
                    onEndReachedThreshold={0.4}
                    renderItem={({ item }) => (
                        <NewsListItem
                            item={item}
                            onPressItem={this.onPress}
                        />

                    )}
                />
            </View>
        );
    }
}

const styles = {
    emptyListStyle: {
        justifyContent: 'center',
        flex: 1
    },
    cardStyle: {
        marginLeft: 5,
        marginRight: 5
    }
};

const mapStateToProps = state => {
    return {
        newsArticles: state.news.articles,
        pageNo: state.news.pageNo
    };
};

export default connect(mapStateToProps, {
    newsApiFetch,
})(DashboardScreen)

