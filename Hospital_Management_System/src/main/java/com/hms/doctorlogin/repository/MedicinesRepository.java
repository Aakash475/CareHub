package com.hms.doctorlogin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hms.doctorlogin.entity.Medicines;

@Repository
public interface MedicinesRepository extends JpaRepository<Medicines, Long> {

}
