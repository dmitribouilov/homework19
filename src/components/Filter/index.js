import React from "react";


function Filter(props) {


 
  return (
    <div className="card card-body">
    <div className="card-header">
      Employee Information
    </div>
    <div className="row">
    <div className="col-lg-2">

                  <label htmlFor="reserve-unique-id">Sort</label>
                        <select
                        
                          name="field_6"
                          id="sort"
                          className="form-control"
                          required
                          onChange={(event) => props.filterAscDesc(event.target.value)}
                        >
                          <option value="" disabled selected
                            >Please Select...</option
                          >
                          <option value="Asc">Ascending</option>
                          <option value="Desc">Descending</option>

                      
                        </select>

                        <label htmlFor="reserve-unique-id">To Fire</label>
                        <select
                          name="field_6"
                          id="sort"
                          className="form-control"
                          required
                          onChange={(event) => props.filterToFire(event.target.value)}
                        >
                          <option value="" disabled selected
                            >Please Select...</option
                          >
                          <option value= "true">Yes</option>
                          <option value="false">No</option>
                      
                        </select>
                            <br></br>
                        <button type="submit" className="btn btn-primary submit"
                        
                        onClick={() => props.reset()}
                        
                        >
                  Reset
                </button>
    </div>  
    </div>  
    </div>  
    




  );




}

export default Filter;