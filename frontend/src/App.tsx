import React, { useCallback, useEffect } from 'react';
import Customlayout from './features/layout/Layout'
import { useSelector } from 'react-redux'
import { Row, Col } from 'antd';
import ArtistsSearch from './features/artists/ArtistsSearch';
import { getSelectedArtist } from './features/artists/ArtistsSelector';
import SelectedArtist from './features/artists/SelectedArtist';
import './style.css'

export default function App() {

  const bestArtist = useSelector(getSelectedArtist)  

  return (
    <Customlayout>
      <div className='container'>
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <ArtistsSearch style={{width: '100%'}}/>
          </Col>
          <Col span={12}>
            {bestArtist ? <SelectedArtist user={bestArtist}/> : null }
          </Col>
        </Row>
      </div>
    </Customlayout>
  )
}

