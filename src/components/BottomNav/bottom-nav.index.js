import React from 'react';
import "./style.css"

import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/Icon";
// import "@ui5/webcomponents/dist/icons";

import IconButton from '@material-ui/core/IconButton';


// For test
// import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';


// Icons
import ListIcon from "@material-ui/icons/List";
import ProfileIcon from "@material-ui/icons/AccountCircle";


class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        const ColorButton = withStyles(theme => ({
            root: {
                color: theme.palette.getContrastText(purple[500]),
                backgroundColor: purple[500],
                '&:hover': {
                    backgroundColor: purple[700],
                },
            },
        }))(Button);

        return (
            <div className="bar row" style={{ width: "-webkit-fill-available" }}>
                <div className="col-6" style={{ textAlign: "center" }}>
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <ListIcon style={{ fontSize: 40 }} />
                    </IconButton>
                </div>
                {/* <IconButton color="primary" aria-label="add to shopping cart">
                    <PhotoCamera />
                </IconButton> */}
                <div className="col-6" style={{ textAlign: "center" }}>
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <ProfileIcon style={{ fontSize: 40, color: 'grey', opacity: 20 }} />
                    </IconButton>
                </div>


            </div >);
    }
}
export default Bar;
