import React from 'react';
import { PagesEnum } from '../model/PagesEnum.ts';
import MainPage from './Main/main.index';
import ProfilePage from './Profile/profile.index';

class PagesManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: PagesEnum.MAIN_PAGE
        }
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(page) {
        this.setState({
            page: page
        })
    }

    render() {
        if (this.state.page === PagesEnum.MAIN_PAGE) {
            return (<MainPage onPageChange={this.handlePageChange} page={this.state.page} />);
        } else if (this.state.page === PagesEnum.PROFILE_PAGE) {
            return (<ProfilePage onPageChange={this.handlePageChange} page={this.state.page} />);
        }
    }

}

export default PagesManager;
