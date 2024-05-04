import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const {user} = useContext(AuthContext);
  console.log(user?.email);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data =>{
      setBookings(data)
    })
  },[])

  const handleDelete = id =>{
    const proceed = confirm("Are You Sure You want to delete it");
    if(proceed){
      fetch(`http://localhost:5000/bookings/${id}`,{
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.deletedCount > 0){
          alert('deleted successfully');
          const remaining = bookings.filter(booking => booking._id !== id);
          setBookings(remaining)
        }
      })
    }
  }
const handleConfirm = id =>{
 fetch(`http://localhost:5000/bookings/${id}`,{
  method: 'PATCH',
  headers:{
    'content-type':'application/json'
  },
  body: JSON.stringify({status:'confirm'})
 })

 .then(res => res.json())
 .then(data => {
  console.log(data);
  if(data.modifiedCount > 0){
    alert('modified');
    const remaining = bookings.filter(booking => booking._id !== id);
    const updated = bookings.find(booking => booking._id === id);
    updated.status = 'confirm'
    const newBooking = [updated, ...remaining];
    setBookings(newBooking);
  }
 })
}

  // console.log(bookings)
  return (
    <div>
      <h1>Your Bookings: {bookings.length}</h1>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Service</th>
        <th>date</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map(booking => <BookingRow
           key={booking._id}
           booking={booking}
           handleDelete={handleDelete}
           handleConfirm={handleConfirm}
            ></BookingRow>)
      }
     
    </tbody>  
  </table>
</div>
    </div>
  );
};

export default Bookings;