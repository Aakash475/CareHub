package com.hms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hms.entity.Patients;

@Repository
public interface PatientRepository extends JpaRepository<Patients, Long> {

}