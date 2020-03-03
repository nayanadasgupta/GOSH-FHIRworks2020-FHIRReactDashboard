import React, {Component} from 'react';
import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
    Tooltip, Bar,
} from 'recharts';
import Typography from "@material-ui/core/Typography";


class ChartBar extends Component {
    render() {
        let dataList = [];
        let dataDict = this.props.data;
        for (var key in dataDict)
        {
            let datumDict = {};
            datumDict['Name'] = key;
            datumDict['Count'] = dataDict[key];
            dataList.push(datumDict);
        }
        return(
            <div>
                <ResponsiveContainer height={400} width="95%" >
                    <BarChart width={400} height={250} data={dataList}>
                    <CartesianGrid strokeDasharray="3 3" />
                     <XAxis dataKey="Name" />
                     <YAxis/>
            <Tooltip />
            <Legend />
            <Bar dataKey="Count" fill="#8884d8" />
        </BarChart>
                </ResponsiveContainer>
                <Typography color="textSecondary" align={"center"}>
                    {this.props.dataName}
                </Typography>
            </div>)
    }

}

export default ChartBar;
