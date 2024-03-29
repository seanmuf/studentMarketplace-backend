package com.example.project.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@Entity
@Table(name="listings")
public class Listing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    public String l_category;
    private String l_name;
    private Integer l_price;
    private Integer l_quantity;

    public Integer getL_quantity() {
        return l_quantity;
    }

    public void setL_quantity(Integer l_quantity) {
        this.l_quantity = l_quantity;
    }

    private String l_description;

    public void setL_category(String l_category) {
        this.l_category = l_category;
    }

    public void setL_name(String l_name) {
        this.l_name = l_name;
    }

    public void setL_price(Integer l_price) {
        this.l_price = l_price;
    }

    public void setL_description(String l_description) {
        this.l_description = l_description;
    }

    public String getL_category() {
        return l_category;
    }

    public String getL_name() {
        return l_name;
    }

    public Integer getL_price() {
        return l_price;
    }

    public String getL_description() {
        return l_description;
    }

    @ManyToOne
    private Cart cart;

    @ManyToOne(optional = false, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name="sid")
    private Store store;



}
