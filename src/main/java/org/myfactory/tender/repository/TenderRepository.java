package org.myfactory.tender.repository;

import org.myfactory.tender.domain.Tender;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Tender entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TenderRepository extends JpaRepository<Tender, Long> {

}
