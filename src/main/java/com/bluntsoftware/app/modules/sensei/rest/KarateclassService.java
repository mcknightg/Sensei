package com.bluntsoftware.app.modules.sensei.rest;



import com.bluntsoftware.lib.jpa.repository.GenericRepository;
import com.bluntsoftware.app.modules.sensei.domain.Karateclass;
import com.bluntsoftware.app.modules.sensei.repository.KarateclassRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
@Controller("senseiKarateclassService")
@RequestMapping(value = "/sensei/karateclass")
@Transactional
@Qualifier("sensei")

public class KarateclassService extends CustomService<Karateclass,Integer, KarateclassRepository> {


}
