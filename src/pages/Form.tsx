import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  address: string;
  email: string;
  contact: string;
  photo: File | null;
  cv: File | null;
}

interface FormErrors {
  name?: string;
  address?: string;
  email?: string;
  contact?: string;
  photo?: string;
  cv?: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    address: "",
    email: "",
    contact: "",
    photo: null,
    cv: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.name) tempErrors.name = "Name is required!";
    if (!formData.address) tempErrors.address = "Address is required!";
    if (!formData.email) tempErrors.email = "Email is required!";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      tempErrors.email = "Email is not valid.";
    if (!formData.contact) tempErrors.contact = "Contact is required!";
    if (!formData.photo) tempErrors.photo = "Photo is required!";
    if (
      formData.photo &&
      !["image/jpeg", "image/png", "image/gif"].includes(formData.photo.type)
    ) {
      tempErrors.photo = "Photo must be a JPEG, PNG, or GIF!";
    }
    if (formData.cv && "application/pdf" !== formData.cv.type) {
      tempErrors.cv = "CV must be a pdf format!";
    }
    if (!formData.cv) tempErrors.cv = "CV is required!";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data:", formData);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        className="border px-10 py-5 rounded-lg border-black"
        onSubmit={handleSubmit}
      >
        <h2 className="font-bold text-center mb-4">FORM</h2>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mb-4 text-black border border-black px-2 py-1 rounded"
        />
        {errors.name && <div className="text-red-500">{errors.name}</div>}
        <br />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mb-4 text-black border border-black px-2 py-1 rounded"
        />
        {errors.address && <div className="text-red-500">{errors.address}</div>}
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mb-4 text-black border border-black px-2 py-1 rounded"
        />
        {errors.email && <div className="text-red-500">{errors.email}</div>}
        <br />

        <label htmlFor="contact">Contact:</label>
        <input
          type="number"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="mb-4 text-black border border-black px-2 py-1 rounded"
        />
        {errors.contact && <div className="text-red-500">{errors.contact}</div>}
        <br />

        <label htmlFor="photo">Photo: </label>
        <input
          type="file"
          name="photo"
          onChange={handleChange}
          className="mb-4"
          accept="image/*"
        />
        {errors.photo && <div className="text-red-500">{errors.photo}</div>}
        <br />

        <label htmlFor="cv">CV: </label>
        <input
          type="file"
          name="cv"
          onChange={handleChange}
          className="mb-4"
          accept="application/pdf"
        />
        {errors.cv && <div className="text-red-500">{errors.cv}</div>}
        <br />

        <button className="border border-black px-3 py-1 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
