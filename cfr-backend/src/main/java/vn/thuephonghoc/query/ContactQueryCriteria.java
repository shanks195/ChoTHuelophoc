package vn.thuephonghoc.query;

import java.sql.Timestamp;
import java.util.List;

import lombok.Data;
import vn.thuephonghoc.annotation.Query;

@Data
public class ContactQueryCriteria {

	 @Query
	 private Long id;
	 
	@Query(blurry = "title,fullname,description,email,phone,bookingtime")
	private String blurry;
	
    @Query(type = Query.Type.BETWEEN)
    private List<Timestamp> createTime;
}
