package com.hms.doctorlogin.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Appointments {
	@Id
	@SequenceGenerator(name = "generator1", sequenceName = "Appointment_ID", allocationSize = 1, initialValue = 2001)
	@GeneratedValue(generator = "generator1", strategy = GenerationType.SEQUENCE)
	private Long appointmentID;
	private String name;
	private String age;
	private String symptoms;
	private String contactNumber;
}
