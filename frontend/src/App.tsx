import React, { useCallback, useEffect } from "react";
import Customlayout from "./features/layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import ArtistsSearch from "./features/artists/ArtistsSearch";
import { getReleasesThunk } from "./features/releases/ReleasesSlice";
import { getSelectedArtist } from "./features/artists/ArtistsSelector";
import { getReleases } from "./features/releases/ReleaseSelector";
import SelectedArtistCard from "./features/selectedArtistCard/SelectedArtistCard";
import ArtistRate from "./features/artistRate/ArtistRate";

import FeatsChart from "./features/charts/Feats";

import "./style.css";
import ReleasesByYear from "./features/charts/ReleasesByEyar";

export default function App() {
  const dispatch = useDispatch();

  const selectedArtist = useSelector(getSelectedArtist);
  const releases = useSelector(getReleases);

  useEffect(() => {
    if (selectedArtist) {
      dispatch(getReleasesThunk({ id: selectedArtist.id }));
    }
  }, [selectedArtist]);

  return (
    <Customlayout>
      <div className="container ">
        <Row gutter={[8, 8]}>
          <Col span={14}>
            <ArtistsSearch style={{ width: "100%" }} />
            <ArtistRate releases={releases} />
          </Col>
          <Col span={10}>
            <SelectedArtistCard user={selectedArtist} />
          </Col>
        </Row>
        <div>
          <div>
          <ReleasesByYear
              releases={releases}
              artistId={selectedArtist?.name}
            />
          </div>

          <div style={{marginTop: 40}}>
          <FeatsChart releases={releases} artistId={selectedArtist?.name} />
          </div>
        </div>
      </div>
    </Customlayout>
  );
}
