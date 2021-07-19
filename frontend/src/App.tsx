import React, { useCallback, useEffect } from 'react'
import Customlayout from './features/layout/Layout'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col } from 'antd'
import ArtistsSearch from './features/artists/ArtistsSearch'
import { getReleasesThunk } from './features/releases/ReleasesSlice'
import { getSelectedArtist } from './features/artists/ArtistsSelector'
import SelectedArtist from './features/artists/SelectedArtist'
import './style.css'

export default function App() {
  const dispatch = useDispatch()

  const selectedArtist = useSelector(getSelectedArtist)  

  useEffect(() => {
    if(selectedArtist){
      dispatch(getReleasesThunk({ id: selectedArtist.id}))

    }
  }, [selectedArtist])

  return (
    <Customlayout>
      <div className='container'>
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <ArtistsSearch style={{width: '100%'}}/>
          </Col>
          <Col span={12}>
            <SelectedArtist user={selectedArtist}/>
          </Col>
        </Row>
      </div>
    </Customlayout>
  )
}

