import React, { useCallback, useEffect } from 'react';
import Customlayout from './features/layout/Layout'
import { useSelector } from 'react-redux'
import { Row, Col } from 'antd';
import ArtistsSearch from './features/artists/ArtistsSearch';
import { getBestArtist } from './features/artists/ArtistsSelector';
import SelectedArtist from './features/artists/SelectedArtist';

export default function App() {

  const bestArtist = useSelector(getBestArtist)  

  return (
    <Customlayout>
      <div>
        <Row>
          <Col span={6}>
            <ArtistsSearch />
          </Col>
          <Col span={6}>
            {bestArtist ? <SelectedArtist user={bestArtist}/> : '' }
          </Col>
        </Row>
      </div>
    </Customlayout>
  )
}

