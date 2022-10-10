import { LightningElement ,track} from 'lwc';
import getRandomMovie from '@salesforce/apex/MovieApi.getRandomMovie';


export default class MovieListApi extends LightningElement {

    searchMovieName;
    @track title;

    handlesearchMovieName(event){
        this.searchMovieName = event.target.value;

    }
    searchMovie(){
        getRandomMovie({title : this.searchMovieName})
        .then(data =>{
            this.movieList = JSON.parse(data).Search?JSON.parse(data).search:''
        })
        .catch(error=>{
            this.movieList = null;
        });
    }

    columns = [
        {label: 'Title', feildName: 'Title',type:'text' },
        {label: 'Year', feildName: 'Year',type:'text' },
        {label: 'Type', feildName: 'Type',type:'text' },
        {label: 'Poster', feildName: 'Poster',type:'text' },
    ]
}