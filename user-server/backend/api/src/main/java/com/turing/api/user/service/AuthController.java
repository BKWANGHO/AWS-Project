package com.turing.api.user.service;

import com.turing.api.common.component.Messenger;
import com.turing.api.user.model.UserDto;
import com.turing.api.user.service.UserService;
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
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
public class AuthController {
    private final UserService service;

    @PostMapping("/login")
    public ResponseEntity<Messenger> login(@RequestBody UserDto param){
        log.info("입력받은 정보 : {}",param);
        return ResponseEntity.ok(service.login(param));
    }

    @GetMapping("/exists-Username")
    public ResponseEntity<Boolean> existsByUsername(@RequestParam("username") String param){
        log.info("입력받은 정보 : {}",param);
        return ResponseEntity.ok(service.existsByUsername(param));
    }
}
