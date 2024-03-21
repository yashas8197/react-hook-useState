import { useState } from "react";
import "./App.css";

const ZipcodeValidation = () => {
  const [zipcode, setZipcode] = useState();

  const clickHandler = () => {
    zipcode.length > 5
      ? alert("Valid Zipcode")
      : alert("Invalid Zipcode. Please enter 5 digits");
  };

  return (
    <div>
      <label for="zipcode">Enter Your Zipcode: </label>
      <input
        type="number"
        id="zipcode"
        onChange={(e) => setZipcode(e.target.value)}
      />
      <button onClick={clickHandler}>Validate Zipcode</button>
    </div>
  );
};

const FullNameValidation = () => {
  const [fullName, setFullName] = useState();

  const clickHandler = () => {
    let userName = fullName
      .split(" ")
      .map((name) => name.slice(0, 1).toUpperCase() + name.slice(1));

    alert(`Capitalize Full Name: ${userName.join(' ')}`)
  };

  return (
    <div>
      <label for="fullName">Enter Your Full Name: </label>
      <input id="fullName" onChange={(e) => setFullName(e.target.value)} />
      <button onClick={clickHandler}>Capitalize Name</button>
    </div>
  );
};

const SearchTerm = () => {
  const [searchTerm, setSearchTerm] = useState(' ')

  const resetSearchTerm = (e) => {
    setSearchTerm(' ')
  }

  return (
    <div>
      <label>Enter Search Terms: </label>
      <input id="searchBar" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      <button onClick={resetSearchTerm}>Reset Search Term</button>
      {
        searchTerm && <p>{searchTerm}</p>
      }
    </div>
  )
}

const ResetAddress = () => {
  const [getAddress, setGetAddress] = useState('')

  const clickHandler = () => {
    setGetAddress(' ')
  }
  return (
    <div>
      <label for='address'>Enter Your Address: </label>
      <input id="address" value={getAddress} onChange={(e) => setGetAddress(e.target.value)}/>
      <button onClick={clickHandler}>Reset Address</button>
      {
        getAddress && <p>{getAddress}</p>
      }
    </div>
  )
}

const ClearMessage = () => {
  const [clearMessage, setClearMessage] = useState('')

  const clickHandler = () => {
    setClearMessage('')
  }
  
  return (
    <div>
      <label for='message'>Enter a Message: </label>
      <input value={clearMessage} id="message" onChange={(e) => setClearMessage(e.target.value)}/>
      <button onClick={clickHandler}>Clear Message</button>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <ZipcodeValidation />
      <br />
      <FullNameValidation />
      <br/>
      <SearchTerm/>
      <br/>
      <ResetAddress/>
      <br/>
      <ClearMessage/>
    </main>
  );
}
