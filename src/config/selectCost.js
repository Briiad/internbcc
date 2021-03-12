import React from 'react';
import Select from 'react-select';

const options = [
    {label: 'IDR 500.000 - 1.000.000', value: {minFee: 500000, maxFee: 1000000}},
    {label: 'IDR 1.000.000 - 3.000.000', value: {minFee: 1000000, maxFee: 3000000}},
    {label: 'IDR 3.000.000 - 7.000.000', value: {minFee: 3000000, maxFee: 7000000}},
    {label: 'IDR 7.000.000 - 10.000.000', value: {minFee: 7000000, maxFee: 10000000}}
];

function CostSelectMin(props){
    return(
        <div className="Select">
            <Select options={options} />
        </div>
    );
}


export default CostSelectMin ;