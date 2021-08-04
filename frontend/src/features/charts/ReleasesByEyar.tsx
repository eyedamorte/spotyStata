import React, { useEffect, useState, FC } from "react";

import Highcharts, { color } from "highcharts";
import HighchartsReact from "highcharts-react-official";

import type { Options as ChartOptionsType } from "highcharts";
import { ReleaseType } from "../releases/ReleasesTypes";

import featsService from "../../services/featsService";

interface FeatsPropsType {
  releases: ReleaseType[];
  artistId?: string;
}

const ReleasesByYear: FC<FeatsPropsType> = ({ releases, artistId }) => {
  const [ChartOptions, setChartOptions] = useState<ChartOptionsType>({
    chart: {
      type: "column",
      backgroundColor: '#f0f2f5'
    },
    credits: {
      enabled: false
    },
    title: {
      text: "RELEASES BY EYAR",
    },
    xAxis: {
      categories: ["2017", "2018", "2019", "2020", "2021"],
    },
    yAxis: {
      min: 0,
      title: {
        text: "Total fruit consumption",
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
          color: "gray",
        },
      },
    },
    legend: {
      align: "right",
      x: -30,
      verticalAlign: "top",
      y: 25,
      floating: true,
      backgroundColor: "white",
      borderColor: "#CCC",
      borderWidth: 1,
      shadow: false,
    },
    tooltip: {
      headerFormat: "<b>{point.x}</b><br/>",
      pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
    },
    plotOptions: {
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [
      {
        name: "EP",
        type: 'column',
        data: [5, 3, 4, 7, 4],
      },
      {
        name: "FEATURE",
        type: 'column',
        data: [3, 2, 3, 2, 1],
      },
      {
        name: "LP",
        type: 'column',
        data: [3, 4, 4, 2, 5],
      },
      {
        name: "SINGLE",
        type: 'column',
        data: [1, 2, 4, 2, 1],
      },
    ],
  });

  useEffect(() => {
    if (artistId) {
      setChartOptions({
        series: [
          {
            name: "EP",
            type: 'column',
            data: [5, 3, 4, 7, 4],
          },
          {
            name: "FEATURE",
            type: 'column',
            data: [2, 2, 3, 2, 1],
          },
          {
            name: "LP",
            type: 'column',
            data: [3, 4, 4, 2, 5],
          },
          {
            name: "SINGLE",
            type: 'column',
            data: [1, 2, 4, 2, 1],
          },
        ]
      });
    }
  }, [releases]);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={ChartOptions} />
    </div>
  );
};

export default ReleasesByYear;
