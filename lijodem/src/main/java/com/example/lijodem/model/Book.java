package com.example.lijodem.model;
import jakarta.persistence.*;
@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ID;
    private String Title;
    private String Author;
    public long getID() {
        return ID;
    }
    public Book(long iD, String title, String author) {
        ID = iD;
        Title = title;
        Author = author;
    }
    public Book() {
    }
    public void setID(long iD) {
        ID = iD;
    }
    public String getTitle() {
        return Title;
    }
    public void setTitle(String title) {
        Title = title;
    }
    public String getAuthor() {
        return Author;
    }
    public void setAuthor(String author) {
        Author = author;
    }
}
