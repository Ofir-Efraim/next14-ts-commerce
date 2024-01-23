import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
import { CustomerContext } from "@/app/CustomerContext";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import { Customer } from "@/app/types";
import TextField from "@mui/material/TextField";

export default function DeliveryForm() {
  const { customer, setCustomer } = useContext(CustomerContext);
  const [formError, setFormError] = useState<string | null>(null);

  const handleAddressSelect = (place: google.maps.places.PlaceResult) => {
    setCustomer((prevState: Customer) => ({
      ...prevState,
      address: place?.formatted_address,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCustomer((prevState: Customer) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Custom validation logic, if needed
    if (
      !customer.firstName ||
      !customer.lastName ||
      !customer.phoneNumber ||
      !customer.email ||
      !customer.address
    ) {
      setFormError("All fields are required");
      return;
    }

    setFormError(null); // Clear any previous form error

    // Your form submission logic here
    // For example, you can send the data to a server or perform any other action
    console.log("Form submitted:", customer);
    setFormError(null); // Clear any previous form error
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        type="text"
        id="firstName"
        value={customer.firstName}
        onChange={handleInputChange}
        required
      />

      <TextField
        label="Last Name"
        type="text"
        id="lastName"
        value={customer.lastName}
        onChange={handleInputChange}
        required
      />

      <TextField
        label="Phone Number"
        type="tel"
        id="phoneNumber"
        value={customer.phoneNumber}
        onChange={handleInputChange}
        required
      />

      <TextField
        label="Email"
        type="email"
        id="email"
        value={customer.email}
        onChange={handleInputChange}
        required
      />
      <ReactGoogleAutocomplete
        className={styles.address}
        defaultValue={customer.address ? customer.address : ""}
        apiKey={process.env.GooglePlacesApiKey}
        onPlaceSelected={handleAddressSelect}
        options={{
          types: ["address"],
          componentRestrictions: { country: "il" },
        }}
        language="he"
        required
      />

      {formError && <p style={{ color: "red" }}>{formError}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
