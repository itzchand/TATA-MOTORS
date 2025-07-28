import React, { useState } from 'react';
import axios from 'axios';
function Vf1_acdataform() {
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
    const formKey = "vehicle factory1-AC OIL FM";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Dynamically construct the URL to be consistent with your backend
        const url = `http://localhost:3001/api/${formKey}`;

        try {
            const response = await axios.post(url, formData);
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
            setSubmitMessage("❌ Submission failed. Please try again.");
            console.error("Error submitting form:", error.response ? error.response.data : error.message);
        }
    };

    // Inline styles for the form
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
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    };

    const messageStyle = {
        marginTop: "15px",
        padding: "10px",
        borderRadius: "5px",
        color: submitMessage.includes('✅') ? 'green' : 'red',
        backgroundColor: submitMessage.includes('✅') ? '#e6ffed' : '#ffe6e6',
        border: `1px solid ${submitMessage.includes('✅') ? 'green' : 'red'}`,
    };

    return (
        <div style={formStyle}>
            <h2>VF1 - AC Filling Form</h2>
            <form onSubmit={handleSubmit}>
                {Object.entries(formData).map(([key, value]) => (
                    <div key={key} style={fieldStyle}>
                        <label htmlFor={key} style={labelStyle}>
                            {key.replace(/_/g, " ")}
                        </label>
                        <input
                            type="text"
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
   

export default Vf1_acdataform;