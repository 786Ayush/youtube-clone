import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl,demoVideoTitle, demoChannelUrl,demoChannelTitle,demoVideoUrl } from '../utils/Constants'
const VideoCard = ({video :{ id: {videoId},snippet}}) => {
    // console.log(videoId,snippet);
  return (
    <Card sx={{width:{xs:'100%',md:'320px' }, boxShadow:'none', borderRadius: 0}}>
        <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{width: {
                    xs:'100%',sm:'350px',md:'320px'
                }, height:180}} />
        </Link>
        <CardContent sx={{backgroundColor:'#1e1e1e', height: '106px'}}>
            <Link to={videoId?`/video/${videoId}`: demoVideoUrl}>
                <Typography varient="subtitle1" fontWeight="bold" color="#FFF" width='358px'>
                    {snippet?.title.slice(0,40)||
                    demoVideoTitle.slice(0,40)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ?`/channel/${snippet?.channelId}`: demoChannelUrl}>
                <Typography varient="subtitle2" fontWeight="bold" color="#FFF">
                    {snippet?.channelTitle||
                    demoChannelTitle}
                    <CheckCircle sx={{ fontSize: 12, color: 'gray',ml:'5px'}}></CheckCircle>
                </Typography>
            </Link>
    
        </CardContent>
    </Card>
)
}

export default VideoCard