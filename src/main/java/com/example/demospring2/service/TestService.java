package com.example.demospring2.service;

import com.example.demospring2.dao.TestDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Service
public class TestService {

    @Autowired
    private TestDao dao;

    public List<Map<String, Object>> getList() throws SQLException {
        return dao.getList();
    }
}
