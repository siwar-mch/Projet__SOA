import React, { useState, useEffect } from "react";
import { Box, TextField, Button, MenuItem, Snackbar, Alert, Typography } from "@mui/material";

const PersonForm = ({ onPersonAdded, editingPerson, setEditingPerson }) => {
  const [person, setPerson] = useState({
    cin: "",
    nom: "",
    age: "",
    etat_civil: "SINGLE",
    email: "",
  });

  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  useEffect(() => {
    if (editingPerson) {
      setPerson({ ...editingPerson, age: editingPerson.age || "" });
    } else {
      setPerson({ cin: "", nom: "", age: "", etat_civil: "SINGLE", email: "" });
    }
  }, [editingPerson]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...person, age: Number(person.age) };

    try {
      await onPersonAdded(payload);

      setSnackbar({
        open: true,
        message: editingPerson ? "Person updated!" : "Person added!",
        severity: "success",
      });

      setPerson({ cin: "", nom: "", age: "", etat_civil: "SINGLE", email: "" });
      if (editingPerson) setEditingPerson(null);
    } catch {
      setSnackbar({
        open: true,
        message: "Error saving person",
        severity: "error",
      });
    }
  };

  return (
    <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }} onSubmit={handleSubmit}>
      <Typography variant="h5" align="center">
        {editingPerson ? "Edit Person" : "Add Person"}
      </Typography>

      <TextField label="CIN" name="cin" value={person.cin} onChange={handleChange} required />
      <TextField label="Name" name="nom" value={person.nom} onChange={handleChange} required />
      <TextField label="Age" type="number" name="age" value={person.age} onChange={handleChange} required />
      <TextField select label="Etat Civil" name="etat_civil" value={person.etat_civil} onChange={handleChange}>
        <MenuItem value="SINGLE">Single</MenuItem>
        <MenuItem value="MARRIED">Married</MenuItem>
        <MenuItem value="WIDOWED">Widowed</MenuItem>
        <MenuItem value="DIVORCED">Divorced</MenuItem>
      </TextField>
      <TextField label="Email" name="email" value={person.email} onChange={handleChange} />

      <Button type="submit" variant="contained" color={editingPerson ? "secondary" : "primary"}>
        {editingPerson ? "Update Person" : "Add Person"}
      </Button>

      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default PersonForm;
