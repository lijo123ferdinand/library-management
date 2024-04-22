package com.example.lijodem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.lijodem.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
}
