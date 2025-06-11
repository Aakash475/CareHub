package com.hms.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import lombok.Data;

@Data
@Entity
public class Patients {
	@Id
	@SequenceGenerator(name = "generator", sequenceName = "PATIENT_ID", allocationSize = 1, initialValue = 1001)
	@GeneratedValue(generator = "generator", strategy = GenerationType.SEQUENCE)
	private Integer patientID;
	private String patientName;
	private Integer patientAge;
	private String patientBloodGroup;
	private String patientPrescription;
	private String patientDose;
	private Double patientFee;
	private String patientNeed;
}
