import React, { useState, useEffect } from "react";
import "./PaymentValidation.css";

const PaymentValidation = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    validateForm();
  }, [cardNumber, cardName, expiryMonth, expiryYear, cvv]);

  const validateForm = () => {
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
  };

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
