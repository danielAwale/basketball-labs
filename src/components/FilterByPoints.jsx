import React from 'react'
import { useEffect, useState } from 'react';
import Stats from './Stats';

const FilterByPoints = () => {
  const [points, setPoints] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/filter/points')
      .then(response => response.json())
      .then(data => setPoints(data))
      .catch(error => console.log(error.message))
  },[])

  return (
    <>
    </>
  )
}

export default FilterByPoints