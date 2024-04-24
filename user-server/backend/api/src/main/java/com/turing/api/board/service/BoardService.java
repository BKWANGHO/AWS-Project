package com.turing.api.board.service;

import com.turing.api.board.model.Board;
import com.turing.api.board.model.BoardDto;
import com.turing.api.common.service.CommandService;
import com.turing.api.common.service.QueryService;

import java.util.Optional;

public interface BoardService extends CommandService<BoardDto>, QueryService<BoardDto> {

    default Board dtoToEntity(BoardDto boardDto){
        return Board.builder()
                .title(boardDto.getTitle())
                .description(boardDto.getDescription())
                .content(boardDto.getContent())
                .build();
    }

    default BoardDto entityToDto(Board board){
        return BoardDto.builder()
                .id(board.getId())
                .title(board.getTitle())
                .content(board.getContent())
                .description(board.getDescription())
                .regDate(String.valueOf(board.getRegDate()))
                .modDate(String.valueOf(board.getRegDate()))
                .build();
    }


}
