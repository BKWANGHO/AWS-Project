package com.turing.api.article.service;

import com.turing.api.article.model.ArticleDto;
import com.turing.api.article.repository.ArticleRepository;
import com.turing.api.board.model.Board;
import com.turing.api.board.repository.BoardRepository;
import com.turing.api.common.component.Messenger;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository repository;
    private final BoardRepository boardRepo;

    @Override
    public Messenger save(ArticleDto articleDto) {
        Board board = boardRepo.findById(articleDto.getBoard()).orElseThrow();
     repository.save(dtoToEntity(articleDto,board));
        return Messenger.builder()
                .message("SUCCESS")
                .build();
    }

    @Override
    public Messenger deleteById(Long id) {
        repository.deleteById(id);
        return null;
    }

    @Override
    public Optional<ArticleDto> modify(ArticleDto articleDto) {
        return null;
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
//        return repository.findByBoardId(id).stream().map(i->entityToDto(i)).toList();
        return repository.getArticlesByBoardId(id)
                .stream().map(i -> entityToDto(i)).toList();
    }
}