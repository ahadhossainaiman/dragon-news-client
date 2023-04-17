import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard'

export default function Home() {
  const allNews = useLoaderData()
  return (
    <div>
        <h1>Home news are {allNews.length}</h1>
        {
          allNews.map((news)=> <NewsSummeryCard key={news._id} news={news}></NewsSummeryCard>)
        }
    </div>
  )
}
