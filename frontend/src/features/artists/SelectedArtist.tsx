import React, {FC} from 'react'
import { Card } from 'antd';
import { ArtistType } from './ArtistsTypes'

const { Meta } = Card;

interface SelectedArtistPropsType {
    user: ArtistType
}

const SelectedArtist:FC<SelectedArtistPropsType> = ({user}) => {
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
