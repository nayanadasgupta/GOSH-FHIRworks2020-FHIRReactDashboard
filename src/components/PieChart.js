import React, {Component} from 'react';
import {
    PieChart,
    Pie,
    Sector,
    Cell,
    BarChart,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
    Tooltip, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
} from 'recharts';
import Typography from "@material-ui/core/Typography";

class ChartPie extends Component {

    render() {
        let dataList = [];
        let dataDict = this.props.data;
        for (var key in dataDict)
        {
            let datumDict = {};
            datumDict['name'] = key;
            datumDict['value'] = dataDict[key];
            dataList.push(datumDict);
        }
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

        return (
            <div>
            <ResponsiveContainer height={400} width="90%">
                <PieChart>
                    <Pie height = {300} dataKey="value" startAngle={180} paddingAngle={5} endAngle={0} data={dataList} cx={300} cy={250} outerRadius="90%" fill="#8884d8" label>
                        {dataList.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)}</Pie>
                    <Legend align="bottom" layout={'horizontal'} height={36}/>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
                <Typography color="textSecondary" align={"center"}>
                    {this.props.dataName}
                </Typography>
            </div>

        )
    }
}

export default ChartPie