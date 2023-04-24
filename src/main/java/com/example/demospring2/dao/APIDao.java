package com.example.demospring2.dao;


import com.example.demospring2.domain.Member;
import com.example.demospring2.domain.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Repository
public class APIDao {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void addProduct(Product param) throws SQLException {
        System.out.println("addProduct >>>>>");
        System.out.println(param.toString());
        jdbcTemplate.update("INSERT INTO item(item_name,item_price,item_amount,item_regdate) VALUES(?,?,?,now())", new Object[]{param.getItemNm(), param.getItemPrc(), param.getItemAmt()});
    }

    //상품수정
    public void updateProduct(Product param) throws SQLException {
        System.out.println("updateProduct >>> " + param.toString());
        String sql = "UPDATE item SET item_name = ?, item_price = ?, item_amount = ?, item_regdate = now()";
        sql += " WHERE item_seq = ?";
        jdbcTemplate.update(sql, new Object[] {param.getItemNm(), param.getItemPrc(), param.getItemAmt(),param.getItemSeq()});
    }

    //상품삭제
    public void removeProduct(Product param) throws SQLException {
        String sql = "DELETE FROM item ";
        sql += " WHERE item_seq = ?";
        jdbcTemplate.update(sql, new Object[] {param.getItemSeq()});
    }

    public Long listProductTotalCount(Product param) throws SQLException {
        String query = "SELECT COUNT(item_seq) totalCount FROM item ";
        if (param.getSearchValue() != null && !param.getSearchValue().equals("")) {
            query += "WHERE item_name LIKE CONCAT('%','" + param.getSearchValue() + "','%') ";
        }
        return (Long) jdbcTemplate.queryForMap(query).get("totalCount");
    }
    public List<Map<String, Object>> listProduct(Product param) throws SQLException {
//        String query = "SELECT item_name productNm, item_price price, item_amount amount, item_regdate rgstrDt FROM item ";
        String query = "SELECT item_seq itemSeq, item_name itemNm, item_price itemPrc, item_amount itemAmt, item_regdate itemRegDt FROM item ";
        if (param.getSearchValue() != null && !param.getSearchValue().equals("")) {
            query += "WHERE item_name LIKE CONCAT('%','" + param.getSearchValue() + "','%') ";
        }
        query += "LIMIT " + param.getStart() + " , " + param.getLimit();
        return jdbcTemplate.queryForList(query);
    }


    public Long listMemberTotalCount(Member param) throws SQLException {
        String query = "SELECT COUNT(member_seq) totalCount FROM member ";
        if (param.getSearchValue() != null && !param.getSearchValue().equals("")) {
//            query += "WHERE member_name LIKE CONCAT('%','" + param.getSearchValue() + "','%') ";
            if(param.getSearchCode().equals("member_id"))
                query += "WHERE member_id LIKE CONCAT('%','" + param.getSearchValue() + "','%') ";
            else if(param.getSearchCode().equals("member_name"))
                query += "WHERE member_name LIKE CONCAT('%','" + param.getSearchValue() + "','%') ";
            else
                ;
        }
        return (Long) jdbcTemplate.queryForMap(query).get("totalCount");
    }
    public List<Map<String, Object>> listMember(Member param) throws SQLException {
        String query = "SELECT member_seq memberSeq, member_id memberId, member_name memberNm, CONCAT(member_dft_addr, member_dtl_addr) memberAddr, member_regdate memberRegDt" +
                " FROM member ";
        if (param.getSearchValue() != null && !param.getSearchValue().equals("")) {
//            query += "WHERE member_name LIKE CONCAT('%','" + param.getSearchValue() + "','%') ";

            System.out.println(param.getSearchCode());

            if(param.getSearchCode().equals("member_id"))
                query += "WHERE member_id LIKE CONCAT('%','" + param.getSearchValue() + "','%') ";
            else if(param.getSearchCode().equals("member_name"))
                query += "WHERE member_name LIKE CONCAT('%','" + param.getSearchValue() + "','%') ";
            else
                ;
        }
        query += "LIMIT " + param.getStart() + " , " + param.getLimit();

        System.out.println("LIMIT start >> " + param.getStart());
        System.out.println("LIMIT limit >> " + param.getLimit());

        System.out.println(query);

        return jdbcTemplate.queryForList(query);
    }

}