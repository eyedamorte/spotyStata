import React, { useEffect, useState, FC } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import type {Options as ChartOptionsType} from 'highcharts'
import { ReleaseType } from "../releases/ReleasesTypes";

import featsService from '../../services/featsService'

interface FeatsPropsType {
  releases: ReleaseType[]
  artistId?: string
}

const ReleasesByYear: FC<FeatsPropsType> = ({releases, artistId}) => {
  
  const [ChartOptions, setChartOptions] = useState<ChartOptionsType>({
    chart: {
        backgroundColor: '#f0f2f5'
    },
    title: {
      text: "FEATS",
    },
    credits: {
        enabled: false
    },
    
    
    series: [{
        type: 'pie',
        name: 'number of feats',
        innerSize: '60%',
        
        data: [
          ['Artist 1', 6],
          ['Artist 2', 5],
          ['Artist 3', 2],
        ],
    },
  ]    
  });

  useEffect(() => {
    if(artistId){
      setChartOptions({
        series: [{
          type: 'pie',
          name: 'number of feats',
          innerSize: '60%',
          
          data: featsService(releases, artistId),
        }] 
      })
    }
  }, [releases])

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={ChartOptions} />
    </div>
  );
};

export default ReleasesByYear;
