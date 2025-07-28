import React, { useState } from 'react';
import axios from 'axios';

const Vf3_powersteering= () => {
  const [formData, setFormData] = useState({
                PAS_VIN: "",
                PAS_VC: "",
                PAS_AIRING_ACTUAL: "",
                PAS_AIRING_LEAK_HOLD: "",
                PAS_AIRING_LEAK_ACTUAL: "",
                PAS_AIR_VENT_ACTUAL: "",
                PAS_VACUUM_ACTUAL: "",
                PAS_VACUUM_LEAK_ACTUAL: "",
                PAS_REVACUUM_ACTUAL: "",
                PAS_OIL_QTY_ACTUAL: "",
                PAS_OIL_PRESSURE_ACTUAL: "",
                PAS_DELTA_PRESSURE_ACTUAL: "",
                PAS_PROCESS_COMPLETE: "",
                PAS_CYCLE_TIME: "",
                PAS_RESULT: "",
    });

    const [submitMessage, setSubmitMessage] = useState("");

    // --- CRITICAL FIX ---
    // The formKey must EXACTLY match the key in your backend's `formTableMap`
    const formKey = "vehicle factory3-POWER STEERING OIL FM";
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
                PAS_VIN: "",
                PAS_VC: "",
                PAS_AIRING_ACTUAL: "",
                PAS_AIRING_LEAK_HOLD: "",
                PAS_AIRING_LEAK_ACTUAL: "",
                PAS_AIR_VENT_ACTUAL: "",
                PAS_VACUUM_ACTUAL: "",
                PAS_VACUUM_LEAK_ACTUAL: "",
                PAS_REVACUUM_ACTUAL: "",
                PAS_OIL_QTY_ACTUAL: "",
                PAS_OIL_PRESSURE_ACTUAL: "",
                PAS_DELTA_PRESSURE_ACTUAL: "",
                PAS_PROCESS_COMPLETE: "",
                PAS_CYCLE_TIME: "",
                PAS_RESULT: "",
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
        if (key.includes("QTY") || key.includes("PRESSURE") || key.includes("LEAK") || key.includes("VACUUM") || key.includes("TIME") || key.includes("CYCLE")) {
            return "number";
        }
        return "text";
    };

    // Inline styles for a cleaner UI
    const formStyle = {
        maxWidth: "750px",
        margin: "30px auto",
        padding: "25px",
        border: "1px solid #ccc",
        borderRadius: "12px",
        backgroundColor: "#fff8e1",
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
        padding: "8px",
        borderRadius: "5px",
        border: "1px solid #ccc",
    };
    const buttonStyle = {
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#ff9800",
        color: "white",
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
            <h2 style={{ textAlign: "center" }}>VF3 - Power Steering Filling Form</h2>
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
 
export default Vf3_powersteering;