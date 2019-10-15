import React from 'react';

// Components import
import QRScanner from '../QRScanner/index';
import Bar from '../Bar/index';
import MedicationList from '../MedicationList/index';
import Clock from '../Clock/index';
import Dialog from '../Dialog/index';
import NavigationBar from "../NavigationBar/index";
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
                <NavigationBar></NavigationBar>
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
                <Bar></Bar>
            </div>);
    }
}

export default Main;