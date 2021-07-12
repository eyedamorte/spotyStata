import React, { FC } from 'react';
import { List } from 'antd';
import { ArticleType } from '../../news/newsTypes'

interface ListItemPropsType {
    item: ArticleType,
    redirect: (user: ArticleType) => void
}

const Card : FC<ListItemPropsType> = ({item, redirect}) => {

    return(
        <List.Item
            key={item.id}
            extra={
            <img
                width={200}
                alt="logo"
                src={item.urlToImage}
            />
            }
        >
        <List.Item.Meta
            title={<a  onClick={() => redirect(item)}>{item.title}</a>}
            description={<div dangerouslySetInnerHTML={{ __html: item.description }} />}
            />
        </List.Item>
    )
    
}

export default Card