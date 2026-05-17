import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
function App() {
  const [courses,setCourses] = useState([]);
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [desc,setDesc] = useState("");
  const [seats,setSeats] = useState("");
  const [editId,setEditId] = useState(null);

  const getCourses = async () => {
    const res = await fetch("http://localhost:5000/api/v1/courses");
    const data = await res.json();
    setCourses(data);
  }

  useEffect(()=>{
    getCourses();
  },[]);

  const addCourses = async () => {
    await fetch("http://localhost:5000/api/v1/add",{
      method:"POST",
      headers:{
          "Content-Type":"application/json",
      },
      body:JSON.stringify({name,price,desc,seats})
    });

    setName("");
    setPrice("");
    setDesc("");
    setSeats("");
    getCourses();

  }

  const deleteCourses = async (id) => {
    await fetch(`http://localhost:5000/api/v1/del/${id}`,{
      method:"DELETE",

    });
    getCourses();

  }

  const updateCourses = async () => {
    await fetch(`http://localhost:5000/api/v1/update/${editId}`,{
      method:"PUT",
      headers:{
          "Content-Type":"application/json",
      },
      body:JSON.stringify({name,price,desc,seats})
    });

    setName("");
    setPrice("");
    setDesc("");
    setSeats("");

    setEditId(null);
    getCourses();

  }

    // Edit button click
  const editCourse = (course) => {
    setName(course.name);
    setPrice(course.price);
    setDesc(course.desc);
    setSeats(course.seats);

    setEditId(course._id);
  };





  return (
        <div style={{ padding: "20px" }}>
      <h1>CRUD App</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input type="text"
      placeholder="Description"
      value={desc}
      onChange={(e)=> setDesc(e.target.value)}
      />

       <input type="text"
      placeholder="seats"
      value={seats}
      onChange={(e)=> setSeats(e.target.value)}
      />

       {editId ? (
        <button onClick={updateCourses}>Update</button>
      ) : (
        <button onClick={addCourses}>Add</button>
      )}

      <hr />

      {courses.map((course) => (
        <div key={course._id}>
          <h3>{course.name}</h3>
          <p>{course.price}</p>
          <p>{course.desc}</p>
          <p>{course.seats}</p>

          <button onClick={() => editCourse(course)}>Edit</button>

          <button onClick={() => deleteCourses(course._id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}

</div>
  );
}

export default App;
