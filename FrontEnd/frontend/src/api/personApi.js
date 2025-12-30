import axios from "axios";

const BASE_URL = "http://localhost:8080/projet_soa/projet/persons"; 

export const getAllPersons = () => axios.get(BASE_URL);

export const getPersonById = (id) => axios.get(`${BASE_URL}/${id}`);

export const searchPersonByName = (nom) => axios.get(`${BASE_URL}/search?nom=${nom}`);

export const addPerson = (person) => axios.post(BASE_URL, person); 

export const updatePerson = (id, person) => axios.put(`${BASE_URL}/${id}`, person);

export const deletePerson = (id) => axios.delete(`${BASE_URL}/${id}`);
