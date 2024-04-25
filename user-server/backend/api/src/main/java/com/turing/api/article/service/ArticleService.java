package com.turing.api.article.service;

import com.turing.api.article.model.Article;
import com.turing.api.article.model.ArticleDto;
import com.turing.api.board.model.Board;
import com.turing.api.common.component.Messenger;
import com.turing.api.common.service.CommandService;
import com.turing.api.common.service.QueryService;
import com.turing.api.user.model.User;
import com.turing.api.user.model.UserDto;
import com.turing.api.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;


public interface ArticleService extends CommandService<ArticleDto>, QueryService<ArticleDto> {


    default Article dtoToEntity(ArticleDto articleDto, Board board, User user){
        return Article.builder()
                .title(articleDto.getTitle())
                .content(articleDto.getContent())
                .writer(user)
                .board(board)
                .build();
    }

//    default ArticleDto entityToDto(Optional<Article> article, Long userid){
    default ArticleDto entityToDto(Article article){
        return ArticleDto.builder()
                .id(article.getId())
                .title(article.getTitle())
                .content(article.getContent())
                .writer(article.getWriter().getId())
                .board(article.getBoard().getId())
                .regDate(String.valueOf(article.getRegDate()))
                .modDate(String.valueOf(article.getRegDate()))
                .build();
    }

    List<ArticleDto> findByBoardId(Long id);

}
