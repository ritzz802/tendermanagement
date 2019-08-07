package org.myfactory.tender.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.annotations.ApiModel;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * not an ignored comment
 */
@ApiModel(description = "not an ignored comment")
@Entity
@Table(name = "tender")
public class Tender implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "tender_id", nullable = false)
    private String tenderID;

    @Column(name = "demand_number")
    private String demandNumber;

    @Column(name = "claim_amount_1")
    private Integer claimAmount1;

    @Column(name = "claim_amount_2")
    private Integer claimAmount2;

    @OneToMany(mappedBy = "tender")
    private Set<Customer> employees = new HashSet<>();
    @OneToMany(mappedBy = "tender")
    private Set<Location> locations = new HashSet<>();
    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTenderID() {
        return tenderID;
    }

    public Tender tenderID(String tenderID) {
        this.tenderID = tenderID;
        return this;
    }

    public void setTenderID(String tenderID) {
        this.tenderID = tenderID;
    }

    public String getDemandNumber() {
        return demandNumber;
    }

    public Tender demandNumber(String demandNumber) {
        this.demandNumber = demandNumber;
        return this;
    }

    public void setDemandNumber(String demandNumber) {
        this.demandNumber = demandNumber;
    }

    public Integer getClaimAmount1() {
        return claimAmount1;
    }

    public Tender claimAmount1(Integer claimAmount1) {
        this.claimAmount1 = claimAmount1;
        return this;
    }

    public void setClaimAmount1(Integer claimAmount1) {
        this.claimAmount1 = claimAmount1;
    }

    public Integer getClaimAmount2() {
        return claimAmount2;
    }

    public Tender claimAmount2(Integer claimAmount2) {
        this.claimAmount2 = claimAmount2;
        return this;
    }

    public void setClaimAmount2(Integer claimAmount2) {
        this.claimAmount2 = claimAmount2;
    }

    public Set<Customer> getEmployees() {
        return employees;
    }

    public Tender employees(Set<Customer> customers) {
        this.employees = customers;
        return this;
    }

    public Tender addEmployee(Customer customer) {
        this.employees.add(customer);
        customer.setTender(this);
        return this;
    }

    public Tender removeEmployee(Customer customer) {
        this.employees.remove(customer);
        customer.setTender(null);
        return this;
    }

    public void setEmployees(Set<Customer> customers) {
        this.employees = customers;
    }

    public Set<Location> getLocations() {
        return locations;
    }

    public Tender locations(Set<Location> locations) {
        this.locations = locations;
        return this;
    }

    public Tender addLocation(Location location) {
        this.locations.add(location);
        location.setTender(this);
        return this;
    }

    public Tender removeLocation(Location location) {
        this.locations.remove(location);
        location.setTender(null);
        return this;
    }

    public void setLocations(Set<Location> locations) {
        this.locations = locations;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Tender tender = (Tender) o;
        if (tender.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), tender.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Tender{" +
            "id=" + getId() +
            ", tenderID='" + getTenderID() + "'" +
            ", demandNumber='" + getDemandNumber() + "'" +
            ", claimAmount1=" + getClaimAmount1() +
            ", claimAmount2=" + getClaimAmount2() +
            "}";
    }
}
