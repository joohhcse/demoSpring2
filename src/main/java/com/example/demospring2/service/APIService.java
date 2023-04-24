package com.example.demospring2.service;

import com.example.demospring2.dao.APIDao;
import com.example.demospring2.domain.Member;
import com.example.demospring2.domain.Order;
import com.example.demospring2.domain.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Service
public class APIService {

    @Autowired
    private APIDao dao;

    public void addProduct(Product param)  throws SQLException{
        dao.addProduct(param);
    }

    public void updateProduct(Product param)  throws SQLException{
        dao.updateProduct(param);
    }

    public void removeProduct(Product param)  throws SQLException{
        dao.removeProduct(param);
    }

    public Long listProductTotalCount(Product param)  throws SQLException {
        return dao.listProductTotalCount(param);
    }

    public List<Map<String,Object>> listProduct(Product param)  throws SQLException {
        // TODO Auto-generated method stub
        return dao.listProduct(param);
    }


    public Long listMemberTotalCount(Member param)  throws SQLException {
        return dao.listMemberTotalCount(param);
    }

    public List<Map<String,Object>> listMember(Member param)  throws SQLException {
        // TODO Auto-generated method stub
        return dao.listMember(param);
    }

    public Long listOrderTotalCount(Order param)  throws SQLException {
        return dao.listOrderTotalCount(param);
    }

    public List<Map<String,Object>> listOrder(Order param)  throws SQLException {
        // TODO Auto-generated method stub
        return dao.listOrder(param);
    }

}
