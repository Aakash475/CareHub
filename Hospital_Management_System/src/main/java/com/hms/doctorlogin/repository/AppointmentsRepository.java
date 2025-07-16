package com.hms.doctorlogin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hms.doctorlogin.entity.Appointments;

@Repository
public interface AppointmentsRepository extends JpaRepository<Appointments, Long> {

}