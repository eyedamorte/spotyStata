import React, { useCallback, useEffect } from 'react';
import Customlayout from './features/layout/Layout'
import { useSelector } from 'react-redux'
import { Row, Col } from 'antd';
import { BrowserRouter,  Route, Redirect } from 'react-router-dom'
import Article from './features/news/Article'
import ArtistsSearch from './features/artists/ArtistsSearch';
import { getBestArtist } from './features/artists/ArtistsSelector';
import SelectedArtist from './features/artists/SelectedArtist';

export default function App() {

  const bestArtist = useSelector(getBestArtist)  


  return (
    <BrowserRouter>
      <Customlayout>
          <div>
            <Route path={'/news'} exact>
              <Row>
                <Col span={6}>
                  <ArtistsSearch />
                </Col>
                <Col span={6}>
                </Col>
              </Row>
            </Route>
            <Route exact path="/">
              <Redirect to="/news" />
          </Route>
            <Route path={'/article/:id'}>
              <Article />
            </Route>
          </div>
          
      </Customlayout>
    </BrowserRouter>
  )
}

