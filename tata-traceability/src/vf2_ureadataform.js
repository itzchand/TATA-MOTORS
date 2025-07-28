import React, { useState } from 'react';
//import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import './form.css'; // Optional: for basic styling

function Vf2_Ureadataform() {
    // State to hold the form data
   const [formData, setFormData] = useState({
        VC_No: "",
        VIN_No: "",
        Set_Quantity: "",
        Actual_Quantity: "",
        Set_Process_Time: "",
        Actual_Process_Time: "",
        Result: "",
    });

    const [submitMessage, setSubmitMessage] = useState("");

    // --- CRITICAL FIX ---
    // The formKey must EXACTLY match the key in your backend's `formTableMap`
    const formKey = "vehicle factory2-UREA OIL FM";
    const API_URL = `http://localhost:3001/api/${formKey}`;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitMessage("Submitting...");

        try {
            const response = await axios.post(API_URL, formData);
            setSubmitMessage("✅ Data submitted successfully!");
            console.log("Submission successful:", response.data);

            // Reset the form after successful submission
            setFormData({
                VC_No: "",
                VIN_No: "",
                Set_Quantity: "",
                Actual_Quantity: "",
                Set_Process_Time: "",
                Actual_Process_Time: "",
                Result: "",
            });
        } catch (error) {
            console.error("Submission error:", error.response ? error.response.data : error.message);
            setSubmitMessage("❌ Submission failed. Try again.");
        }
    };

    // Helper function to format label text
    const formatLabel = (key) => {
        return key.replace(/_/g, " ").replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
    };

    // Helper function to determine input type
    const getinputType = (key) => {
        if (key.includes("Quantity") || key.includes("Time")) {
            return "number";
        }
        return "text";
    };

    // Inline styles for a cleaner UI
    const formStyle = {
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
    };
    const fieldStyle = { marginBottom: "15px" };
    const labelStyle = {
        display: "block",
        fontWeight: "bold",
        marginBottom: "5px",
    };
    const inputStyle = {
        width: "100%",
        padding: "8px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    };
    const buttonStyle = {
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    };
    const messageStyle = {
        marginTop: "15px",
        fontWeight: "bold",
        color: submitMessage.includes("✅") ? "green" : "red",
    };

    return (
        <div style={formStyle}>
            <h2 style={{ textAlign: "center" }}>VF2 - Urea Filling Form</h2>
            <form onSubmit={handleSubmit}>
                {Object.entries(formData).map(([key, value]) => (
                    <div style={fieldStyle} key={key}>
                        <label style={labelStyle}>{formatLabel(key)}</label>
                        <input
                            type={getinputType(key)}
                            name={key}
                            value={value}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>
                ))}
                <button type="submit" style={buttonStyle}>
                    Submit
                </button>
                {submitMessage && <p style={messageStyle}>{submitMessage}</p>}
            </form>
        </div>
    );
};

export default Vf2_Ureadataform;