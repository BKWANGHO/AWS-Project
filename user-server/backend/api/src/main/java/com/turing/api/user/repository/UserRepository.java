package com.turing.api.user.repository;


import com.turing.api.user.model.User;
import com.turing.api.user.model.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    Optional<User> findByUsername(String username);

    List<UserDto> findByName(String name);

    List<UserDto> findUsersByJob(String job);

    @Modifying
    @Query("update users set token = :token where id = :id")
    void modifyTokenById(@Param("id") Long id ,@Param("token") String token);

    Boolean existsByUsername(String param);

}
