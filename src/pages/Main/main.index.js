import React from 'react';

// Components import
import BottomNav from '../../components/BottomNav/bottom-nav.index';
import MedicationList from '../../components/MedicationList/medication-list.index';
import Clock from '../../components/Clock/clock.index';
import Header from "../../components/Header/header.index";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Pill } from '../../model/Pill.model';
import { PortionEnum } from "../../model/PortionEnum.ts";
import { Scheduler } from "../../model/Scheduler.model";

const PILLS = [
    new Pill(1, 'Aspirin', PortionEnum.HALF, new Scheduler(true, false, false)),
    new Pill(2, 'Pill 3', PortionEnum.FULL, new Scheduler(false, false, true)),
    new Pill(3, 'Pill 8', PortionEnum.HALF, new Scheduler(true, false, true)),
    new Pill(4, 'Pill 7', PortionEnum.QUARTER, new Scheduler(true, true, true)),
    new Pill(5, 'Something', PortionEnum.HALF, new Scheduler(false, false, true)),
    new Pill(6, 'Pill to take', PortionEnum.FULL, new Scheduler(false, false, true)),
    new Pill(7, 'Para', PortionEnum.HALF, new Scheduler(false, true, false)),
    new Pill(8, 'Pill for pain', PortionEnum.QUARTER, new Scheduler(true, false, false)),
    new Pill(9, 'Pill 2', PortionEnum.FULL, new Scheduler(true, false, true)),
    new Pill(10, 'Headache', PortionEnum.QUARTER, new Scheduler(false, true, true))
]

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Header page={this.props.page}></Header>
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
                <BottomNav onPageChange={this.props.onPageChange} page={this.props.page}></BottomNav>
            </div>
        );
    }
}

export default Main;
