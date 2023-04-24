package com.example.demospring2.domain;

public class Admin {
    private Integer adminSeq;
    private String adminNm;
    private String adminPwd;
    private String adminId;

    public Integer getAdminSeq() {
        return adminSeq;
    }

    public void setAdminSeq(Integer adminSeq) {
        this.adminSeq = adminSeq;
    }

    public String getAdminNm() {
        return adminNm;
    }

    public void setAdminNm(String adminNm) {
        this.adminNm = adminNm;
    }

    public String getAdminPwd() {
        return adminPwd;
    }

    public void setAdminPwd(String adminPwd) {
        this.adminPwd = adminPwd;
    }

    public String getAdminId() {
        return adminId;
    }

    public void setAdminId(String adminId) {
        this.adminId = adminId;
    }
}
