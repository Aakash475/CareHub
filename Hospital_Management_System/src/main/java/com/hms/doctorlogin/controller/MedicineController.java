package com.hms.doctorlogin.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.hms.doctorlogin.entity.Medicines;
import com.hms.doctorlogin.repository.MedicinesRepository;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/medicine")
public class MedicineController {
	@Autowired
	private MedicinesRepository medicineRepo;
	
	@PostMapping("/register")
	public Medicines createMedicine(@RequestBody Medicines medicine) {
		return medicineRepo.save(medicine);
	}
	
	@GetMapping("/findAllMedicines")
	public List<Medicines> showAllMedicines(){
		return medicineRepo.findAll();
	}
	
	@GetMapping("/findMedicine/{id}")
	public ResponseEntity<Medicines> getMedicineByID(@PathVariable Long id) {
		Medicines medicine = medicineRepo.findById(id).orElseThrow(()->new IllegalArgumentException("Medicine Not Found"));
		return ResponseEntity.ok(medicine);
	}
	
	@PutMapping("/updatemedicine/{id}")
	public ResponseEntity<Medicines> updateMedicine(@PathVariable Long id, @RequestBody Medicines medicine){
		Medicines med = medicineRepo.findById(id).orElseThrow(()->new IllegalArgumentException("Medicine Not found"));
		med.setDrugName(medicine.getDrugName());
		med.setStock(medicine.getStock());
		medicineRepo.save(med);
		return ResponseEntity.ok(med);
	}
	
	@DeleteMapping("/remove/{id}")
	public ResponseEntity<Map<String, Boolean>> removeMedicine(@PathVariable Long id){
		Medicines med = medicineRepo.findById(id).orElseThrow(()->new IllegalArgumentException("Medicine Not found"));
		medicineRepo.delete(med);
		Map<String, Boolean> response = new HashMap<String, Boolean>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
