package net.yorksolutions.followerbe;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ResponseRepository extends CrudRepository <Response, Long> {

    Optional<Response> findResponseById(Long id);
}
