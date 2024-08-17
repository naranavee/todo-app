import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterTasks } from '../store/actions';
import Select from 'react-select';
import './Filter.css';

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const dispatch = useDispatch();

  const filterOptions = [
    { value: 'all', label: 'All Tasks' },
    { value: 'completed', label: 'Completed Tasks' },
    { value: 'incomplete', label: 'Incomplete Tasks' },
  ];

  const handleFilterChange = (selectedOption) => {
    setSelectedFilter(selectedOption.value);
    dispatch(filterTasks(selectedOption.value));
  };

  return (
    <div className="filter-container">
      <label htmlFor="filter-select" className="filter-label">Filter:</label>
      <Select
        id="filter-select"
        options={filterOptions}
        value={filterOptions.find((option) => option.value === selectedFilter)}
        onChange={handleFilterChange}
        className="filter-select"
      />
    </div>
  );
};

export default Filter;
