package net.yorksolutions.editorbe;

import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Configuration
@AutoConfigurationPackage
@ComponentScan("net.yorksolutions.editorbe")
@Repository
public interface StagesRepository extends CrudRepository<Stages, Long> {
    Optional<Stages> findStagesById(Long id);
}
