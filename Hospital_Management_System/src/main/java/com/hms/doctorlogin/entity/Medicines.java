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
public class Medicines {
	@Id
	@SequenceGenerator(name = "generator2", sequenceName = "Medicine_ID", allocationSize = 1, initialValue = 3001)
	@GeneratedValue(generator = "generator2", strategy = GenerationType.SEQUENCE)
	private Long medicineID;
	private String drugName;
	private String stock;
}
