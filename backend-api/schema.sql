USE tata_vehicledata;
CREATE TABLE IF NOT EXISTS AC_Data1 (
    AC_VIN VARCHAR(50),
    AC_Pressure_Actual INT,
    AC_Pressure_Prefill_Actual INT,
    AC_Pressure_Decay INT,
    AC_Vacuum_Actual INT,
    AC_Vacuum_Actual_Time INT,
    AC_Leak_Vacuum_Actual INT,
    AC_Leak_Vacuum_Result CHAR(10),
    AC_Leak_Vacuum_Actual_Time INT,
    AC_Vacuum2_Actual INT,
    AC_Vacuum2_Actual_Time INT,
    AC_Filling_Quantity_Actual INT,
    AC_Filling_Time_Actual INT,
    AC_Cycle_Time_Actual INT,
    AC_RESULT CHAR(6)
);
CREATE TABLE UREA_DATA2 (
    VC_No VARCHAR(50),
    VIN_No VARCHAR(50),
    Set_Quantity FLOAT,
    Actual_Quantity FLOAT,
    Set_Process_Time INT,
    Actual_Process_Time INT,
    Result VARCHAR(50)
);
CREATE TABLE UREA_DATA3 (
    VC_No VARCHAR(50),
    VIN_No VARCHAR(50),
    Set_Quantity FLOAT,
    Actual_Quantity FLOAT,
    Set_Process_Time INT,
    Actual_Process_Time INT,
    Result VARCHAR(50)
);
    
CREATE TABLE IF NOT EXISTS CLUTCH_DATA1 (
    Date_Time DATETIME,
    CT_VIN VARCHAR(50),
    CT_VC VARCHAR(30),
    CT_Pressure_Build_Actual CHAR(10),
    CT_Pressure_Stable_Actual CHAR(10),
    CT_Pressure_Leak_Actual CHAR(10),
    CT_COA_Vacuum_Actual FLOAT,
    CT_Fine_Vacuum_Actual FLOAT,
    CT_Vacuum_Actual FLOAT,
    CT_Vacuum_Leak_Actual FLOAT,
    CT_Filling_Volume_Actual FLOAT,
    CT_Filling_Pressure_Actual FLOAT,
    CT_Delta_Pressure_Actual CHAR(10),
    CT_Oil_Fill_Pressure_Act FLOAT,
    CT_Air_Vent_Actual CHAR(10),
    CT_Process_Time INT,
    CT_Result VARCHAR(20)
);
CREATE TABLE IF NOT EXISTS COOLANT_DATA1 (
    CL_VIN VARCHAR(50),
    CL_VC VARCHAR(30),
    CL_AIRING_ACTUAL FLOAT,
    CL_AIRING_LEAK_ACTUAL FLOAT,
    CL_AIRING_LEAK_HOLD FLOAT, -- Assuming "HOLD..." means HOLD
    CL_AIR_VENT_ACTUAL FLOAT,
    CL_VACUUM_ACTUAL FLOAT,
    CL_VACUUM_TIME INT,
    CL_VACUUM_LEAK_ACTUAL FLOAT,
    CL_VACUUM_CHECK_TIME INT,
    CL_REVACUUM_ACTUAL FLOAT,
    CL_REVACUUM_TIME INT,
    CL_OIL_FILLING_PRESSURE FLOAT, -- Assuming "PRESSU..." means PRESSURE
    CL_OIL_ACTUAL_QTY FLOAT,
    CL_OIL_FILLING_ACTUAL INT, -- This column name looks incomplete ("ACTUA..." usually implies ACTUAL or ACTUATED)
    CL_AUX_TANK_FILLED_Q CHAR(8), -- Assuming "Q" is for Quantity or similar
    CL_CYCLE_TIME INT,
    CL_PROCESS_COMPLETE INT,
    CL_RESULT VARCHAR(20)
);
CREATE TABLE IF NOT EXISTS POWERTSTEERING_DATA1 (
    PAS_VIN VARCHAR(50),
    PAS_VC VARCHAR(30),
    PAS_AIRING_ACTUAL FLOAT,
    PAS_AIRING_LEAK_HOLD FLOAT, -- Assuming "HOLD..." means HOLD
    PAS_AIRING_LEAK_ACTUAL FLOAT, -- Assuming "ACTU..." means ACTUAL
    PAS_AIR_VENT_ACTUAL FLOAT,
    PAS_VACUUM_ACTUAL FLOAT,
    PAS_VACUUM_LEAK_ACTUAL FLOAT, -- Assuming "AC..." means ACTUAL
    PAS_REVACUUM_ACTUAL FLOAT,
    PAS_OIL_QTY_ACTUAL FLOAT,
    PAS_OIL_PRESSURE_ACTUAL FLOAT, -- Assuming "ACT..." means ACTUAL
    PAS_DELTA_PRESSURE_ACTUAL CHAR(8), -- Assuming "A..." means ACTUAL
    PAS_PROCESS_COMPLETE INT,
    PAS_CYCLE_TIME INT,
    PAS_RESULT VARCHAR(10)
);

CREATE TABLE IF NOT EXISTS AC_Data2 (
    AC_VIN VARCHAR(50),
    AC_Pressure_Actual INT,
    AC_Pressure_Prefill_Actual INT,
    AC_Pressure_Decay INT,
    AC_Vacuum_Actual INT,
    AC_Vacuum_Actual_Time INT,
    AC_Leak_Vacuum_Actual INT,
    AC_Leak_Vacuum_Result CHAR(10),
    AC_Leak_Vacuum_Actual_Time INT,
    AC_Vacuum2_Actual INT,
    AC_Vacuum2_Actual_Time INT,
    AC_Filling_Quantity_Actual INT,
    AC_Filling_Time_Actual INT,
    AC_Cycle_Time_Actual INT,
    AC_RESULT CHAR(6)
);
CREATE TABLE IF NOT EXISTS CLUTCH_DATA2 (
    Date_Time DATETIME,
    CT_VIN VARCHAR(50),
    CT_VC VARCHAR(30),
    CT_Pressure_Build_Actual CHAR(10),
    CT_Pressure_Stable_Actual CHAR(10),
    CT_Pressure_Leak_Actual CHAR(10),
    CT_COA_Vacuum_Actual FLOAT,
    CT_Fine_Vacuum_Actual FLOAT,
    CT_Vacuum_Actual FLOAT,
    CT_Vacuum_Leak_Actual FLOAT,
    CT_Filling_Volume_Actual FLOAT,
    CT_Filling_Pressure_Actual FLOAT,
    CT_Delta_Pressure_Actual CHAR(10),
    CT_Oil_Fill_Pressure_Act FLOAT,
    CT_Air_Vent_Actual CHAR(10),
    CT_Process_Time INT,
    CT_Result VARCHAR(20)
);
CREATE TABLE IF NOT EXISTS COOLANT_DATA2 (
    CL_VIN VARCHAR(50),
    CL_VC VARCHAR(30),
    CL_AIRING_ACTUAL FLOAT,
    CL_AIRING_LEAK_ACTUAL FLOAT,
    CL_AIRING_LEAK_HOLD FLOAT, -- Assuming "HOLD..." means HOLD
    CL_AIR_VENT_ACTUAL FLOAT,
    CL_VACUUM_ACTUAL FLOAT,
    CL_VACUUM_TIME INT,
    CL_VACUUM_LEAK_ACTUAL FLOAT,
    CL_VACUUM_CHECK_TIME INT,
    CL_REVACUUM_ACTUAL FLOAT,
    CL_REVACUUM_TIME INT,
    CL_OIL_FILLING_PRESSURE FLOAT, -- Assuming "PRESSU..." means PRESSURE
    CL_OIL_ACTUAL_QTY FLOAT,
    CL_OIL_FILLING_ACTUAL INT, -- This column name looks incomplete ("ACTUA..." usually implies ACTUAL or ACTUATED)
    CL_AUX_TANK_FILLED_Q CHAR(8), -- Assuming "Q" is for Quantity or similar
    CL_CYCLE_TIME INT,
    CL_PROCESS_COMPLETE INT,
    CL_RESULT VARCHAR(20)
);
CREATE TABLE IF NOT EXISTS POWERTSTEERING_DATA2 (
    PAS_VIN VARCHAR(50),
    PAS_VC VARCHAR(30),
    PAS_AIRING_ACTUAL FLOAT,
    PAS_AIRING_LEAK_HOLD FLOAT, -- Assuming "HOLD..." means HOLD
    PAS_AIRING_LEAK_ACTUAL FLOAT, -- Assuming "ACTU..." means ACTUAL
    PAS_AIR_VENT_ACTUAL FLOAT,
    PAS_VACUUM_ACTUAL FLOAT,
    PAS_VACUUM_LEAK_ACTUAL FLOAT, -- Assuming "AC..." means ACTUAL
    PAS_REVACUUM_ACTUAL FLOAT,
    PAS_OIL_QTY_ACTUAL FLOAT,
    PAS_OIL_PRESSURE_ACTUAL FLOAT, -- Assuming "ACT..." means ACTUAL
    PAS_DELTA_PRESSURE_ACTUAL CHAR(8), -- Assuming "A..." means ACTUAL
    PAS_PROCESS_COMPLETE INT,
    PAS_CYCLE_TIME INT,
    PAS_RESULT VARCHAR(10)
);

CREATE TABLE IF NOT EXISTS DIESEL_DATA3 (
    DL_VIN VARCHAR(30),
    DL_VC VARCHAR(20),
    DL_ACT_QTY FLOAT,
    DL_RESULT VARCHAR(10)
);

CREATE TABLE IF NOT EXISTS AC_Data3 (
    AC_VIN VARCHAR(50),
    AC_Pressure_Actual INT,
    AC_Pressure_Prefill_Actual INT,
    AC_Pressure_Decay INT,
    AC_Vacuum_Actual INT,
    AC_Vacuum_Actual_Time INT,
    AC_Leak_Vacuum_Actual INT,
    AC_Leak_Vacuum_Result CHAR(10),
    AC_Leak_Vacuum_Actual_Time INT,
    AC_Vacuum2_Actual INT,
    AC_Vacuum2_Actual_Time INT,
    AC_Filling_Quantity_Actual INT,
    AC_Filling_Time_Actual INT,
    AC_Cycle_Time_Actual INT,
    AC_RESULT CHAR(6)
);
CREATE TABLE IF NOT EXISTS CLUTCH_DATA3 (
    Date_Time DATETIME,
    CT_VIN VARCHAR(50),
    CT_VC VARCHAR(30),
    CT_Pressure_Build_Actual CHAR(10),
    CT_Pressure_Stable_Actual CHAR(10),
    CT_Pressure_Leak_Actual CHAR(10),
    CT_COA_Vacuum_Actual FLOAT,
    CT_Fine_Vacuum_Actual FLOAT,
    CT_Vacuum_Actual FLOAT,
    CT_Vacuum_Leak_Actual FLOAT,
    CT_Filling_Volume_Actual FLOAT,
    CT_Filling_Pressure_Actual FLOAT,
    CT_Delta_Pressure_Actual CHAR(10),
    CT_Oil_Fill_Pressure_Act FLOAT,
    CT_Air_Vent_Actual CHAR(10),
    CT_Process_Time INT,
    CT_Result VARCHAR(20)
);
CREATE TABLE IF NOT EXISTS COOLANT_DATA3 (
    CL_VIN VARCHAR(50),
    CL_VC VARCHAR(30),
    CL_AIRING_ACTUAL FLOAT,
    CL_AIRING_LEAK_ACTUAL FLOAT,
    CL_AIRING_LEAK_HOLD FLOAT, -- Assuming "HOLD..." means HOLD
    CL_AIR_VENT_ACTUAL FLOAT,
    CL_VACUUM_ACTUAL FLOAT,
    CL_VACUUM_TIME INT,
    CL_VACUUM_LEAK_ACTUAL FLOAT,
    CL_VACUUM_CHECK_TIME INT,
    CL_REVACUUM_ACTUAL FLOAT,
    CL_REVACUUM_TIME INT,
    CL_OIL_FILLING_PRESSURE FLOAT, -- Assuming "PRESSU..." means PRESSURE
    CL_OIL_ACTUAL_QTY FLOAT,
    CL_OIL_FILLING_ACTUAL INT, -- This column name looks incomplete ("ACTUA..." usually implies ACTUAL or ACTUATED)
    CL_AUX_TANK_FILLED_Q CHAR(8), -- Assuming "Q" is for Quantity or similar
    CL_CYCLE_TIME INT,
    CL_PROCESS_COMPLETE INT,
    CL_RESULT VARCHAR(20)
);
CREATE TABLE POWERTSTEERING_DATA3(
    PAS_VIN VARCHAR(50),
    PAS_VC VARCHAR(30),
    PAS_AIRING_ACTUAL FLOAT,
    PAS_AIRING_LEAK_HOLD FLOAT, -- Assuming "HOLD..." means HOLD
    PAS_AIRING_LEAK_ACTUAL FLOAT, -- Assuming "ACTU..." means ACTUAL
    PAS_AIR_VENT_ACTUAL FLOAT,
    PAS_VACUUM_ACTUAL FLOAT,
    PAS_VACUUM_LEAK_ACTUAL FLOAT, -- Assuming "AC..." means ACTUAL
    PAS_REVACUUM_ACTUAL FLOAT,
    PAS_OIL_QTY_ACTUAL FLOAT,
    PAS_OIL_PRESSURE_ACTUAL FLOAT, -- Assuming "ACT..." means ACTUAL
    PAS_DELTA_PRESSURE_ACTUAL CHAR(8), -- Assuming "A..." means ACTUAL
    PAS_PROCESS_COMPLETE INT,
    PAS_CYCLE_TIME INT,
    PAS_RESULT VARCHAR(10)
);



SELECT * FROM area;
SELECT * FROM machine;
SELECT * FROM urea_data1;
SELECT * FROM ac_data;
SHOW TABLES;
ALTER TABLE clutch_data1 DROP COLUMN TIMESTAMP;
ALTER TABLE clutch_data2 DROP COLUMN TIMESTAMP;

ALTER TABLE clutch_data3 DROP COLUMN TIMESTAMP;
ALTER TABLE powertsteering_data1 RENAME TO powersteering_data1;
ALTER TABLE powertsteering_data2 RENAME TO powersteering_data2;
ALTER TABLE powertsteering_data3 RENAME TO powersteering_data3;





