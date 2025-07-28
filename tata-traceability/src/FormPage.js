
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

// --- Import all 16 specific form components ---
// !!! CRITICAL: These import names MUST EXACTLY MATCH your actual file names.
// Assuming files are in 'src/components/' (e.g., src/components/VF1_ACFillingForm.js)

// VF1 Forms
import vf1_acdataform from "./vf1_acdataform";
import vf1_clutchdataform from "./vf1_clutchdataform";
import vf1_coolantdataform from "./vf1_coolantdataform";
import vf1_powersteeringform from "./vf1_powersteeringform";
import vf1_Ureadataform from "./vf1_Ureadataform";
//vf2 form

import vf2_acdataform from "./vf2_acdataform";
import vf2_clutchdataform from "./vf2_clutchdataform";
import vf2_coolantdataform from "./vf2_coolantdataform";
import vf2_powersteering from "./vf2_powersteering";
import vf2_ureadataform from "./vf2_ureadataform";
//vf3 forms
import vf3_acdataform from "./vf3_acdataform";
import vf3_clutchdataform from "./vf3_clutchdataform";
import vf3_coolantdataform from "./vf3_coolantdataform";
import vf3_powersteering from "./vf3_powersteering";
import vf3_ureadataform from "./vf3_ureadataform";
import vf3_dieseldataform from "./vf3_dieseldataform";

// --- Component Mapping ---
// This map links the "area" (VFx) and "machine" names to their respective React components.
// The keys here must exactly match the combined strings generated in App.js's Dashboard.
const formComponentMap = {
  // VF1
  "vehicle factory1-AC OIL FM": vf1_acdataform,
  "vehicle factory1-CLUTCH OIL FM": vf1_clutchdataform,
  "vehicle factory1-COOLANT OIL FM": vf1_coolantdataform,
  "vehicle factory1-POWER STEERING OIL FM": vf1_powersteeringform,
  "vehicle factory1-UREA OIL FM": vf1_Ureadataform,

  // VF2
  "vehicle factory2-AC OIL FM": vf2_acdataform,
  "vehicle factory2-CLUTCH OIL FM": vf2_clutchdataform,
  "vehicle factory2-COOLANT OIL FM": vf2_coolantdataform,
  "vehicle factory2-POWER STEERING OIL FM": vf2_powersteering,
  "vehicle factory2-UREA OIL FM": vf2_ureadataform,

  // VF3
  "vehicle factory3-AC OIL FM": vf3_acdataform,
  "vehicle factory3-CLUTCH OIL FM": vf3_clutchdataform,
  "vehicle factory3-COOLANT OIL FM": vf3_coolantdataform,
  "vehicle factory3-POWER STEERING OIL FM": vf3_powersteering,
  "vehicle factory3-UREA OIL FM": vf3_ureadataform,
  "vehicle factory3-DIESEL OIL FM": vf3_dieseldataform,
};

const FormPage = () => {
  const location = useLocation(); // Hook to access the current location object
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Extract 'area' and 'machine' from the navigation state
  const { area, machine } = location.state || {}; // Default to empty object if state is null/undefined

  // --- MODIFICATION HERE ---
  // Change single quotes to backticks to correctly create a template literal
const formKey = `${area}-${machine}`;
  // Get the component from the map
  const SpecificForm = formComponentMap[formKey];

  // Basic styling for the container to center the form
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh", // Take full viewport height
    backgroundColor: "#f0f2f5", // Light background color
    padding: "20px",
  };
  const errorMessageStyle = {
    textAlign: "center",
    color: "#d32f2f",
    backgroundColor: "#ffebee",
    border: "1px solid #ef9a9a",
    borderRadius: "8px",
    padding: "20px",
    margin: "50px auto",
    maxWidth: "500px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  if (!area || !machine) {
    // If state is missing, it means direct access or an error in navigation
    return (
      <div style={containerStyle}>
        <div style={errorMessageStyle}>
          <h2>Error: Form Not Found</h2>
          <p>
            It seems you've navigated to this page without selecting a factory
            and machine.
          </p>
          <button
            onClick={() => navigate("/")}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (!SpecificForm) {
    // If a valid area/machine was passed but no component found in the map
    return (
      <div style={containerStyle}>
        <div style={errorMessageStyle}>
          <h2>Error: Form Component Not Found</h2>
          <p>
            No form component found for: <strong>Factory: {area}</strong> and{" "}
            <strong>Machine: {machine}</strong>.
          </p>
          <p>
            Please check the formComponentMap in FormPage.js and ensure the
            component is imported correctly.
          </p>
          <p>
            Also, verify the spelling of machine names in your dropdowns matches
            the formComponentMap.
          </p>
          <button
            onClick={() => navigate("/")}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  // If a valid component is found, render it
  return (
    <div style={containerStyle}>
      <SpecificForm />
    </div>
  );
};

export default FormPage;