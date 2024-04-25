package com.turing.api.article.repository;

import com.turing.api.article.model.Article;
import com.turing.api.article.model.ArticleDto;
import com.turing.api.board.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@Repository
public interface ArticleRepository extends JpaRepository<Article,Long> {


    List<Article> findAllByBoardIdOrderByIdDesc(Long id);

//  default
    @Query("Select a from articles a where a.board.id = :boardId order by a.board.id desc ")
    public List<Article> getArticlesByBoardId(@Param("boardId") Long id);

//  native (정해진것을 가져올때)
    @Query(value = "Select * from articles  where board.id = 1",nativeQuery = true)
    public List<Map<String, Object>> getQnaArticles(@Param("BoardId") Long id );

//  JPSQL Return Type DTO
    String articleDtoMapping = "new com.turing.api.article.model.ArticleDto(" +
        "a.id,a.title, a.content, a.writer.id, a.board.id, a.regDate, a.modDate)";
    @Query("Select "+articleDtoMapping +" from articles a where a.board.id = :boardId")
    public List<ArticleDto> getArticleDtosByBoardId(@Param("boardId") Long id);












}
