package com.bluntsoftware.app.modules.sensei.rest;



import com.bluntsoftware.lib.jpa.repository.GenericRepository;
import com.bluntsoftware.app.modules.sensei.domain.Student;
import com.bluntsoftware.app.modules.sensei.repository.StudentRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
@Controller("senseiStudentService")
@RequestMapping(value = "/sensei/student")
@Transactional
@Qualifier("sensei")

public class StudentService extends CustomService<Student,Integer, StudentRepository> {


}
