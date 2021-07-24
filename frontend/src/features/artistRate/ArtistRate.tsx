import React, { useEffect, useState, FC } from 'react'
import { Rate, Form } from 'antd';
import { ReleasesStateType, AudioFeatures } from '../releases/ReleasesTypes'
import { InfoCircleOutlined } from '@ant-design/icons';


interface ArtistRatePropsType {
    releases?: ReleasesStateType['releases']
}

const ArtistRate:FC<ArtistRatePropsType> = ({releases}) => {

    const [instrumentalness, setInstrumentalness] = useState<number>(0)
    const [energy, setEnergy] = useState<number>(0)
    const [danceability, setDanceability] = useState<number>(0)
    const [acousticness, setAcousticness] = useState<number>(0)
    const [valence, setValence] = useState<number>(0)


    const getAverage = (arr:number[]) => {
        if (arr.length >= 1)
            return (arr.reduce((total:number, currentValue:number) => total + currentValue) / arr.length) * 10
    }

    useEffect(() => {
        if(releases){
            let features = releases.map((release)=>{
                return release.tracks.map(track => track.audioFeatures);
            }).flat()
            
            setAcousticness(getAverage(features.map(person => person.acousticness)) || 0)
            setInstrumentalness(getAverage(features.map(person => person.instrumentalness)) || 0)
            setEnergy(getAverage(features.map(person => person.energy)) || 0)
            setDanceability(getAverage(features.map(person => person.danceability)) || 0)
            setValence(getAverage(features.map(person => person.valence)) || 0)

        }
      }, [releases])

    return (
        <div style={{ margin: 20, padding: 20, backgroundColor: 'white' }}>
            <Form layout={'vertical'}>
                <Form.Item  
                    tooltip={{ 
                        title: 'Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly “vocal”. The closer the instrumentalness value is to 10, the greater likelihood the track contains no vocal content. Values above 5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 10', 
                        icon: <InfoCircleOutlined /> 
                    }} 
                    style={{marginBottom: 0}} 
                    label={<b>Instrumentalness:</b>}>
                    <Rate disabled count={10} value={instrumentalness}/>
                </Form.Item>

                <Form.Item
                    tooltip={{
                        title: 'A confidence measure from 0 to 10 of whether the track is acoustic. 10 represents high confidence the track is acoustic.',
                        icon: <InfoCircleOutlined /> 
                    }} 
                    style={{marginBottom: 0}} 
                    label={<b>Acousticness:</b>}>
                    <Rate disabled count={10} value={acousticness}/>
                </Form.Item>

                <Form.Item 
                    tooltip={{
                        title: 'A measure from 0 to 10 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).',
                        icon: <InfoCircleOutlined /> 
                    }} 
                    style={{marginBottom: 0}} 
                    label={<b>Valence:</b>}>
                    <Rate disabled count={10} value={valence}/>
                </Form.Item>

                <Form.Item 
                    tooltip={{
                        title: 'Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0 is least danceable and 10 is most danceable.',
                        icon: <InfoCircleOutlined /> 
                    }} 
                    style={{marginBottom: 0}} 
                    label={<b>Danceability:</b>}>
                    <Rate disabled count={10} value={danceability}/>
                </Form.Item>
                
                <Form.Item 
                    tooltip={{
                        title: 'Energy is a measure from 0 to 10 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.',
                        icon: <InfoCircleOutlined /> 
                    }} 
                    style={{marginBottom: 0}} 
                    label={<b>Energy:</b>}>
                    <Rate disabled count={10} value={energy}/>
                </Form.Item>
            </Form>
            
        </div>
    ) 
}

export default ArtistRate
