import React from 'react';


class SchedulerIcon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    checkAvailability(slot) {
        if (slot === 1) {
            return 'black'
        } else {
            return 'white'
        }
    }

    render() {
        return (
            <div className="row" style={{ height: "100%" }}>
                <div className="col" style={{ padding: "0rem" }}>
                    <div className="row" style={{ border: "1px solid black", backgroundColor: this.checkAvailability(this.props.scheduler[0]), height: "33.3%" }}>
                    </div>
                    <div className="row" style={{ border: "1px solid black", backgroundColor: this.checkAvailability(this.props.scheduler[1]), height: "33.3%" }}>
                    </div>
                    <div className="row" style={{ border: "1px solid black", backgroundColor: this.checkAvailability(this.props.scheduler[2]), height: "33.3%" }}>
                    </div>
                </div>
            </div>
        )
    }

}

export default SchedulerIcon;
