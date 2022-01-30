import React from "react";
import { useForm } from "react-hook-form";
import "./AddNewBooking.css";
import swal from "sweetalert";

const AddNewBooking = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const uri = `https://hidden-sea-52711.herokuapp.com/allbooking`;
    fetch(uri, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
        }
      });
  };
  return (
    <div className="add-services">
      <h2 className="text-center">
        Add New <span>Destination</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", {
            required: true,
            maxLength: 20,
          })}
          placeholder="Place Name"
          required
        />
        <textarea
          {...register("description")}
          placeholder="Place description"
          required
        />
        <input
          type="number"
          {...register("price")}
          placeholder="Price"
          required
        />
        <input {...register("img")} placeholder="Image Url" required />

        <input type="submit" value="submit" className="submit-form" />
      </form>
    </div>
  );
};

export default AddNewBooking;
