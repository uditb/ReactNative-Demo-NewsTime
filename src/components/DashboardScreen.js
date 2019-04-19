import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    List
} from 'native-base';
import { newsApiFetch } from '../actions/newsActions';
import NewsListItem from './NewsListItem';

class DashboardScreen extends Component {

    componentWillMount = () => {
        this.props.newsApiFetch({ pageNo: 1, count: 30 });
    };

    componentDidUpdate = (nextProps, nextState) => {
        console.log('componentDidUpdate');
        console.log(this.props.newsArticles);
    };

    callApi() {
        console.log('callApi');
        console.log(this.props.pageNo);

        this.props.newsApiFetch({ pageNo: this.props.pageNo, count: 30 });
    }

    _keyExtractor = (item, index) => index.toString();

    render() {
        return (
            <Container>
                <Content>

                    <List>
                        <FlatList
                            data={this.props.newsArticles}
                            onEndReached={() => { this.callApi() }}
                            keyExtractor={this._keyExtractor}
                            onEndReachedThreshold={0.4}
                            renderItem={({ item }) => (
                                <NewsListItem item={item} />
                            )}
                        />
                    </List>


                </Content>
            </Container>
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
    console.log('mapStateToProps');
    console.log(state.news.articles);
    return {
        newsArticles: state.news.articles,
        pageNo: state.news.pageNo
    };
};

export default connect(mapStateToProps, {
    newsApiFetch,
})(DashboardScreen)

