package com.turing.api.article;

import com.turing.api.article.model.ArticleDto;
import com.turing.api.article.service.ArticleService;
import com.turing.api.common.component.Messenger;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@ApiResponses({
        @ApiResponse(responseCode = "400", description = "BAD REQUEST"),
        @ApiResponse(responseCode = "404", description = "NOT FOUND"),
        @ApiResponse(responseCode = "200", description = "SUCCESS"),
})
@RequiredArgsConstructor
@RequestMapping("/api/articles")
@CrossOrigin(origins = "*",allowedHeaders = "*")
@Slf4j
public class ArticleController {
    private final ArticleService service;

    @PostMapping("")
    public ResponseEntity<Messenger> save(@RequestBody ArticleDto articleDto){
        log.info(String.valueOf(articleDto));
        return ResponseEntity.ok(service.save(articleDto));
    }

    @GetMapping("/detail")
    public ResponseEntity<Optional<ArticleDto>> findById(@RequestParam Long id){
        return ResponseEntity.ok(service.findById(id));
    }

    @GetMapping("/list")
    public ResponseEntity<List<ArticleDto>> findByBoardId(@RequestParam Long id){
        return ResponseEntity.ok(service.findByBoardId(id));
    }

    @PutMapping( "/modify")
    public ResponseEntity<Optional<ArticleDto>> modify(@RequestBody ArticleDto articleDto){
        log.info("입력받은 정보 : {}",articleDto);
        return ResponseEntity.ok(service.modify(articleDto) );
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Messenger> deleteById(@RequestParam Long id){
        return ResponseEntity.ok(service.deleteById(id));
    }

    @GetMapping("/count")
    public ResponseEntity<Long> count(){
        return ResponseEntity.ok( service.count());
    }

    @GetMapping("/exists")
    public ResponseEntity<Boolean> existsById(@RequestParam Long id){
        return ResponseEntity.ok(service.existsById(id));
    }


}
