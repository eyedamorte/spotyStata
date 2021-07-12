import React, { FC } from 'react'
import { List } from 'antd'
import { NewsStateType, ArticleType } from '../../news/newsTypes'
import ListItem from './ListItem'
import { useHistory } from 'react-router-dom'

interface CustomCardPropsType {
    list: NewsStateType['news']
}

const CustomCards : FC<CustomCardPropsType> = ({list}) => {

    const history = useHistory()

    return(
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: page => {
                console.log(page);
            },
            pageSize: 8,
            }}
            dataSource={list}
            
            renderItem={item => (
                <ListItem redirect={(item) => {history.push('/article/' + item.id)}} item={item}/>
            )}
        />
    )
    
}

export default CustomCards