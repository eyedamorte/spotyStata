import React, { useCallback, useEffect } from 'react';
import type { FC } from 'react';
import CustomInput from '../common/input/Input'
import { useSelector, useDispatch } from 'react-redux'
import { updateSearch, updateHeadlinesMethod } from './FiltersSlice'
import { getSearchValue, getIsTopHeadlines } from './filtersSelector'
import { Button, Switch } from 'antd';
import { getIsPending } from '../news/newsSelector';
import { getNewsThunk } from '../news/NewsSlice'
import settings from '../../settings'


const Filters : FC = () => {
    const dispatch = useDispatch()

    const SearchValue = useSelector(getSearchValue)
    const isPending = useSelector(getIsPending)
    const isTopHeadlines = useSelector(getIsTopHeadlines)

    const SearchInputOnChange = (e: React.FormEvent<HTMLInputElement>) =>{
        dispatch(updateSearch(e.currentTarget.value))
    }

    const changeHeadlinesMethod = (checked: boolean) =>{
        dispatch(updateHeadlinesMethod(checked))
    }

    const getNews = useCallback((params, isTopHeadlines) => {           
        dispatch(getNewsThunk({ params, isTopHeadlines }))
    }, [])

    useEffect(() => {
        getNews({ q: settings.defaultQuery }, isTopHeadlines)
    }, [])

    useEffect(() => {
        if(SearchValue.length){
            getNews({ q: SearchValue }, isTopHeadlines)
        }
    }, [isTopHeadlines])

    const submit = useCallback((isTopHeadlines) =>{
        if(SearchValue.length){
            getNews({ q: SearchValue }, isTopHeadlines)
        }
    }, [SearchValue])

    return(
        <div style={{ padding: 10 }}>
            <div>
                {
                    isTopHeadlines ? 
                        <h2>TOP HEADLINES</h2>
                    :
                        <h2>ALL ARTICLES</h2>
                }
            </div>
            <CustomInput style={{margin: '0 0 20px 0'}} placeholder='Search news' onChange={SearchInputOnChange}/>
            <div style={{margin: '0 0 20px 0'}}>
                <Switch 
                    checkedChildren="All articles" 
                    unCheckedChildren="Top headlines"  
                    onChange={changeHeadlinesMethod}
                />
            </div>
            <Button type="primary" block disabled={isPending} onClick={() => submit(isTopHeadlines)}>Search</Button>
        </div>
    )
    
}

export default Filters