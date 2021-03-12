import React from 'react';
import Select from 'react-select';

const options = [
    { label: 'Select', value: 'none' },
    { label: 'IDR 500.000 - 1.000.000', value: '5to10' },
    { label: 'IDR 1.000.000 - 3.000.000', value: '10to30' },
    { label: 'IDR 3.000.000 - 7.000.000', value: '30to70' },
    { label: 'IDR 7.000.000 - 10.000.000', value: '70to100' }
];

function CostSelect({ setRange }) {
    return (
        <div className="Select">
            {/* <Select options={options} /> */}
            <select onChange={(e) => setRange(e.target.value)} className="select-range">
                {options.map((option, id) => (
                    <option key={id} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}


export default CostSelect;