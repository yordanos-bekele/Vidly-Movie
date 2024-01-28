import React, { Component } from 'react';
import { movies } from './service/fakeMovieService';
import { getMovies } from './service/fakeMovieService';
import Liked from './like';
class Movies extends Component {
    state = { 
        Movie: getMovies(), 
        movies: movies
    } 

    handleClick = movie=>{
        const newMovie = this.state.Movie.filter(m => m._id !== movie._id);
        this.setState({Movie: newMovie});
    } 
    handleLike = (movie)=>{
        const movies = [...this.state.movies]
        let index = movies.indexOf(movie)
        const moviePreferenceUpdate = !movies[index].liked
        movies[index].liked = moviePreferenceUpdate
        this.setState({movies});
        console.log(movie, movie.liked)
    }
    render() { 
        return (
            
            <div>
                <h1>Movie List</h1>
                <table className="table">
                    <thead>
                       <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                        <th></th>
                       </tr>
                    </thead>
                    <tbody>
                            {this.state.Movie.map( (movie) => 
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td>
                                        <Liked
                                            onLike = {()=>{this.handleLike(movie)}}
                                            liked = {movie.liked}
                                        />
                                    </td>
                                    <td><button className='btn btn-danger' onClick={()=>{this.handleClick(movie)}} >delete</button></td>
                                </tr>
                            )}
                        <tr>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default Movies;