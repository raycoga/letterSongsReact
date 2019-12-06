import React, {useState} from 'react';

const Form = ({searchAPILetter}) => {
    const [search, setSearch]= useState({
        artist:"",
        song:""
    })

    const handleChange = e =>{
        setSearch({...search, [e.target.name]:e.target.value})
    }
    const sendData=e=>{
        e.preventDefault()
        searchAPILetter(search)
    }
    return (
        <div className="bg-info">
          <div className="container">
              <div className="row">
                  <form onSubmit={sendData}
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                      <fieldset>
                          <legend className="text-center">Search Song Letters</legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artist</label>
                                    <input 
                                    onChange={handleChange}
                                        type="text" 
                                        className="form-control" 
                                        name="artist" 
                                        placeholder="Artist Name" 
                                        required
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Song</label>
                                    <input 
                                    onChange={handleChange}
                                        type="text" 
                                        className="form-control" 
                                        name="song" 
                                        placeholder="Song Name" 
                                        required
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary float-right">Search</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
    );
};

export default Form;