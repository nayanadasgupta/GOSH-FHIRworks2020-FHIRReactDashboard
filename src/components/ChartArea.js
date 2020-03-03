import React, {Component} from 'react';
import {
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip, AreaChart, Area,
} from 'recharts';
import Typography from "@material-ui/core/Typography";

class ChartArea extends Component {
    render() {
        let dataList = [];
        let dataDict = this.props.data;
        for (var key in dataDict) {
            let datumDict = {};
            datumDict['Name'] = key;
            datumDict['Count'] = dataDict[key];
            dataList.push(datumDict);
        }
        return (

            <div>
                <ResponsiveContainer height={400} width="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={dataList}
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="Count" stroke="#8884d8" fill= "#8884d8" />
                </AreaChart>
                </ResponsiveContainer>
                <Typography color="textSecondary" align={"center"}>
                    {this.props.dataName}
                </Typography>
            </div>
        )
    }
}

export default ChartArea;