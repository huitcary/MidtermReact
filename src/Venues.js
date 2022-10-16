import useFetch from "./useFetch";
import {Link} from 'react-router-dom'

const Venues = () => {
  const { data, loading, error } = useFetch(
    "https://sis.materdeicollege.com/api/venues"
  );


  return (
    <>
      <h1 className="text-center text-bold">
        Mater Dei College Venues
      </h1>
      {error && (
        <p className="text-danger text-center">Something wrong from the API</p>
      )}
      {loading && (
        <div className="text-center bg-primary text-white">
          Loading Venues...
        </div>
      )}
      <div className="container">
      <table className="table table-striped text-center">
        <thead>
          <tr>
          <td class="table-primary">#</td>
              <td class="table-primary"><b>Name</b></td>
              <td class="table-primary"><b>Building</b></td>
              <td class="table-primary"><b>Capacity</b></td>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data)?.map((venue, index) => {
            return (
              <tr key={index} className="hover-effect" >
                <td class>{data[venue].id}</td>
                <td class>{data[venue].name}</td>
                <td class>{data[venue].building}</td>
                <td className="d-flex justify-content-between align-items-center">
                  <div>{data[venue].capacity}</div>
                  <Link to={`/venues/${data[venue].id}`} className="btn btn-sm btn-info mt-1">
                        Show Schedule
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Venues;