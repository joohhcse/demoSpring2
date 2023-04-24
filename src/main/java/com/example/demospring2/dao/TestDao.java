package com.example.demospring2.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Repository
public class TestDao {

    @Autowired
    private JdbcTemplate sql;

    public List<Map<String, Object>> getList() throws SQLException {
//        String query = "SELECT test_seq testSeq, test_name testNm, test_id testId FROM test";
        String query = "SELECT id, title, writer, created_at FROM board";
        return sql.queryForList(query);
    }

}
