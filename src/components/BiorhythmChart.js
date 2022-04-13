import dayjs from 'dayjs';
import React from 'react';
import { 
    CartesianGrid,
    Line,
    LineChart,
    ReferenceLine,
    ResponsiveContainer, 
    XAxis,
} from 'recharts';
import { calculateBiorhythmSeries } from '../calculations';
import './BiorhythmChart.css'

function formatDate(isoString){
    return dayjs(isoString).format('D MMM');
}

// const data = [
//     { date: '202-02-01', physical: 0.99, emotional: 0.50, intellectual: -0.25},
//     { date: '202-02-02', physical: 0.37, emotional: -0.86, intellectual: 0.45},
//     { date: '202-02-03', physical: 0.39, emotional: 0.90, intellectual: -0.55}
// ]

function BiorhythmChart({birthDate, targetDate}) {
    const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
    const data = calculateBiorhythmSeries(birthDate, startDate, 31)
        .map((item) => ({...item, date: formatDate(item.date)}));
    return(
        <ResponsiveContainer className='biorhythm-chart' width='100%' height={200}>
            <LineChart data={data}>
                <XAxis dataKey='date'
                    ticks={[data[3].date, data[15].date, data[27].date]}
                />
                <CartesianGrid vertical={false} strokeDasharray='3 3' />
                <ReferenceLine x={data[15].date} />
                <Line type='natural' dot={false} 
                    dataKey='physical' className='physical' 
                />
                <Line type='natural' dot={false} 
                    dataKey='emotional' className='emotional' 
                />
                <Line type='natural' dot={false} 
                    dataKey='intellectual' className='intellectual' 
                />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default BiorhythmChart;