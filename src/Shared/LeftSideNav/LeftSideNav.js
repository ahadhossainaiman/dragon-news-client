import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function LeftSideNav() {
  const [categoty,setCategory] = useState([]);
    useEffect(()=>{
      fetch('http://localhost:5000/news-category')
      .then(res=>res.json())
      .then(data=>setCategory(data))
    },[])
  return (
    <div>
    <h4>All Category:{categoty.length}</h4>
    {
      categoty.map(category => <p key={category.id}><Link to={`category/${category.id}`}>{category.name}</Link></p>)
    }
    </div>
  )
}
