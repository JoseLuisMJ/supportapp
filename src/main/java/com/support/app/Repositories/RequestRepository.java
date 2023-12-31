package com.support.app.Repositories;

import com.support.app.Models.Request;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RequestRepository extends JpaRepository <Request, Long> {

}
