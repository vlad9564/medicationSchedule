import React from 'react';
import List from '@material-ui/core/List';
import ArrowIcon from "@material-ui/icons/ArrowForwardIos";
import PillPortion from "./internal/PillPortion";
import SchedulerIcon from "./internal/SchedulerIcon";

class MedicationList extends React.Component {

    listOfItems;

    constructor(props) {
        super(props);
        this.state = {}

    }

    onClickRow() {
        console.log("row has been selected");
    }

    render() {
        return (

            <div style={{
                height: "30rem", overflow: "scroll", paddingBottom: "7rem"
            }}>
                <List style={{ width: "-webkit - fill - available" }}>
                    {this.props.pills.map((element) =>
                        (
                            <div className="row" style={{ width: "-webkit-fill-available", height: "40px", marginBottom: "0.5rem" }} onClick={this.onClickRow}>
                                <div className="col-2" style={{ textAlign: "center" }}>
                                    <div className="row" style={{ height: "100%" }}>
                                        <div className="col-4">
                                        </div>
                                        <div className="col-1" style={{ padding: "0%", overflow: "hidden", border: "1px solid" }}>
                                            <SchedulerIcon scheduler={element.scheduler} />
                                        </div>
                                        <div className="col-6" style={{ padding: "0%", marginTop: "0.2rem" }}>
                                            <PillPortion portion={element.portion} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-8" style={{ padding: "0%", marginTop: "0.6rem" }}>
                                    {element.name}
                                </div>
                                <div className="col-2">
                                    <ArrowIcon />
                                </div>

                            </div>
                        )
                    )}
                </List>
            </div >


        );
    }
}

export default MedicationList;
