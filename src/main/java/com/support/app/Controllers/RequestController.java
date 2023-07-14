package com.support.app.Controllers;

import com.support.app.Models.Request;
import com.support.app.Services.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/Request")
public class RequestController {

    @Autowired
    private RequestService requestService;

    @GetMapping
    public ArrayList<Request> getRequest() {
        return this.requestService.getRequest();
    }

    @PostMapping
    public Request saveRequest(@RequestBody Request request) {
        return this.requestService.saveRequest(request);
    }

    @GetMapping(path = "/{id}")
    public Optional<Request> getRequestById(@PathVariable Long id) {
        return this.requestService.getRequestById(id);
    }

    @PutMapping(path = "/{id}")
    public Request updateRequestById(@RequestBody Request request, @PathVariable("id") Long id) {
        return this.requestService.updateRequestById(request, id);
    }

    @DeleteMapping(path = "/{id}")
    public String deleteById(@PathVariable("id") Long id) {
        boolean ok = this.requestService.deleteRequest(id);

        if (ok) {
            return "Request with id " + id + " deleted";
        } else {
            return "Error, we have a problem and can't delete Request with id " + id;
        }
    }
}
