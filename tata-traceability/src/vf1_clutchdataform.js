import React, { useState } from 'react';
import axios from 'axios';

const VF1_ClutchDataForm = () => {
  const [formData, setFormData] = useState({
        
        CT_VIN: "",
        CT_VC: "",
        CT_Pressure_Build_Actual: "",
        CT_Pressure_Stable_Actual: "",
        CT_Pressure_Leak_Actual: "",
        CT_COA_Vacuum_Actual: "",
        CT_Fine_Vacuum_Actual: "",
        CT_Vacuum_Actual: "",
        CT_Vacuum_Leak_Actual: "",
        CT_Filling_Volume_Actual: "",
        CT_Filling_Pressure_Actual: "",
        CT_Delta_Pressure_Actual: "",
        CT_Oil_Fill_Pressure_Act: "",
        CT_Air_Vent_Actual: "",
        CT_Process_Time: "",
        CT_Result: "",
    });

    const [submitMessage, setSubmitMessage] = useState("");

    // --- CRITICAL FIX ---
    // The formKey must EXACTLY match the key in your backend's `formTableMap`
    const formKey = "vehicle factory1-CLUTCH OIL FM";
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
                 
        CT_VIN: "",
        CT_VC: "",
        CT_Pressure_Build_Actual: "",
        CT_Pressure_Stable_Actual: "",
        CT_Pressure_Leak_Actual: "",
        CT_COA_Vacuum_Actual: "",
        CT_Fine_Vacuum_Actual: "",
        CT_Vacuum_Actual: "",
        CT_Vacuum_Leak_Actual: "",
        CT_Filling_Volume_Actual: "",
        CT_Filling_Pressure_Actual: "",
        CT_Delta_Pressure_Actual: "",
        CT_Oil_Fill_Pressure_Act: "",
        CT_Air_Vent_Actual: "",
        CT_Process_Time: "",
        CT_Result: "",
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
        if (key.includes("Time") || key.includes("Pressure") || key.includes("Vacuum") || key.includes("Volume")) {
            return "number";
        }
        return "text";
    };

    // Inline styles for a cleaner UI
    const formStyle = {
        maxWidth: "700px",
        margin: "0 auto",
        padding: "25px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
    };
    const fieldStyle = { marginBottom: "15px" };
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
        backgroundColor: "#007bff",
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
            <h2 style={{ textAlign: "center" }}>VF1 - Clutch Filling Form</h2>
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
 
export default VF1_ClutchDataForm;