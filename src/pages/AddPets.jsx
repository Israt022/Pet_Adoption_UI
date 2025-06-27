import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import apiClient from "../services/api-client";
import authApiClient from "../services/auth-api-client";

const AddPets = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [categories, setCategories] = useState([]);
  const [petsId, setPetsId] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Categories
  useEffect(() => {
    apiClient.get("/categories/").then((res) => {
      console.log(res.data);
      setCategories(res.data);
    });
  }, []);

  // Submit Pets Details
  const handlePetsAdd = async (data) => {
    console.log(data);
    try {
      const petsRes = await authApiClient.post("/pets/", data);
      setPetsId(petsRes.data.id);
      console.log(petsRes.data);
    } catch (error) {
      console.log("Error adding Pets", error);
    }
  };

  // Handle Image Change
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
    setImages(files);
    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
  };

  // Handle Image Upload
  const handleUpload = async () => {
    if (!images.length) return alert("Please select images.");
    // [file, file]
    setLoading(true);
    try {
      for (const image of images) {
        const formData = new FormData();
        formData.append("image", image);
        console.log(formData);
        await authApiClient.post(`/pets/${petsId}/images/`, formData);
        setLoading(false);
      }
      alert("Images uploaded successfully");
    } catch (error) {
      console.log(("Error uploading image", error));
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border border-base-200 bg-gray-950 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add New Pets</h2>
      {!petsId ? (
        <form onSubmit={handleSubmit(handlePetsAdd)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Pets Name</label>
            <input
              {...register("name", { required: true })}
              className="input input-bordered w-full bg-gray-700"
              placeholder="Pets Name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">This field is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              {...register("description", { required: true })}
              className="textarea textarea-bordered w-full bg-gray-700"
              placeholder="Description"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-xs">This field is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Price</label>
            <input
              type="text"
              {...register("cost", {
                required: "This Field is required",
                validate: (value) => {
                  const parsedValue = parseFloat(value);
                  return !isNaN(parsedValue) || "Please enter a valid number!";
                },
              })}
              className="input input-bordered w-full bg-gray-700"
              placeholder="Price"
            />
            {errors.cost && (
              <p className="text-red-500 text-xs">{errors.cost.message}</p>
            )}
          </div>

          {/* Dropdown for categories */}
          <div>
            <label className="block text-sm font-medium ">Category</label>
            <select
                {...register("category", { required: true })}
                className="select select-bordered w-full bg-gray-700 text-white"
                >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                    <option key={cat.id} value={cat.value}>
                    {cat.label}
                    </option>
                ))}
            </select>
            {errors.category && (
              <p className="text-red-500 text-xs">This field is required</p>
            )}
          </div>
          {/* Breed field */}
            <div>
                <label className="block text-sm font-medium">Breed</label>
                <input
                    {...register("breed", { required: true })}
                    className="input input-bordered w-full bg-gray-700"
                    placeholder="Breed"
                />
                {errors.breed && (
                    <p className="text-red-500 text-xs">This field is required</p>
                )}
            </div>

            {/* Age field */}
            <div>
                <label className="block text-sm font-medium">Age</label>
                <input
                    type="number"
                    {...register("age", { required: true, min: 0 })}
                    className="input input-bordered w-full bg-gray-700"
                    placeholder="Age"
                />
                {errors.age && (
                    <p className="text-red-500 text-xs">This field is required</p>
                )}
            </div>

          <button type="submit" className="btn btn-warning w-full text-white">
            Add Pets
          </button>
        </form>
      ) : (
        <div>
          <h3 className="text-lg font-medium mb-2">Upload Pets Images</h3>
          <input
            type="file"
            multiple
            accept="image/*"
            className="file-input file-input-bordered bg-gray-700 w-full"
            onChange={handleImageChange}
          />
          {previewImages.length > 0 && (
            <div className="flex gap-2 mt-2">
              {previewImages.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt="Preview"
                  className="w-16 h-16 rounded-md object-cover bg-gray-700"
                />
              ))}
            </div>
          )}

          <button
            onClick={handleUpload}
            className="btn btn-warning w-full mt-2"
            disabled={loading}
          >
            {loading ? "Uploading images..." : "Upload Images"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPets;