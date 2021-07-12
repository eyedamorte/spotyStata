export type ArticleSourceType = {
     id: number,
     name: string
}

export type ArticleType = {
    id: number,
    source: ArticleSourceType
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}

export type NewsStateType = {
    news: ArticleType[],
    isPending: boolean
}