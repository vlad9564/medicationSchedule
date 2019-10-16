import React from 'react';


class SchedulerIcon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="row" style={{ height: "100%" }}>
                <div className="col" style={{ padding: "0rem" }}>
                    <div className="row" style={{ border: "1px solid black", backgroundColor: "white", height: "33.3%" }}>
                    </div>
                    <div className="row" style={{ border: "1px solid black", backgroundColor: "black", height: "33.3%" }}>
                    </div>
                    <div className="row" style={{ border: "1px solid black", backgroundColor: "white", height: "33.3%" }}>
                    </div>
                </div>

            </div>
        )
    }

}

export default SchedulerIcon;
