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
    { name: 'Aspirin', portion: 'half', scheduler: { morning: true, lunch: false, evening: false } },
    { name: 'Pill 3', portion: 'full', scheduler: { morning: false, lunch: false, evening: true } },
    { name: 'Pill 8', portion: 'half', scheduler: { morning: true, lunch: false, evening: true } },
    { name: 'Pill 7', portion: 'quarter', scheduler: { morning: true, lunch: true, evening: false } },
    { name: 'Something', portion: 'half', scheduler: { morning: true, lunch: true, evening: true } },
    { name: 'Pill to take', portion: 'full', scheduler: { morning: true, lunch: false, evening: false } },
    { name: 'Para', portion: 'half', scheduler: { morning: true, lunch: false, evening: true } },
    { name: 'Pill for pain', portion: 'quarter', scheduler: { morning: true, lunch: false, evening: false } },
    { name: 'Pill 2', portion: 'full', scheduler: { morning: true, lunch: true, evening: false } },
    { name: 'Headache', portion: 'quarter', scheduler: { morning: false, lunch: false, evening: true } },
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
