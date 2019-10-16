import React from 'react';
import List from '@material-ui/core/List';
import ArrowIcon from "@material-ui/icons/ArrowForwardIos";
import FullCircle from "@material-ui/icons/FiberManualRecord";
import SchedulerIcon from "./internal/SchedulerIcon";

class MedicationList extends React.Component {

    listOfItems;

    constructor(props) {
        super(props);
        this.state = {}
        this.listOfItems = ["Aspirin", "Item2", "Item3", "Item4", "Item5", "Item6", "Item7", "Item8", "Item9", "Item10", "Item11", "Item12", "Item7", "Item7", "Item7", "Item7", "Item7", "Item7"];
    }

    // test = (e) => {
    //     debugger;
    //     ReactDOM.render(<InfoPill />, document.getElementById('root'));

    // }

    onClickRow() {
        console.log("row has been selected");
    }

    render() {
        return (

            <div style={{
                height: "30rem", overflow: "scroll", paddingBottom: "7rem"
            }}>
                <List style={{ width: "-webkit - fill - available" }}>
                    {this.listOfItems.map((element) =>
                        (
                            <div className="row" style={{ width: "-webkit-fill-available", height: "40px", marginBottom: "0.5rem" }} onClick={this.onClickRow}>
                                <div className="col-2" style={{ textAlign: "center" }}>
                                    <div className="row" style={{ height: "100%" }}>
                                        <div className="col-4">
                                        </div>
                                        <div className="col-1" style={{ padding: "0%", overflow: "hidden", border: "1px solid" }}>
                                            <SchedulerIcon />
                                        </div>
                                        <div className="col-6" style={{ padding: "0%", marginTop: "0.2rem" }}>
                                            <FullCircle fontSize="large" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-8" style={{ padding: "0%", marginTop: "0.6rem" }}>
                                    {element}
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
