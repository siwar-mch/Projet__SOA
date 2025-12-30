package com.projet.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Person {
	
	@Id //primary key
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@Column(length=8,nullable=false,unique=true)
	private String cin;

	private String nom;
	
	private int age;
	
	@Enumerated(EnumType.STRING)
    @Column(nullable = false)
	private EtatCivil etat_civil;
	
	private String email;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCin() {
		return cin;
	}

	public void setCin(String cin) {
		this.cin = cin;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public EtatCivil getEtat_civil() {
		return etat_civil;
	}

	public void setEtat_civil(EtatCivil etat_civil) {
		this.etat_civil = etat_civil;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
}
