import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { CustomerContext } from "@/app/CustomerContext";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import { Customer, location } from "@/app/types";
import { useRouter } from "next/navigation";
import { getLocations } from "@/app/api";
export default function CheckoutForm() {
  const [locations, setLocations] = useState<location[]>([]);
  const fetchLocations = async () => {
    const res = await getLocations();
    setLocations(res.data.locations);
  };
  useEffect(() => {
    fetchLocations();
  }, []);
  const router = useRouter();
  const { customer, setCustomer, orderType } = useContext(CustomerContext);
  const [formError, setFormError] = useState<string | null>(null);

  const handleAddressSelect = (place: google.maps.places.PlaceResult) => {
    setCustomer((prevState: Customer) => ({
      ...prevState,
      address: place?.formatted_address,
    }));
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setCustomer((prevState: Customer) => ({
      ...prevState,
      pickupSpot: value,
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

    // Custom validation logic
    if (!/^\d{10}$/.test(customer.phoneNumber)) {
      setFormError("אנא הזן מספר טלפון תקין");
      return;
    }
    setFormError(null); // Clear any previous form error

    // Your form submission logic here
    router.push("/checkout/summary");
    setFormError(null); // Clear any previous form error
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="firstName" className={styles.label}>
        שם פרטי
      </label>
      <input
        className={styles.input}
        placeholder="הכנס שם פרטי..."
        type="text"
        id="firstName"
        value={customer.firstName}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="lastName" className={styles.label}>
        שם משפחה
      </label>
      <input
        className={styles.input}
        placeholder="הכנס שם משפחה..."
        type="text"
        id="lastName"
        value={customer.lastName}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="phoneNumber" className={styles.label}>
        מספר טלפון
      </label>
      <input
        className={styles.input}
        placeholder="הכנס מספר טלפון..."
        type="tel"
        id="phoneNumber"
        value={customer.phoneNumber}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="email" className={styles.label}>
        כתובת מייל
      </label>
      <input
        className={styles.input}
        placeholder="הכנס כתובת מייל..."
        type="email"
        id="email"
        value={customer.email}
        onChange={handleInputChange}
        required
      />
      {orderType === "delivery" ? (
        <>
          <label htmlFor="address" className={styles.label}>
            כתובת משלוח
          </label>
          <ReactGoogleAutocomplete
            className={styles.input}
            onChange={handleInputChange}
            id="address"
            defaultValue={customer.address ? customer.address : ""}
            apiKey={process.env.GOOGLE_API_KEY}
            onPlaceSelected={handleAddressSelect}
            options={{
              types: ["address"],
              componentRestrictions: { country: "il" },
            }}
            language="he"
            required
          />
        </>
      ) : (
        <>
          <label htmlFor="pickupSpot" className={styles.label}>
            נקודת איסוף
          </label>
          <div className={styles.input}>
            <select
              style={{border:"none"}}
              id="pickupSpot"
              value={customer.pickupSpot ? customer.pickupSpot : ""}
              onChange={handleSelectChange}
              required
            >
              <option value="" disabled hidden>
                בחר נקודת איסוף
              </option>
              {locations.map((location) => (
                <option key={location.id} value={location.name}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
        </>
      )}

      {formError && <p style={{ color: "red" }}>{formError}</p>}

      <button type="submit" className={styles.button}>
        סיכום הזמנה
      </button>
    </form>
  );
}
