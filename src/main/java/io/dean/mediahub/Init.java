package io.dean.mediahub;

import io.dean.mediahub.model.Video;
import io.dean.mediahub.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Init implements CommandLineRunner {

    @Autowired
    private VideoService videoService;

    @Override
    public void run(String... args) throws Exception {
        Video video1 = new Video();
        //video1.setId(1);
        video1.setUrl("google.com");
        video1.setRating(1.5);
        video1.setPreviewUrl("http://placehold.it/200x100");
        video1.setName("TEST 1");

        Video video2 = new Video();
        //video2.setId(2);
        video2.setUrl("yahoo.com");
        video2.setRating(2.3);
        video2.setPreviewUrl("http://placehold.it/200x100");
        video2.setName("TEST 2");


        videoService.save(video1);
        videoService.save(video2);
    }
}
