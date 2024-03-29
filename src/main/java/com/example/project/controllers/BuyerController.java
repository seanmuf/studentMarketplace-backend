package com.example.project.controllers;

import com.example.project.models.Buyer;
import com.example.project.models.Seller;
import com.example.project.models.User;
import com.example.project.services.BuyerServices;
import com.example.project.services.SellerServices;
import com.example.project.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@CrossOrigin(
        origins = "https://wbdv-project-prototype-seanmuf.herokuapp.com",
        maxAge = 3600,
        allowCredentials = "true")
public class BuyerController {
    @Autowired
    BuyerServices service;

    @Autowired
    UserServices userServices;

    @PostMapping("/api/buyers/register")
    public Buyer register(
            @RequestBody Buyer buyer,
            HttpSession session) {
        User existingUser = userServices.findUserById(buyer.getId());
        if(existingUser != null) {
            Buyer currentBuyer = service.createBuyer(existingUser);
            session.setAttribute("currentBuyer", currentBuyer);
            return currentBuyer;
        }
        return null;
    }

    @PostMapping("/api/buyer")
    public Buyer buyer(HttpSession session) {
        Buyer currentBuyer = (Buyer)session.getAttribute("currentBuyer");
        return currentBuyer;
    }


    @GetMapping("/api/buyers")
    public List<Buyer> findAllBuyers() {
        return service.findAllBuyers();
    }
}
