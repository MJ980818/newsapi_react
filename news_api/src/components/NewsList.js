import React, {useState, useEffect} from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width:768px){
        width:100px;
        padding-left:1rem;
        padding-right:1rem;
    }
`;



const NewsList = ({category}) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        const fetchData = async() => {
            setLoading(true);
            try{
                const query = category === 'all' ? '' : `&category=${category}`
                const response = await axios.get(
                    `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=07341c07c1544f999b3e58cb0b739d3e`
                );
                setArticles(response.data.articles);
            }catch(e){
                console.log(e);
            }
            setLoading(false);
        }
        fetchData();
    }, [category]
    ); // if [] is blank, it is ComponentDidMount, else ComponentDidUpdate
    // Lifecycle api를 써서 비동기적 코드를 짠다

    if(loading){
        return <NewsListBlock>정보를 가져오는 중...</NewsListBlock>
    }

    if(!articles){
        return null;
    }

    return(
        <NewsListBlock>
            {articles.map(
                article => (
                    <NewsItem key={article.url} article={article}/>
                )
            )}
        </NewsListBlock>
    )
}
export default NewsList;