package com.bluntsoftware.app.modules.sensei.domain;

import com.bluntsoftware.lib.jpa.domain.Domain;
import java.io.Serializable;

public interface CustomDomain<T> extends Domain,Serializable,Cloneable,Comparable<T> {

}
