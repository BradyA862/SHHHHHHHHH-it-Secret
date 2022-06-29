package net.yorksolutions.editorbe;

import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Configuration
@EnableAutoConfiguration
@ComponentScan

@Repository
public interface ProcessRepository extends CrudRepository<Process, Long> {
    Optional<Process> findProcessByStagesId(Long Id);
    Optional<Process> findProcessByTitle(String title);
    Optional<Process> findProcessById(Long Id);
}
