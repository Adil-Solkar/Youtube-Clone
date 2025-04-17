import React from 'react'
import {timeAgo} from "../utils/publishedDate"

const VideoCard = ({info}) => {
  const {snippet, statistics} = info
  const {thumbnails,title ,channelTitle, publishedAt} = snippet

  return (
    <>
      <div className='m-4 w-72 rounded-t-xl shadow '>
        <div>
          <img className='block w-full rounded-xl'  src={thumbnails?.high?.url} alt='thumbnail'/>
        </div>
        <div className='p-3'>
        <h2 className='font-bold'>{title}</h2>
          <h3>{channelTitle}</h3>
          <h3>{statistics?.viewCount} . {timeAgo(publishedAt)}</h3>
        </div>
      </div>
    </>
  )
}

export default VideoCard
