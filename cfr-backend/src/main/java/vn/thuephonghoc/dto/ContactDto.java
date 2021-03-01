package vn.thuephonghoc.dto;

import java.io.Serializable;
import lombok.Data;


@Data
public class ContactDto implements Serializable {

    private Long id;
    
    private String title;
    
    private String description;
    
    private String fullname;
    
    private String email;
    
    private String phone;
    
    private String bookingtime;
}
