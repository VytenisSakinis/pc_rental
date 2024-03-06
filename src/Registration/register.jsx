import { useState } from "react";

export default function RegistrationWindow() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    email: "",
    birthDate: "",
    phone: "",
  });

  const [addressDetails, setAddressDetails] = useState({
    country: "",
    county: "",
    municipality: "",
    city: "",
    postalCode: "",
    street: "",
    streetNumber: "",
    apartmentNumber: ""
  })

  function setFieldInAddressDetails(e, field) {
    const newObject = { ...addressDetails};
    newObject[field] = e.target.value;
    console.log(newObject);
    setAddressDetails(newObject)
  }



  function setFieldInUserDetails(e, field)
  {
    const newObject = { ...userDetails};
    newObject[field] = e.target.value;
    console.log(newObject);
    setUserDetails(newObject)
  }


  return (
    <div className="bg-slate-300 w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-4/5 min-h-[400px] max-w-[1000px] bg-white p-4">
        <h1 className="text-xl font-bold">Registration</h1>
        <hr className="mb-4" />
        <form>
          <div className="mb-2">
            <label>
              <span className="w-1/5 inline-block">Username</span>
              <input
                value={userDetails.username}
                onChange={(e) => setFieldInUserDetails(e, "username")}
                type="text"
                placeholder="Username"
                className="outline-none border w-4/5 px-2 py-1 rounded-md"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="w-1/5 inline-block">Password</span>
              <input
                value={userDetails.password}
                onChange={(e) => setFieldInUserDetails(e, "password")}
                type="Password"
                placeholder="Enter your password"
                className="outline-none border w-4/5 px-2 py-1 rounded-md"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="w-1/5 inline-block">E-mail</span>
              <input
                value={userDetails.email}
                onChange={(e) => setFieldInUserDetails(e, "email")}
                type="email"
                placeholder="Enter your E-mail address"
                className="outline-none border w-4/5 px-2 py-1 rounded-md"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="w-1/5 inline-block">Birth date</span>
              <input
                value={userDetails.birthDate}
                onChange={(e) => setFieldInUserDetails(e, "birthDate")}
                type="date"
                className="outline-none border w-4/5 px-2 py-1 rounded-md"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="w-1/5 inline-block">Phone number</span>
              <input
                value={userDetails.phone}
                onChange={(e) => setFieldInUserDetails(e, "phone")}
                type="text"
                placeholder="Enter your phone number ex. +3706 .."
                className="outline-none border w-4/5 px-2 py-1 rounded-md"
              />
            </label>
          </div>
          <h1 className="text-xl font-bold mt-2">Address information</h1>
          <hr className="mb-4" />
          <div className="mb-2">
            <label>
              <span className="w-1/5 inline-block">Country</span>
              <select className="w-4/5 py-1 px-2 border rounded-md outline-none border"  onChange={(e) => setFieldInAddressDetails(e, "country")}>
                <option>Lithuania</option>
                <option>Latvia</option>
                <option>United Kingdom</option>
              </select>
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="w-1/5 inline-block">County</span>
              <input
               onChange={(e) => setFieldInAddressDetails(e, "county")}
                type="text"
                placeholder="Enter your county"
                className="outline-none border w-4/5 px-2 py-1 rounded-md"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="w-1/5 inline-block">Municipality</span>
              <input
               onChange={(e) => setFieldInAddressDetails(e, "municipality")}
                type="text"
                placeholder="Enter your municipality"
                className="outline-none border w-4/5 px-2 py-1 rounded-md"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="w-1/5 inline-block">City</span>
              <input
               onChange={(e) => setFieldInAddressDetails(e, "city")}
                type="text"
                placeholder="Enter your city"
                className="outline-none border w-4/5 px-2 py-1 rounded-md"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="w-1/5 inline-block">Postal code</span>
              <input
               onChange={(e) => setFieldInAddressDetails(e, "postalCode")}
                type="text"
                placeholder="Enter your postal code"
                className="outline-none border w-4/5 px-2 py-1 rounded-md"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="w-1/5 inline-block">Street</span>
              <input
               onChange={(e) => setFieldInAddressDetails(e, "street")}
                type="text"
                placeholder="Enter your street"
                className="outline-none border w-4/5 px-2 py-1 rounded-md"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="w-1/5 inline-block">Street number</span>
              <input
               onChange={(e) => setFieldInAddressDetails(e, "streetNumber")}
                type="text"
                placeholder="Street number"
                className="outline-none border w-1/5 px-2 py-1 rounded-md"
              />
            </label>
            <span>-</span>
            <input
             onChange={(e) => setFieldInAddressDetails(e, "apartmentNumber")}
              type="text"
              placeholder="Apartment number"
              className="outline-none border w-1/5 px-2 py-1 rounded-md"
            />
          </div>
          <div>
            <label>
              <input type="checkbox" required />
              <span className="ml-2">
                I agree to terms of use and privacy policy
              </span>
            </label>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 rounded text-white px-6 py-2 mt-4 w-[100%]">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
