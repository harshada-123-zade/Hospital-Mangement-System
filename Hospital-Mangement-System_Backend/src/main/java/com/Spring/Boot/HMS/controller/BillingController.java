package com.Spring.Boot.HMS.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.Spring.Boot.HMS.entity.Billing;
import com.Spring.Boot.HMS.repository.BillingRepository;

@RestController
@RequestMapping("/api/v4/billing")
@CrossOrigin(origins = "http://localhost:4200")
public class BillingController {
    @Autowired
    private BillingRepository billingRepository;

    @GetMapping
    public List<Billing> getAllBills() {
        return billingRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Billing> addBill(@RequestBody Billing bill) {
        return new ResponseEntity<>(billingRepository.save(bill), HttpStatus.CREATED);
    }
}
