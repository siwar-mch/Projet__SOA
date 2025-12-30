package com.projet.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.projet.entities.Person;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class PersonServiceImpl implements PersonService {

	EntityManagerFactory emf = Persistence.createEntityManagerFactory("projet");
	EntityManager em = emf.createEntityManager();

	@Override
	public Map<String, String> addPerson(Person person) {

		Map<String, String> result = new HashMap<>();

		try {

			if (!em.getTransaction().isActive())// securite de code -> on ne commence une transaction que lorsqu'on a
												// pas deja une transaction ouverte
			{
				em.getTransaction().begin(); // commencer une transaction (obligatoire pour insert/update/delete)
			}
			em.persist(person); // insert into
			em.getTransaction().commit();// executer la requete sql
			em.clear(); // pour nettoyer em
			
			result.put("Status", "OK");

		} catch (Exception e) {

			e.printStackTrace();
			if (em.getTransaction().isActive()) {
				em.getTransaction().rollback();// retour arriere
			}
			result.put("Status", "KO");

		}
		return result;
	}

	@Override
	public Person getPersonById(Long id) {
		try {

			if (!em.getTransaction().isActive()) {
				em.getTransaction().begin();
			}
			return em.find(Person.class, id);// select .... where primary key = ...

		} catch (Exception e) {

			e.printStackTrace();
			return null;

		}
	}

	@Override
	public List<Person> getAllPeople() {

		try {
			if (!em.getTransaction().isActive())// securite de code -> on ne commence une transaction que lorsqu'on a
												// pas deja une transaction ouverte
			{
				em.getTransaction().begin(); // commencer une transaction (obligatoire pour insert/update/delete)
			}

			return em.createQuery("SELECT p FROM Person p", Person.class).getResultList();

		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<Person> getAllPeopleByName(String nom) {

		try {
			if (!em.getTransaction().isActive())// securite de code -> on ne commence une transaction que lorsqu'on a
												// pas deja une transaction ouverte
			{
				em.getTransaction().begin(); // commencer une transaction (obligatoire pour insert/update/delete)
			}

			return em.createQuery("SELECT p FROM Person p WHERE p.nom LIKE :nom", Person.class)
					.setParameter("nom", "%" + nom + "%").getResultList();

		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public Person updatePerson(Long id, Person person) {
		try {
			if (!em.getTransaction().isActive()) {
				em.getTransaction().begin();
			}

			Person existingPerson = em.find(Person.class, id);

			if (existingPerson == null) {
				return null;
			}

			existingPerson.setNom(person.getNom());
			existingPerson.setAge(person.getAge());
			existingPerson.setEtat_civil(person.getEtat_civil());
			existingPerson.setCin(person.getCin());
			existingPerson.setEmail(person.getEmail());

			em.getTransaction().commit();

			return existingPerson;

		} catch (Exception e) {
			if (em.getTransaction().isActive()) {
				em.getTransaction().rollback();
			}
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public Map<String, String> deletePerson(Long id) {

		Map<String, String> result = new HashMap<>();

		try {
			if (!em.getTransaction().isActive()) {
				em.getTransaction().begin();
			}

			Person person = em.find(Person.class, id);

			if (person == null) {
				result.put("Status", "NOT_FOUND");
				return result;
			}

			em.remove(person); // DELETE
			em.getTransaction().commit();

			result.put("Status", "OK");

		} catch (Exception e) {
			if (em.getTransaction().isActive()) {
				em.getTransaction().rollback();
			}
			e.printStackTrace();
			result.put("Status", "KO");
		}

		return result;
	}

}
