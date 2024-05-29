package com.turing.api.player;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.Date;


@Entity
public class Player {

    @Id()
    Long id;
    String playerName;
    //    team_id;
    String ePlayerName;
    String nickname;
    String join_yyyy;
    String POSITION;
    Long back_no;
    String nation;
    Date birthDate;
    String solar;
    Long height;
    Long weight;
}
