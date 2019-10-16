import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import HealthIcon from "@material-ui/icons/AddToQueue";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className="topBar row" style={{ width: "-webkit-fill-available", position: "fixed", zIndex: "1" }}>
            <div className="col-10" style={{ textAlign: "left", paddingLeft: "2.5rem" }}>
                <b><label style={{ paddingTop: "1.5rem" }}>MEDICATION SCHEDULE</label></b>
            </div>
            <div className="col-2" style={{ textAlign: "center" }}>
                {/* <Avatar style={{ marginTop: "0.7rem" }} alt="Remy Sharp" src="https://avatars.github.cerner.com/u/8123?s=400&u=46ff427bba820ec8e369b115744c43e9bff2563b" /> */}
                <HealthIcon fontSize="large" style={{ margin: "40% 70% 0% 0%" }} />
            </div>
        </div>
    );
}
