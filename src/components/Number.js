import React, {Component} from "react";
import ReactDom from "react-dom"


class Number extends Component {

    findPatientCount()
    {
        return this.props.allPatients.length;

    }

    render() {
        //const listItems = Object.keys(this.props.allPatients).map((patient) => <li key= {patient.id}>{patient.id}</li>);

        return (
            <div>
                <h1>Number of Patients: {this.findPatientCount()}</h1>
                <ul>
                    {this.props.allPatients.map((item,index) => {
                        return <li key = {index}>{item['id']}</li>
                    })}
                </ul>
                <h2>{this.props.allPatients[0]['race']}</h2>
               </div>
                )
    }
}
export default Number