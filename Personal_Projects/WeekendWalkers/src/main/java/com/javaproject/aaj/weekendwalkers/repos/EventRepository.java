package com.javaproject.aaj.weekendwalkers.repos;

import java.util.Date;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.javaproject.aaj.weekendwalkers.models.Club;
import com.javaproject.aaj.weekendwalkers.models.Event;

@Repository
public interface EventRepository extends CrudRepository<Event, Long> {
	@Override
	List<Event> findAll();

	List<Event> getAllByDateBetween(Date startDate, Date endDate);

	List<Event> getAllByHostedBy(Club club);
}
