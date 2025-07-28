import React, { useState } from 'react';
import axios from 'axios';

const Vf1_coolant = () => {
  const [formData, setFormData] = useState({
       
        CL_VIN: "",
        CL_VC: "",
        CL_AIRING_ACTUAL: "",
        CL_AIRING_LEAK_ACTUAL: "",
        CL_AIRING_LEAK_HOLD: "",
        CL_AIR_VENT_ACTUAL: "",
        CL_VACUUM_ACTUAL: "",
        CL_VACUUM_TIME: "",
        CL_VACUUM_LEAK_ACTUAL: "",
        CL_VACUUM_CHECK_TIME: "",
        CL_REVACUUM_ACTUAL: "",
        CL_REVACUUM_TIME: "",
        CL_OIL_FILLING_PRESSURE: "",
        CL_OIL_ACTUAL_QTY: "",
        CL_OIL_FILLING_ACTUAL: "",
        CL_AUX_TANK_FILLED_Q: "",
        CL_CYCLE_TIME: "",
        CL_PROCESS_COMPLETE: "",
        CL_RESULT: "",
    });

    const [submitMessage, setSubmitMessage] = useState("");

    // --- CRITICAL FIX ---
    // The formKey must EXACTLY match the key in your backend's `formTableMap`
    const formKey = "vehicle factory1-COOLANT OIL FM";
    const API_URL = `http://localhost:3001/api/${formKey}`;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
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
                
                CL_VIN: "",
                CL_VC: "",
                CL_AIRING_ACTUAL: "",
                CL_AIRING_LEAK_ACTUAL: "",
                CL_AIRING_LEAK_HOLD: "",
                CL_AIR_VENT_ACTUAL: "",
                CL_VACUUM_ACTUAL: "",
                CL_VACUUM_TIME: "",
                CL_VACUUM_LEAK_ACTUAL: "",
                CL_VACUUM_CHECK_TIME: "",
                CL_REVACUUM_ACTUAL: "",
                CL_REVACUUM_TIME: "",
                CL_OIL_FILLING_PRESSURE: "",
                CL_OIL_ACTUAL_QTY: "",
                CL_OIL_FILLING_ACTUAL: "",
                CL_AUX_TANK_FILLED_Q: "",
                CL_CYCLE_TIME: "",
                CL_PROCESS_COMPLETE: "",
                CL_RESULT: "",
            });
        } catch (error) {
            setSubmitMessage("❌ Submission failed. Try again.");
            console.error("Submission error:", error.response ? error.response.data : error.message);
        }
    };

    // Inline styles for a cleaner UI
    const formStyle = {
        maxWidth: "750px",
        margin: "20px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        backgroundColor: "#f2f2f2",
        boxShadow: "0 0 12px rgba(0, 0, 0, 0.1)",
    };
    const fieldStyle = {
        marginBottom: "16px",
    };
    const labelStyle = {
        display: "block",
        fontWeight: "bold",
        marginBottom: "6px",
        fontSize: "15px",
    };
    const inputStyle = {
        width: "100%",
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #bbb",
    };
    const buttonStyle = {
        marginTop: "25px",
        padding: "12px 24px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "16px",
    };
    const messageStyle = {
        marginTop: "15px",
        fontWeight: "bold",
        color: submitMessage.startsWith("✅") ? "green" : "red",
    };
    const formatLabel = (key) => {
        return key.replace(/_/g, " ").replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    };

    // Helper function to determine input type
    const getinputType = (key) => {
        if (key.includes("time")) return "datetime-local";
        if (key.includes("QTY") || key.includes("PRESSURE") || key.includes("LEAK")) return "number";
        return "text";
    };

    return (
        <div style={formStyle}>
            <h2 style={{ textAlign: "center" }}>VF1 - Coolant Filling Form</h2>
            <form onSubmit={handleSubmit}>
                {Object.entries(formData).map(([key, value]) => (
                    <div key={key} style={fieldStyle}>
                        <label htmlFor={key} style={labelStyle}>
                            {formatLabel(key)}
                        </label>
                        <input
                            type={getinputType(key.toUpperCase())}
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
  

export default Vf1_coolant;