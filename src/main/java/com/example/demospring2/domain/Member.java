package com.example.demospring2.domain;

public class Member {
    private Integer memberSeq;
    private String memberId;
    private String memberName;
    private String memberDftAddr;
    private String memberDtlAddr;
    private String memberZipcode;
    private String memberRegdate;
    private String memberPwd;
    private String searchCode;
    private String searchValue;
    private int start;
    private int limit;

    public Integer getMemberSeq() {
        return memberSeq;
    }

    public void setMemberSeq(Integer memberSeq) {
        this.memberSeq = memberSeq;
    }

    public String getMemberId() {
        return memberId;
    }

    public void setMemberId(String memberId) {
        this.memberId = memberId;
    }

    public String getMemberName() {
        return memberName;
    }

    public void setMemberName(String memberName) {
        this.memberName = memberName;
    }

    public String getMemberDftAddr() {
        return memberDftAddr;
    }

    public void setMemberDftAddr(String memberDftAddr) {
        this.memberDftAddr = memberDftAddr;
    }

    public String getMemberDtlAddr() {
        return memberDtlAddr;
    }

    public void setMemberDtlAddr(String memberDtlAddr) {
        this.memberDtlAddr = memberDtlAddr;
    }

    public String getMemberZipcode() {
        return memberZipcode;
    }

    public void setMemberZipcode(String memberZipcode) {
        this.memberZipcode = memberZipcode;
    }

    public String getMemberRegdate() {
        return memberRegdate;
    }

    public void setMemberRegdate(String memberRegdate) {
        this.memberRegdate = memberRegdate;
    }

    public String getMemberPwd() {
        return memberPwd;
    }

    public void setMemberPwd(String memberPwd) {
        this.memberPwd = memberPwd;
    }

    public String getSearchValue() {
        return searchValue;
    }

    public void setSearchValue(String searchValue) {
        this.searchValue = searchValue;
    }

    public int getStart() {
        return start;
    }

    public void setStart(int start) {
        this.start = start;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }

    @Override
    public String toString() {
        return "Member{" +
                "memberSeq=" + memberSeq +
                ", memberId='" + memberId + '\'' +
                ", memberName='" + memberName + '\'' +
                ", memberDftAddr='" + memberDftAddr + '\'' +
                ", memberDtlAddr='" + memberDtlAddr + '\'' +
                ", memberZipcode='" + memberZipcode + '\'' +
                ", memberRegdate='" + memberRegdate + '\'' +
                ", memberPwd='" + memberPwd + '\'' +
                ", searchValue='" + searchValue + '\'' +
                ", start=" + start +
                ", limit=" + limit +
                '}';
    }

    public String getSearchCode() {
        return searchCode;
    }

    public void setSearchCode(String searchCode) {
        this.searchCode = searchCode;
    }
}
