package com.example.demospring2.controller;

import com.example.demospring2.dao.LoginDao;
import com.example.demospring2.domain.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
public class LoginController {

    @Autowired
    private LoginDao dao;

    @RequestMapping(value="/loginInfo", method= RequestMethod.POST)
    public Map<String, Object> loginInfo(Admin param, HttpServletRequest request) {
        Map<String, Object> result = null;
        try {
            result = dao.loginInfo(param);
            result.put("code", 200);
            request.getSession().setAttribute("admin", result);
        } catch (Exception e) {
            e.printStackTrace();
            result = new HashMap<String,Object>();
            result.put("code", 404);
            result.put("msg", e.getMessage());
            return result;
        }
        return result;
    }

    @RequestMapping(value="/fail")
    public Map<String, Object> fail() {
        Map<String, Object> result = new HashMap<String,Object>();
        result.put("code", 999);
        return result;
    }
}
