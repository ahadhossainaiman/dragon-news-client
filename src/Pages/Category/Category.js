import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard'

export default function Category() {
  const categoryNews = useLoaderData()
    
  return (
    
    <div>
        <h1>This category has {categoryNews.length}</h1>
      {
        categoryNews.map(news => <NewsSummeryCard key={news._id} news={news}></NewsSummeryCard>)
      }
    </div>
  )
}
