import React, {PureComponent} from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import './App.scss';
import data from './data/data';

import Header from './components/Header/Header';

export default class App extends PureComponent {
  render () {
    return (
      <div>
        <Header />
        <div style={{width: '100%', height: 700}}>
          <ResponsiveContainer>
            <BarChart
              width={500}
              height={300}
              data={data}
              layout="vertical"
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" stackId="a" fill="#8884d8" />
              <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
