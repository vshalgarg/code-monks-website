package com.code.monks.chatApp.dto;

import lombok.Data;

@Data
public class ChatRequest {
    private String content;
    private String userId;
    private String roomId;
}
