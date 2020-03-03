import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";


class Number extends Component {

    render() {
        //const listItems = Object.keys(this.props.allPatients).map((patient) => <li key= {patient.id}>{patient.id}</li>);

        return (
            <div>
                <Typography variant="h1" align={"center"}>{this.props.data}</Typography>
                <Typography color="textSecondary" align={"center"}>
                    Number of Patients
                </Typography>
                {/*<ul>*/}
                {/*    {this.props.allPatients.map((item,index) => {*/}
                {/*        return <li key = {index}>{item['id']}</li>*/}
                {/*    })}*/}
                {/*</ul>*/}
                {/*<h2>{this.props.allPatients[0]['qualLifeYears']}</h2>*/}
               </div>
                )
    }
}
export default Number