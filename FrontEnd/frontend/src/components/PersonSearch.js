import React, { useState, useEffect, useRef } from "react";
import { getPersonById, searchPersonByName, getAllPersons } from "../api/personApi";
import { TextField, Button, Box } from "@mui/material";

const PersonSearch = ({ onSearchResult, refreshList }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const timeoutId = useRef();

  useEffect(() => {
    clearTimeout(timeoutId.current);

    const fetchData = async () => {
      if (name.trim() === "") {
        const res = await getAllPersons();
        onSearchResult(res.data);
      } else {
        try {
          const res = await searchPersonByName(name);
          onSearchResult(res.data);
        } catch {
          onSearchResult([]);
        }
      }
    };

    timeoutId.current = setTimeout(fetchData, 500);

    return () => clearTimeout(timeoutId.current);
  }, [name, onSearchResult]);

  const handleSearchById = async () => {
    if (!id) return;
    try {
      const res = await getPersonById(id);
      onSearchResult([res.data]);
    } catch {
      onSearchResult([]);
      alert("Person not found");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 500, margin: "0 auto" }}>
      <TextField
        placeholder="Search by Name"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Box sx={{ display: "flex", gap: 1 }}>
        <TextField
          placeholder="Search by ID"
          fullWidth
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={handleSearchById}>
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default PersonSearch;
