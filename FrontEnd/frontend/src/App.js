import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import PersonList from "./components/PersonList";
import PersonForm from "./components/PersonForm";
import PersonSearch from "./components/PersonSearch";
import { getAllPersons, addPerson, updatePerson } from "./api/personApi";
import { Container, Paper } from "@mui/material";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [editingPerson, setEditingPerson] = useState(null);

  const navigate = useNavigate();

  const refreshList = async () => {
    try {
      const res = await getAllPersons();
      setPersons(res.data);
    } catch (error) {
      console.error("Error fetching persons:", error);
    }
  };

  useEffect(() => {
    refreshList();
  }, []);

  // Add or update person
  const handlePersonAdded = async (person) => {
    try {
      if (editingPerson) {
        await updatePerson(editingPerson.id, person);
        setEditingPerson(null);
      } else {
        await addPerson(person);
      }
      await refreshList();
      navigate("/"); // go back to list
    } catch (error) {
      console.error("Error saving person:", error);
    }
  };

  const handleEdit = (person) => {
    setEditingPerson(person);
    navigate("/form");
  };

  return (
    <>
      <Navbar navigate={navigate} refreshList={refreshList} />
      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PersonSearch onSearchResult={setPersons} refreshList={refreshList} />
                <PersonList
                  persons={persons}
                  refreshList={refreshList}
                  onEdit={handleEdit}
                />
              </>
            }
          />
          <Route
            path="/form"
            element={
              <Paper
                sx={{
                  padding: 4,
                  maxWidth: 500,
                  margin: "0 auto",
                  backgroundColor: "#f5f5f5",
                }}
              >
                <PersonForm
                  onPersonAdded={handlePersonAdded}
                  editingPerson={editingPerson}
                  setEditingPerson={setEditingPerson}
                />
              </Paper>
            }
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;
