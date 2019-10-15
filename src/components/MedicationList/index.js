import React from 'react';
import ReactDOM from 'react-dom';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import ArrowIcon from "@material-ui/icons/ArrowForwardIos";

import InfoPill from "../InfoPill/index";


class MedicationList extends React.Component {

    listOfItems;

    constructor(props) {
        super(props);
        this.state = {}
        this.listOfItems = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6", "Item7", "Item7", "Item7", "Item7", "Item7", "Item7", "Item7", "Item7", "Item7", "Item7", "Item7", "Item7"];
    }

    test = (e) => {
        debugger;
        ReactDOM.render(<InfoPill />, document.getElementById('root'));

    }
    render() {
        return (

            <div style={{
                height: "30rem", overflow: "scroll", paddingBottom: "7rem"
            }}>
                <List>
                    {this.listOfItems.map((element) =>
                        (<ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={element} />
                            <ListItemIcon>
                                <ArrowIcon />
                            </ListItemIcon>

                        </ListItem>)
                    )}
                </List>
            </div>


        );
    }
}

export default MedicationList;