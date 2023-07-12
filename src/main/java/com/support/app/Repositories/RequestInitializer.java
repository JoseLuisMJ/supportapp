package com.support.app.Repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.support.app.Models.Request;
import java.util.Date;

@Component
public class RequestInitializer implements CommandLineRunner {

    private final RequestRepository requestRepository;

    @Autowired
    public RequestInitializer(RequestRepository requestRepository) {
        this.requestRepository = requestRepository;
    }

    @Override
    public void run(String... args) {

        for (int i = 1; i <= 20; i++) {
            Request request = new Request();
            request.setSubject("Solicitud " + i);
            request.setDescription("Descripción de la solicitud " + i);
            request.setUser("Usuario " + i);
            request.setDate(new Date());

            requestRepository.save(request);
        }
    }
}