package com.projet.service;

import java.util.List;
import java.util.Map;

import com.projet.entities.Person;

public interface PersonService {
	
	public Map<String,String> addPerson(Person person);
	public Person getPersonById(Long id);
	public List<Person> getAllPeople();
	public List<Person> getAllPeopleByName(String nom);
    public Person updatePerson(Long id, Person person);
    public Map<String, String> deletePerson(Long id);

}
