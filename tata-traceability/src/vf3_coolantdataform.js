import React, { useState } from 'react';
import axios from 'axios';

const Vf3_coolant = () => {
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
        CL_OIL_FILLING_ACTUAL_Q: "",
        CL_AUX_TANK_FILLED: "",
        CL_CYCLE_TIME: "",
        CL_PROCESS_COMPLETE: "",
        CL_RESULT: "",
    });

    const [submitMessage, setSubmitMessage] = useState("");

    // --- CRITICAL FIX ---
    // The formKey must EXACTLY match the key in your backend's `formTableMap`
    const formKey = "vehicle factory3-COOLANT OIL FM";
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
        const lowerKey = key.toLowerCase();
        if (lowerKey === "date_time") return "datetime-local";
        if (lowerKey.includes("time") || lowerKey.includes("qty") || lowerKey.includes("pressure") || lowerKey.includes("vacuum") || lowerKey.includes("leak") || lowerKey.includes("cycle")) {
            return "number";
        }
        return "text";
    };

    // Inline styles for a cleaner UI
    const formStyle = {
        maxWidth: "750px",
        margin: "0 auto",
        padding: "25px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f1f7ff",
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
        backgroundColor: "#17a2b8",
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
            <h2 style={{ textAlign: "center" }}>VF3 - Coolant Filling Form</h2>
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
export default Vf3_coolant;