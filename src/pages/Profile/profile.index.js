import React from 'react';
import Header from "../../components/Header/header.index";
import BottomNav from '../../components/BottomNav/bottom-nav.index';
import Avatar from 'react-avatar';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Header page={this.props.page}></Header>
                <div style={{ marginTop: "4rem", paddingTop: "1rem", paddingLeft: "33%" }}>
                    {/* <Avatar githubHandle="sitebase" size={150} round="80px" /> */}
                    <Avatar googleId="118096717852922241760" size="150" round={true} />
                </div>
                <BottomNav onPageChange={this.props.onPageChange} page={this.props.page}></BottomNav>
            </div>
        );
    }
}

export default Profile;
