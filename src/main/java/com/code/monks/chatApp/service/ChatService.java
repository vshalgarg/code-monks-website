package com.code.monks.chatApp.service;

import com.code.monks.chatApp.dto.ChatRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

import java.util.Map;

@Service
public class ChatService {

    private final WebClient webClient;
    private final String API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxtamh4d29lbGxqbWRqa2JjZGtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1NDAzNzIsImV4cCI6MjA5MTExNjM3Mn0.W4A57w9PqJHXq6TyMakV7sWi5ZH5EYHSlFCWCvpr5XY";

    public ChatService(WebClient.Builder builder) {
        this.webClient = builder
                .baseUrl("https://lmjhxwoelljmdjkbcdkp.supabase.co/rest/v1/messages")
                .defaultHeader("apikey", API_KEY)
                .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer " + API_KEY)
                .build();
    }

    public void sendMessage(ChatRequest request) {

        Map<String, Object> body = Map.of(
                "content", request.getContent(),
                "user_id", request.getUserId(),
                "room_id", request.getRoomId()
        );

        webClient.post()
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(body)
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
