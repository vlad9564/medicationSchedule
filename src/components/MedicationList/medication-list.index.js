import React from 'react';
import List from '@material-ui/core/List';
import MedicationRow from './internal/MedicationRow';

class MedicationList extends React.Component {

    uuidv3 = require('uuid/v3');

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div style={{
                height: "30rem", overflow: "scroll", paddingBottom: "7rem"
            }}>
                <List style={{ width: "-webkit - fill - available" }}>
                    {this.props.pills.map((element) =>
                        (
                            <MedicationRow key={element.key} element={element} />
                        )
                    )}
                </List>
            </div >
        );
    }
}

export default MedicationList;
