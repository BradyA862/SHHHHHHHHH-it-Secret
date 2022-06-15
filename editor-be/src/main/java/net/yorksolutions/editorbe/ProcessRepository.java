package net.yorksolutions.editorbe;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProcessRepository extends CrudRepository<Process, String> {

    Optional<Process> findProcessByTitle(String title);
}
