package com.code.monks.chatApp.controller;

import com.code.monks.chatApp.dto.ChatRequest;
import com.code.monks.chatApp.service.ChatService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin
public class ChatController {

    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @PostMapping("/send")
    public String sendMessage(@RequestBody ChatRequest request) {
        chatService.sendMessage(request);
        return "Message sent";
    }
}
