package com.turing.api.article.service;

import com.turing.api.article.model.Article;
import com.turing.api.article.model.ArticleDto;
import com.turing.api.article.repository.ArticleRepository;
import com.turing.api.board.model.Board;
import com.turing.api.board.repository.BoardRepository;
import com.turing.api.common.component.Messenger;
import com.turing.api.user.model.User;
import com.turing.api.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository repository;
    private final BoardRepository boardRepo;
    private final UserRepository userRepo;

    @Override
    public Messenger save(ArticleDto articleDto) {
        Board board = boardRepo.findById(articleDto.getBoard()).orElseThrow();
        User user = userRepo.findById(articleDto.getWriter()).orElseThrow();

        Article article = repository.save(dtoToEntity(articleDto,board,user));


        return Messenger.builder()
                .message(article instanceof Article ? "SUCCESS" : "FAILUER")
                .id(article.getBoard().getId())
                .build();
    }

    @Override
    public Messenger deleteById(Long id) {
        return  Messenger.builder()
                .message(
                        Stream.of(id)
                                .peek(i->repository.deleteById(i))
                                .map(i->"SUCCESS")
                                .findAny()
                                .orElseGet(()->"FAILURE")
                )
                .build();
    }

    @Override
    public Optional<ArticleDto> modify(ArticleDto articleDto) {
        var article = repository.findById(articleDto.getId());
        article.get().setTitle(articleDto.getTitle());
        article.get().setContent(articleDto.getContent());

        return Optional.of(repository.save(article.get())).map(i -> entityToDto(i));
    }

    @Override
    public List<ArticleDto> findAll() {
        return repository.findAll()
                .stream().map(i -> entityToDto(i)).toList();

    }

    @Override
    public Optional<ArticleDto> findById(Long id) {
        return Optional.ofNullable(entityToDto(
                Objects.requireNonNull(repository.findById(id).orElse(null))));
    }

    @Override
    public long count() {
        return repository.count();
    }

    @Override
    public boolean existsById(Long id) {
        return repository.existsById(id);
    }

    @Override
    public List<ArticleDto> findByBoardId(Long id) {
        return repository.findAllByBoardIdOrderByIdDesc(id).stream().map(i->entityToDto(i)).toList();
//        return repository.getArticlesByBoardId(id)
//                .stream().map(i -> entityToDto(i)).toList();
    }
}