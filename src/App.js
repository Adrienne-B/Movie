import {useState, useEffect} from 'react';
import './app.css';
import MovieCard from './MovieCard'; 

import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=c7810f4c'; //This is a static variable (api url)
                                                          //We can use that from inside of our components to gather the data

const App = () => { //Main functional component
    const [movies, setMovies] = useState([]); //This will give us access to the set movies setter function
                                              //Instead of console.log like we did earlier with console.log(data.search)
                                              //Now we can pass the data.search into our set movies
   
   
        const [searchTerm, setSearchTerm] = useState('');


        const searchMovies = async (title) => {  //Async means it takes time to fetch something
                                                //The title inside of the parathesis means when the user types the title of the movie, the browser searches for it
            const response = await fetch(`${API_URL}&s=${title}`) //Once we have the response we need the data
            const data = await response.json();

            setMovies(data.Search);
       
                //console.log(data.Search); //When you type a movie in th searchMovies() and then put data.search in teh console, 
                                            //a list of that specific movie may appear 
                                            //So now we can go to  <MovieCard movie1={movie1} />  and put [0] to dynamically pass movies
                                            //Which will also allow us to populate the movie
        }

        useEffect(() => {
            searchMovies(`The Lion King`);
        }, []);  //Empty dependent array if we want to call the function from the movie as the start

    
    return (  //return statement
        <div className="app">
             <h1>Movie</h1>
             
             <div className="search">
                 <input //input is self closing
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} //This is important b/c when you type a movie, and then you want to type something else
                                        //this method will allow you too.
                                        //If you didnt have this but only value...when you try to type a new movie it will be static
                                        //You wouldnt be able to type anything else

                                        //since the searchterm deals with the search (that was in the stats),
                                        //inside of the input will change that from static to dynamic
                                        //So put e (event, put setsearchTerm, e.target.value)
                />

                <img   
                    src={SearchIcon} //magnifyn glass icon
                    alt="search"
                    onClick={() => searchMovies('searchTerm')} //it will be a button when you click on it (enter)
                />
             </div>

        {movies?.length > 0 //If length is greater than 0 then we want to render moviecard
                                //else. if it isnt the case (no movies), we want to render a div saying
                                //that there are no movies found.
            ? (
                //<div className="container"> 
                    //<MovieCard movie1={movie1} />  
                //</div>

                //Now change movie1 (this was only a placeholder) to movie

                <div className="container"> 
                    {movies.map((movie) => ( //we are dynamically looping over our movies array which
                                            //is fetched from an api and we are taking eachindividaul movie
                                            //and we are dynamically passing it as as a prop to our movie card
                                            //and thats going to result in the render of all of our movie movies
                        <MovieCard movie={movie} />
                     ))} 
                </div>

            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}



    </div>
        //We have a MovieCard.jsx or MovieCard.js so it isnt in here to where you have to repeat it
        // multiple times with differen movies

        //So we are using MovieCard as a self-closing end component.
        //We have to pass in a prop so movie1 = movie1

        //So now we can go to  <MovieCard movie1={movie1} />  and put [0] to dynamically pass movies
                                            //Which will also allow us to populate the movie
    );
}

export default App; //Have to export every single component so 
                    //that it is called from somewhere else. In
                    //This case we are importing it inside of index.js file


                  