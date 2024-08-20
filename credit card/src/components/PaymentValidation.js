import React, { useState, useEffect , useCallback }  from "react";
import "./PaymentValidation.css";

const PaymentValidation = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});
  const currentYear = new Date().getFullYear();

  

  const validateForm =useCallback( () => {
    const newErrors = {};

    if (!/^\d{16}$/.test(cardNumber)) {
      newErrors.cardNumber = "Invalid Card Number";
    }
    if (!/^[a-zA-Z\s]+$/.test(cardName)) {
      newErrors.cardName = "Invalid Card Name";
    }
    if (!/^(0[1-9]|1[0-2])$/.test(expiryMonth)) {
      newErrors.expiryMonth = "Invalid Month";
    }
    if (!/^\d{4}$/.test(expiryYear) || expiryYear < currentYear || expiryYear > currentYear + 3) {
      newErrors.expiryYear = "Invalid Year";
    }
    if (!/^\d{3}$/.test(cvv)) {
      newErrors.cvv = "Invalid CVV";
    }

    setErrors(newErrors);
  },[cardNumber, cardName, expiryMonth, expiryYear, cvv, currentYear]);

  useEffect(() => {
    validateForm();
  },[validateForm]);  // Now validateForm is a dependency

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const isFormValid = () => {
    return (
      !Object.keys(errors).length &&
      cardNumber &&
      cardName &&
      expiryMonth &&
      expiryYear &&
      cvv
    );
  };

  return (
    <div className="mt-30 layout-column justify-content-center align-items-center">
      <div className="card outlined" style={{ width: "650px" }}>
        <div data-testid="debit-card">
          <h3 style={{ textAlign: "center" }}>Card Details</h3>
          <br />
          <div className="debit-card-body">
            <p className="debit-card-bank">Bank Name</p>
            <p className="debit-card-no">{cardNumber.padEnd(16, 'X')}</p>
            <br />
            <div
              style={{ height: "45px", backgroundColor: "black" }}
              className="debit-card-stripe"
            ></div>
            <p>
              <span className="debit-card-holder-name">{cardName || "HOLDER NAME"}</span>
              <span className="debit-card-date">{expiryMonth || "MM"}/{expiryYear || "YYYY"}</span>
              <span className="debit-card-cvv">{cvv || "CVV"}</span>
            </p>
          </div>
        </div>
        <section>
          <div className="pa-50">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="layout-column mb-15">
                <input
                  placeholder="Card Number"
                  data-testid="numberInput"
                  value={cardNumber}
                  onChange={handleChange(setCardNumber)}
                />
                {errors.cardNumber && (
                  <p className="invalid-text" data-testid="numberInputError">
                    {errors.cardNumber}
                  </p>
                )}
              </div>
              <div className="layout-column mb-15">
                <input
                  placeholder="Name On Card"
                  data-testid="nameInput"
                  value={cardName}
                  onChange={handleChange(setCardName)}
                />
                {errors.cardName && (
                  <p className="invalid-text" data-testid="nameInputError">
                    {errors.cardName}
                  </p>
                )}
              </div>
              <div className="flex justify-content-around align-items-center">
                <div className="layout-column mb-30">
                  <input
                    placeholder="Expiry Month"
                    data-testid="monthInput"
                    value={expiryMonth}
                    onChange={handleChange(setExpiryMonth)}
                  />
                  {errors.expiryMonth && (
                    <p className="invalid-text" data-testid="monthInputError">
                      {errors.expiryMonth}
                    </p>
                  )}
                </div>
                <div className="layout-column mb-30">
                  <input
                    placeholder="Expiry Year"
                    data-testid="yearInput"
                    value={expiryYear}
                    onChange={handleChange(setExpiryYear)}
                  />
                  {errors.expiryYear && (
                    <p className="invalid-text" data-testid="yearInputError">
                      {errors.expiryYear}
                    </p>
                  )}
                </div>
                <div className="layout-column mb-30">
                  <input
                    placeholder="CVV"
                    data-testid="cvvInput"
                    value={cvv}
                    onChange={handleChange(setCvv)}
                  />
                  {errors.cvv && (
                    <p className="invalid-text" data-testid="cvvInputError">
                      {errors.cvv}
                    </p>
                  )}
                </div>
              </div>
              <div className="layout-column mb-30">
                <button
                  type="submit"
                  className="mx-0"
                  data-testid="submitButton"
                  disabled={!isFormValid()}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PaymentValidation;
/*
### Common Regular Expressions Summary

#### 1. Numbers
- **Only digits**: `^\d+$`
  - Matches a string of digits, like `12345`.

#### 2. Letters
- **Only lowercase letters**: `^[a-z]+$`
  - Matches a string containing one or more lowercase letters, like `abcde`.
- **Only uppercase letters**: `^[A-Z]+$`
  - Matches a string containing one or more uppercase letters, like `ABCDE`.
- **Both uppercase and lowercase letters**: `^[a-zA-Z]+$`
  - Matches a string containing one or more uppercase or lowercase letters, like `AbCdE`.

#### 3. Dates and Times
- **Month**: `^(0[1-9]|1[0-2])$`
  - Matches months from `01` to `12`.
- **Date format (YYYY-MM-DD)**: `^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$`
  - Matches dates in the format like `2023-08-19`.

#### 4. Special Characters
- **Email addresses**: `^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$`
  - Matches common email address formats.
- **URLs**: `^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$`
  - Matches URLs with http and https protocols.

#### 5. File Paths
- **File extensions (e.g., .jpg, .png)**: `\.\w+$`
  - Matches file extensions like `.jpg`, `.png`, etc.

#### 6. Password Complexity
- **Password (minimum 8 characters, includes letters and numbers)**: `^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$`
  - Matches passwords with at least 8 characters, including at least one letter and one number.

### Usage Scenarios
- These regular expressions can be used for validating form inputs in the frontend, such as registration forms, search bars, etc.
- They can also be used for backend processing to ensure that the data received meets expected formats.
- Suitable for analyzing log files to extract information in specific formats.

### Notes
- The performance of regular expressions may vary by browser or environment.
- Care should be taken to properly escape characters, especially before special characters like dots.

*/
