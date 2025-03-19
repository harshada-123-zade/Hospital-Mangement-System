package com.Spring.Boot.HMS.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;


@Data
@Entity
@Table(name = "billing")
public class Billing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long patientId;
    private double amount;
    private String status;
    
   
}









//{
//	
//	"id" : 1,
//"patientId": 1.0,
//"amount":234.1,
//"status":"pending
	//}
