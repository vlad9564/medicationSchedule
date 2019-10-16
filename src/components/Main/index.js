import React from 'react';

// Components import
import BottomNav from '../BottomNav/bottom-nav.index';
import MedicationList from '../MedicationList/medication-list.index';
import Clock from '../Clock/clock.index';
import Header from "../Header/header.index";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



// Other imports

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Header></Header>
                <div style={{ marginTop: "4rem", paddingTop: "1rem" }}>
                    <div style={{ paddingLeft: "20%" }}>
                        <Clock></Clock>
                    </div>
                    <div>
                        {/* <Dialog></Dialog> */}
                    </div>

                    <MedicationList></MedicationList>


                </div>
                <div className="row" style={{ position: "fixed", width: "-webkit-fill-available", bottom: "5.5rem" }}>
                    <div className="col-12" style={{ textAlign: "center", marginBottom: "-10px" }}>
                        <Fab color="default" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </div>
                </div>
                <BottomNav></BottomNav>
            </div>);
    }
}

export default Main;
