import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddSchool = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("contact", data.contact);
    formData.append("email_id", data.email_id);
    formData.append("image", data.image[0]); // Get the file from the FileList

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/schools`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("School added successfully!");
      reset();
    } catch (error) {
      console.error("Error adding school:", error);
      alert("Failed to add school.");
    }
  };

  return (
    <div className="form-container">
      <h2>Add a New School</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* School Name */}
        <div className="form-group">
          <label>School Name</label>
          <input
            {...register("name", { required: "School name is required" })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        {/* Address */}
        <div className="form-group">
          <label>Address</label>
          <input
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && <p className="error">{errors.address.message}</p>}
        </div>

        {/* City */}
        <div className="form-group">
          <label>City</label>
          <input {...register("city", { required: "City is required" })} />
          {errors.city && <p className="error">{errors.city.message}</p>}
        </div>

        {/* State */}
        <div className="form-group">
          <label>State</label>
          <input {...register("state", { required: "State is required" })} />
          {errors.state && <p className="error">{errors.state.message}</p>}
        </div>

        {/* Contact */}
        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="number"
            {...register("contact", { required: "Contact is required" })}
          />
          {errors.contact && <p className="error">{errors.contact.message}</p>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email ID</label>
          <input
            type="email"
            {...register("email_id", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Entered value does not match email format",
              },
            })}
          />
          {errors.email_id && (
            <p className="error">{errors.email_id.message}</p>
          )}
        </div>

        {/* Image Upload */}
        <div className="form-group">
          <label>School Image</label>
          <input
            type="file"
            {...register("image", { required: "Image is required" })}
          />
          {errors.image && <p className="error">{errors.image.message}</p>}
        </div>

        <button type="submit">Add School</button>
      </form>
    </div>
  );
};

export default AddSchool;
