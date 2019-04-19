import React, { Component } from 'react';
import { FlatList } from 'react-native';
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

    _keyExtractor = (item, index) => index.toString();

    render() {
        return (
            <FlatList
                data={this.props.newsArticles}
                onEndReached={() => { this.callApi() }}
                keyExtractor={this._keyExtractor}
                onEndReachedThreshold={0.4}
                renderItem={({ item }) => (
                    <NewsListItem item={item} />
                )}
            />
        );
    }
}

const styles = {
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

