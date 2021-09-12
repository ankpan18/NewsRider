import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
    q:""
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    q: PropTypes.string
  }

capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  

  
  constructor(props) {
    super(props);
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: [],
      loading: true,
      page:1,
      totalResults:0
    };
    document.title=`${this.capitalizeFirstLetter(this.props.category)}= NewsRider`;
  }

  async updateNews(){
    this.props.setProgress(10);
    console.log("cdm");
    
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}&q=${this.props.q}`;
    this.setState({loading:true});
    let data= await fetch(url);
    this.props.setProgress(30);
    let parsedData= await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalArticles: parsedData.totalArticles, totalResults: parsedData.totalResults, loading:false})
    this.props.setProgress(100);
  }
  async componentDidMount(){
    console.log("cdm");
    this.updateNews();
  }

  handlePrevClick=async ()=>{
    console.log("Previous")
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c441c1edcaaf4c829ac2d385062ae485&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data= await fetch(url);
    // let parsedData= await data.json();
    // console.log(parsedData);
    
    // this.setState({
    //   page: this.state.page-1,
    //   articles: parsedData.articles,
    //   loading:false
    // })
    this.setState({page: this.state.page - 1});
    this.updateNews();
  }

   handleNextClick=async()=>{
    console.log("Next")
  //   if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c441c1edcaaf4c829ac2d385062ae485&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true});
  //   let data= await fetch(url);
  //   let parsedData= await data.json();
    
  //   this.setState({
  //     page: this.state.page+1,
  //     articles: parsedData.articles,
  //     loading:false
  //   })
  // }
  this.setState({page: this.state.page + 1});
  this.updateNews();

}

fetchMoreData = async () => {

  this.setState({
    page: this.state.page+1,
  })
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}&q=${this.props.q}`;
  let data= await fetch(url);
  let parsedData= await data.json();
  console.log(parsedData);
  this.setState({articles: this.state.articles.concat(parsedData.articles), totalArticles: parsedData.totalArticles, totalResults: parsedData.totalResults})
};

  render() {
    console.log("render",this.props.q);
    return (
      <>
        <h1 className="text-center" style={{
    margin: '23px 0px'}}>
      NewsRider- Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
             <NewsItem
              title={element.title? element.title: ""}
              description={element.description? element.description: ""}
              author={element.author? element.author: "Unknown"}
              date={element.publishedAt}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
              source={element.source.name}
            />
          </div>
        })}
        </div>
        </div>
        </InfiniteScroll>



        {/* <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}

      </>
    )
  }
}

export default News;
