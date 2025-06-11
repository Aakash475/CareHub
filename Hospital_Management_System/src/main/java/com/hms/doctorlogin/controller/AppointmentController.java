package com.hms.doctorlogin.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hms.doctorlogin.entity.Appointments;
import com.hms.doctorlogin.repository.AppointmentsRepository;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/appointment")
public class AppointmentController {
	@Autowired
	private AppointmentsRepository appointmentRepo;
	
	@PostMapping("/register")
	public Appointments createAppointments(@RequestBody Appointments appointment) {
		return appointmentRepo.save(appointment);
	}
	
	@GetMapping("/findAllAppointments")
	public List<Appointments> showAllAppointments(){
		return appointmentRepo.findAll();
	}
	
	@DeleteMapping("/remove/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAppointment(@PathVariable Long id) {
		Appointments appointment = appointmentRepo.findById(id).orElseThrow(()->new IllegalArgumentException("Appointment Not Found!"));
		appointmentRepo.delete(appointment);
		Map<String, Boolean> response = new HashMap<String, Boolean>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
