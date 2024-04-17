package com.turing.api.article.repository;

import com.turing.api.article.model.Article;
import com.turing.api.article.model.ArticleDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends JpaRepository<Article,Long> {


    List<Article> findByBoardId(Long id);
}
