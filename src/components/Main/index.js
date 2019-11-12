import React from 'react';

// Components import
import BottomNav from '../BottomNav/bottom-nav.index';
import MedicationList from '../MedicationList/medication-list.index';
import Clock from '../Clock/clock.index';
import Header from "../Header/header.index";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



// Other imports

const PILLS = [
    { name: 'Aspirin', portion: 'half', scheduler: [1, 0, 0] },
    { name: 'Pill 3', portion: 'full', scheduler: [0, 0, 1] },
    { name: 'Pill 8', portion: 'half', scheduler: [1, 0, 1] },
    { name: 'Pill 7', portion: 'quarter', scheduler: [1, 1, 0] },
    { name: 'Something', portion: 'half', scheduler: [0, 1, 1] },
    { name: 'Pill to take', portion: 'full', scheduler: [1, 0, 0] },
    { name: 'Para', portion: 'half', scheduler: [1, 0, 1] },
    { name: 'Pill for pain', portion: 'quarter', scheduler: [1, 0, 0] },
    { name: 'Pill 2', portion: 'full', scheduler: [1, 1, 0] },
    { name: 'Headache', portion: 'quarter', scheduler: [0, 0, 1] },
]


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
                    <MedicationList pills={PILLS}></MedicationList>
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
