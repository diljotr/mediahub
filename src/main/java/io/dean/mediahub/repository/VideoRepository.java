package io.dean.mediahub.repository;

import io.dean.mediahub.model.Video;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = { "http://localhost:3000"})
@RepositoryRestResource(collectionResourceRel = "videos", path = "videos")
public interface VideoRepository extends PagingAndSortingRepository<Video, Long> {

    @Query("select v from Video v")
    Page<Video> findTopVideos(Pageable pageable);
}
