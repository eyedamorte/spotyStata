import React from 'react'
import { Card } from 'antd';
import { ArtistType } from './ArtistsTypes'

const { Meta } = Card;


const SelectedArtist: React.FC<ArtistType> = (user) => {
    return (
        <Card
            style={{ width: 240 }}
            cover={<img alt="example" src={user.images[0].url} />}
        >
        <Meta title={user.name}/>
        </Card>
    ) 
}

export default SelectedArtist
