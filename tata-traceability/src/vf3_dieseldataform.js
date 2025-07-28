import React, { useState } from 'react';
import axios from 'axios';

const Vf3_dieselform = () => {
  const [formData, setFormData] = useState({
        DL_VIN: "",
        DL_VC: "",
        DL_ACT_QTY: "",
        DL_RESULT: "",
    });

    const [submitMessage, setSubmitMessage] = useState("");

    // --- CRITICAL FIX ---
    // The formKey must EXACTLY match the key in your backend's `formTableMap`
    const formKey = "vehicle factory3-DIESEL OIL FM";
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
                DL_VIN: "",
                DL_VC: "",
                DL_ACT_QTY: "",
                DL_RESULT: "",
            });
        } catch (error) {
            console.error("Submission error:", error.response ? error.response.data : error.message);
            setSubmitMessage("❌ Submission failed. Please try again.");
        }
    };

    // Helper function to format label text
    const formatLabel = (key) => {
        return key.replace(/_/g, " ").replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
    };

    // Helper function to determine input type
    const getinputType = (key) => {
        if (key.includes("QTY")) {
            return "number";
        }
        return "text";
    };

    // Inline styles for a cleaner UI
    const formStyle = {
        maxWidth: "500px",
        margin: "30px auto",
        padding: "20px",
        backgroundColor: "#f1f1f1",
        border: "1px solid #ccc",
        borderRadius: "12px",
        fontFamily: "Arial, sans-serif",
    };
    const fieldStyle = {
        marginBottom: "15px",
    };
    const labelStyle = {
        display: "block",
        fontWeight: "bold",
        marginBottom: "6px",
    };
    const inputStyle = {
        width: "100%",
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #aaa",
    };
    const buttonStyle = {
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
    };
    const messageStyle = {
        marginTop: "15px",
        fontWeight: "bold",
        color: submitMessage.includes("✅") ? "green" : "red",
    };

    return (
        <div style={formStyle}>
            <h2 style={{ textAlign: "center" }}>VF3 - Diesel Filling Form</h2>
            <form onSubmit={handleSubmit}>
                {Object.entries(formData).map(([key, value]) => (
                    <div key={key} style={fieldStyle}>
                        <label htmlFor={key} style={labelStyle}>
                            {formatLabel(key)}
                        </label>
                        <input
                            type={getinputType(key)}
                            id={key}
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

export default Vf3_dieselform;