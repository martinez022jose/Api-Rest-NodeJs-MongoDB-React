import React, {Component} from  "react";

class App extends Component{
    constructor(){
        super();
        this.state = {
            title : "",
            year: "",
            movies: [], 
            _id: ""
        };
        this.addMovie = this.addMovie.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.fetchMovies = this.fetchMovies.bind(this);
    }

    addMovie(e){
        if(this.state._id){
            fetch(`/api/movies/${this.state._id}`,{
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    M.toast({html:'Movie updated'});
                    this.setState({title: '', year: '', _id: ''});
                    this.fetchMovies();
                }else{
                    throw data.error;
                }
            })
            .catch(err => {
                console.log(err);
                M.toast({html: err});
            })

        }else{
            fetch('/api/movies',{
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    M.toast({html:'Movie saved'});
                    this.setState({title: '', year: ''});
                    this.fetchMovies();
                }else{
                    throw data.error;
                }
            })
            .catch(err => {
                M.toast({html: err});
            });
        }
        e.preventDefault();
       
        
    }

    fetchMovies(){
        fetch('/api/movies')
            .then(res => res.json())
            .then(data => {
                this.setState({movies: data});
                //Se cambio []
            })
            .catch(e => console.log(e));
    }

    componentDidMount(){
        this.fetchMovies();
    }

    deleteMovie(id){
        fetch(`/api/movies/${id}`,{
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            M.toast({html:'Movie deleted'});
            this.fetchMovies();
        })

    }

    editMovie(id){
        fetch(`/api/movies/${id}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                title: data.title,
                year: data.year,
                _id: data._id

            })
        })
    }

    handleChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render(){
        return (
            <div>
                <nav className="teal ">
                    <div className="container">
                        <a className="brand-logo" style={{textDecoration: 'none'}} href="#">App Movies</a>
                    </div>
                </nav>

                <div className="container" style={{marginTop: '1%'}}>
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="container">
                                    <h4 className="center-align">Movie</h4>
                                </div>
                                <div className="card-content">
                                    <form onSubmit={this.addMovie}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Movie title"/>
            
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="text" name="year" value={this.state.year} onChange={this.handleChange}  placeholder="Movie year"/>
            
                                            </div>

                                        </div>
                                        
                                        <button type="submit" className="btn teal darken-3">Send</button>
                                    </form>

                                </div>

                            </div>

                        </div>
                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.movies.map( movie =>{
                                            return (
                                                <tr key={movie._id}>
                                                    <td>
                                                        {movie.title}
                                                    </td>
                                                    <td>
                                                        {movie.year}
                                                    </td>
                                                    <td>
                                                        <button className="btn teal darken-3" onClick={()=>{
                                                            this.deleteMovie(movie._id);
                                                        }}>
                                                            <i className="material-icons">delete</i>
                                                        </button>
                                                        <button className=" btn teal darken-3" style={{marginLeft: '10px'}} onClick={()=>{
                                                            this.editMovie(movie._id);
                                                        }}>
                                                            <i className="material-icons" >edit</i></button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;