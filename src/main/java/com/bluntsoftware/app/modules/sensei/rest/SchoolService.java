package com.bluntsoftware.app.modules.sensei.rest;



import com.bluntsoftware.lib.jpa.repository.GenericRepository;
import com.bluntsoftware.app.modules.sensei.domain.School;
import com.bluntsoftware.app.modules.sensei.repository.SchoolRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
@Controller("senseiSchoolService")
@RequestMapping(value = "/sensei/school")
@Transactional
@Qualifier("sensei")

public class SchoolService extends CustomService<School,Integer, SchoolRepository> {


}
