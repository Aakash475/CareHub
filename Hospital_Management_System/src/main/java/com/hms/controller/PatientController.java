package com.hms.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.entity.Patients;
import com.hms.repository.PatientRepository;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/hospital")
public class PatientController {
	
	@Autowired
	private PatientRepository patientRepo;
	
	@PostMapping("/register")
	public Patients createPatient(@RequestBody Patients patient) {
		return patientRepo.save(patient);
	}
	
	@GetMapping("/findAllPatients")
	public List<Patients> showAllPatients(){
		return patientRepo.findAll();
	}
	
	@GetMapping("/getByID/{id}")
	public ResponseEntity<Patients> showPatientById(@PathVariable Long id) {
		Patients patient = patientRepo.findById(id).orElseThrow(()->new IllegalArgumentException("Patient Not Found!"));
		return ResponseEntity.ok(patient);
	}
	
	@DeleteMapping("/remove/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable Long id) {
		Patients patient = patientRepo.findById(id).orElseThrow(()->new IllegalArgumentException("Patient Not Found!"));
		patientRepo.delete(patient);
		Map<String, Boolean> response = new HashMap<String, Boolean>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Patients> updatePatient(@PathVariable Long id, @RequestBody Patients updatedPatient) {
		Patients patient = patientRepo.findById(id).orElseThrow(()->new IllegalArgumentException("Patient Not Found"));
		patient.setPatientName(updatedPatient.getPatientName());
		patient.setPatientAge(updatedPatient.getPatientAge());
		patient.setPatientBloodGroup(updatedPatient.getPatientBloodGroup());
		patient.setPatientDose(updatedPatient.getPatientDose());
		patient.setPatientFee(updatedPatient.getPatientFee());
		patient.setPatientNeed(updatedPatient.getPatientNeed());
		patient.setPatientPrescription(updatedPatient.getPatientPrescription());
		Patients saved = patientRepo.save(patient);
		return ResponseEntity.ok(saved);
	}
}
