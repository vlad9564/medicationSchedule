import React from 'react';
import Header from "../../components/Header/header.index";
import BottomNav from '../../components/BottomNav/bottom-nav.index';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Header></Header>
                <BottomNav onPageChange={this.props.onPageChange} page={this.props.page}></BottomNav>
            </div>
        );
    }
}

export default Profile;
