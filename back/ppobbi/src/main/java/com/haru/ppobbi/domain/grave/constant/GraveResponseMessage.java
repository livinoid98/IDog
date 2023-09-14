package com.haru.ppobbi.domain.grave.constant;

import com.haru.ppobbi.global.dto.ResponseMessage;

public enum GraveResponseMessage implements ResponseMessage {
    CREATE_SUCCESS("무덤 생성 완료"),
    CREATE_FAIL("무덤 생성 실패"),
    READ_SUCCESSS("무덤 조회 성공"),
    READ_FAIL("무덤 조회 실패"),
    UNAUTHORIZED("인증 실패");

    private final String message;

    GraveResponseMessage(String message) {
        this.message = message;
    }

    @Override
    public String message() {
        return this.message;
    }
}
