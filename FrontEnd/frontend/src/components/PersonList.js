import React from "react";
import { deletePerson } from "../api/personApi";
import { Grid, Card, CardContent, Typography, Button, CardActions } from "@mui/material";

const PersonList = ({ persons, refreshList, onEdit }) => {

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this person?")) {
      await deletePerson(id);
      refreshList();
    }
  };

  if (!persons.length) return <Typography align="center">No persons found.</Typography>;

  return (
    <Grid container spacing={2}>
      {persons.map((p) => (
        <Grid item xs={12} sm={6} md={4} key={p.id}>
          <Card sx={{ backgroundColor: "#e3f2fd" }}>
            <CardContent>
              <Typography variant="h6">{p.nom}</Typography>
              <Typography>ID: {p.id}</Typography>
              <Typography>CIN: {p.cin}</Typography>
              <Typography>Age: {p.age}</Typography>
              <Typography>Etat Civil: {p.etat_civil}</Typography>
              <Typography>Email: {p.email}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="outlined" color="primary" onClick={() => onEdit(p)}>Edit</Button>
              <Button size="small" variant="outlined" color="error" onClick={() => handleDelete(p.id)}>Delete</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PersonList;
