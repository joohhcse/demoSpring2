package com.example.demospring2.dao;

import com.example.demospring2.domain.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Repository
public class LoginDao {

    @Autowired
    private JdbcTemplate sql;

    public Map<String, Object> loginInfo(Admin param) {
        String query = "SELECT admin_name, admin_id FROM admin WHERE admin_id = '"+param.getAdminId()+"' AND admin_pwd ='" +param.getAdminPwd()+"'";
        Map<String,Object> result = sql.queryForMap(query);
        return result;
    }

}
