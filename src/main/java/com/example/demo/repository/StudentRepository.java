package com.example.demo.repository;

import com.example.demo.model.Student;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
    List<Student> findAllByName(String name);
    Optional<Student> findByEmail(String email);

}


