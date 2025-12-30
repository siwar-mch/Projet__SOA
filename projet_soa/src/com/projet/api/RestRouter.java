package com.projet.api;

import java.util.List;
import java.util.Map;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.projet.entities.Person;
import com.projet.service.PersonService;
import com.projet.service.PersonServiceImpl;

@Path("/persons")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class RestRouter {
	
	private PersonService personService = new PersonServiceImpl();

    @POST
    public Response addPerson(Person person) {
        Map<String, String> result = personService.addPerson(person);

        if ("OK".equals(result.get("Status"))) {
            return Response.status(Response.Status.CREATED)
                           .entity(result)
                           .build();
        }
        return Response.status(Response.Status.BAD_REQUEST)
                       .entity(result)
                       .build();
    }

    @GET
    @Path("/{id}")
    public Response getPersonById(@PathParam("id") Long id) {
        Person person = personService.getPersonById(id);

        if (person == null) {
            return Response.status(Response.Status.NOT_FOUND)
                           .entity("Person not found")
                           .build();
        }
        return Response.ok(person).build();
    }

    @GET
    public Response getAllPeople() {
        List<Person> people = personService.getAllPeople();
        return Response.ok(people).build();
    }

    @GET
    @Path("/search")
    public Response getPeopleByName(@QueryParam("nom") String nom) {
        if (nom == null || nom.isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST)
                           .entity("Query parameter 'nom' is required")
                           .build();
        }

        List<Person> people = personService.getAllPeopleByName(nom);
        return Response.ok(people).build();
    }

    @PUT
    @Path("/{id}")
    public Response updatePerson(@PathParam("id") Long id, Person person) {
        Person updatedPerson = personService.updatePerson(id, person);

        if (updatedPerson == null) {
            return Response.status(Response.Status.NOT_FOUND)
                           .entity("Person not found")
                           .build();
        }
        return Response.ok(updatedPerson).build();
    }

    @DELETE
    @Path("/{id}")
    public Response deletePerson(@PathParam("id") Long id) {

        Map<String, String> result = personService.deletePerson(id);

        if ("OK".equals(result.get("Status"))) {
            return Response.status(Response.Status.NO_CONTENT).build();
        }

        if ("NOT_FOUND".equals(result.get("Status"))) {
            return Response.status(Response.Status.NOT_FOUND)
                           .entity("Person not found")
                           .build();
        }

        return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                       .entity("Error while deleting person")
                       .build();
    }

}