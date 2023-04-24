package com.example.demospring2.controller;

import com.example.demospring2.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class TestController  {

    @Autowired
    private TestService service;

    @RequestMapping(value = "/test")
    public Map<String, Object> test() {
        Map<String, Object> result = new HashMap<String, Object>();
        result.put("name", "joo");
        result.put("age", 100);
        return result;
    }

    @RequestMapping(value = "/getList")
    public Map<String, Object> getList() {
        Map<String,Object> result = new HashMap<String,Object>();
        List<Map<String, Object>> list = null;
        try {
             list = service.getList();
             result.put("data", list);
        } catch(Exception e) {
            e.printStackTrace();
        }
        return result;
    }

}
