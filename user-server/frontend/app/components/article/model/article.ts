export interface IArticle{
    id? : number
    title? : string
    content? : string
    writer? : string
    board? : number
    regDate? : string
    modDate? : string
    array? : IArticle[]
    json? : IArticle
}