package com.Spring.Boot.HMS.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Spring.Boot.HMS.entity.Billing;

@Repository
public interface BillingRepository extends JpaRepository<Billing, Long> {
	
}
