import React, { useState } from 'react';
import axios from 'axios';
function Vf3_acdataform() {
      const [formData, setFormData] = useState({
        AC_VIN: "",
        AC_Pressure_Actual: "",
        AC_Pressure_Prefill_Actual: "",
        AC_Pressure_Decay: "",
        AC_Vacuum_Actual: "",
        AC_Vacuum_Actual_Time: "",
        AC_Leak_Vacuum_Actual: "",
        AC_Leak_Vacuum_Result: "",
        AC_Leak_Vacuum_Actual_Time: "",
        AC_Vacuum2_Actual: "",
        AC_Vacuum2_Actual_Time: "",
        AC_Filling_Quantity_Actual: "",
        AC_Filling_Time_Actual: "",
        AC_Cycle_Time_Actual: "",
        AC_RESULT: "",
    });

    const [submitMessage, setSubmitMessage] = useState("");

    // --- CRITICAL FIX ---
    // The formKey must EXACTLY match the key in your backend's `formTableMap`
    const formKey = "vehicle factory3-AC OIL FM";
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
                AC_VIN: "",
                AC_Pressure_Actual: "",
                AC_Pressure_Prefill_Actual: "",
                AC_Pressure_Decay: "",
                AC_Vacuum_Actual: "",
                AC_Vacuum_Actual_Time: "",
                AC_Leak_Vacuum_Actual: "",
                AC_Leak_Vacuum_Result: "",
                AC_Leak_Vacuum_Actual_Time: "",
                AC_Vacuum2_Actual: "",
                AC_Vacuum2_Actual_Time: "",
                AC_Filling_Quantity_Actual: "",
                AC_Filling_Time_Actual: "",
                AC_Cycle_Time_Actual: "",
                AC_RESULT: "",
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
        if (key.includes("Pressure") || key.includes("Vacuum") || key.includes("Quantity") || key.includes("Time") || key.includes("Cycle")) {
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
        backgroundColor: "#dc3545",
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
            <h2 style={{ textAlign: "center" }}>VF3 - AC Filling Form</h2>
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

    

export default Vf3_acdataform;