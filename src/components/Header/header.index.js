import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import { PagesEnum } from '../../model/PagesEnum.ts';

import CheckIcon from '@material-ui/icons/Check';
import HealthIcon from "@material-ui/icons/AddToQueue";
import ClearIcon from '@material-ui/icons/Clear';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.page === PagesEnum.MAIN_PAGE) {
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

        if (this.props.page === PagesEnum.PROFILE_PAGE) {
            return (
                <div className="topBar row" style={{ width: "-webkit-fill-available", position: "fixed", zIndex: "1" }}>
                    <div className="col-2" style={{ textAlign: "center" }}>
                        <ClearIcon fontSize="large" style={{ margin: "40% 70% 0% 0%" }} />
                    </div>
                    <div className="col-8" style={{ textAlign: "left" }}>
                        <b><label style={{ paddingTop: "1.5rem" }}>PROFILE</label></b>
                    </div>
                    <div className="col-2" style={{ textAlign: "center" }}>
                        <CheckIcon fontSize="large" style={{ margin: "40% 70% 0% 0%" }} />
                    </div>
                </div>
            );
        }
    }
}

export default Header;
