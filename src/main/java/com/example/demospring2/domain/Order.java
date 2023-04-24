package com.example.demospring2.domain;

import java.util.Date;

public class Order {
    private Integer order_seq;
    private Date order_regdate;
    private Integer member_seq;
    private String order_status;

    private String searchValue;


    public Integer getOrder_seq() {
        return order_seq;
    }

    public void setOrder_seq(Integer order_seq) {
        this.order_seq = order_seq;
    }

    public Date getOrder_regdate() {
        return order_regdate;
    }

    public void setOrder_regdate(Date order_regdate) {
        this.order_regdate = order_regdate;
    }

    public Integer getMember_seq() {
        return member_seq;
    }

    public void setMember_seq(Integer member_seq) {
        this.member_seq = member_seq;
    }

    public String getOrder_status() {
        return order_status;
    }

    public void setOrder_status(String order_status) {
        this.order_status = order_status;
    }

    public String getSearchValue() {
        return searchValue;
    }

    public void setSearchValue(String searchValue) {
        this.searchValue = searchValue;
    }

    @Override
    public String toString() {
        return "Order{" +
                "order_seq=" + order_seq +
                ", order_regdate=" + order_regdate +
                ", member_seq=" + member_seq +
                ", order_status='" + order_status + '\'' +
                ", searchValue='" + searchValue + '\'' +
                '}';
    }
}

