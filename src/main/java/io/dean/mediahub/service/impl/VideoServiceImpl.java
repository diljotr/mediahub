package io.dean.mediahub.service.impl;

import io.dean.mediahub.model.Video;
import io.dean.mediahub.repository.VideoRepository;
import io.dean.mediahub.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VideoServiceImpl implements VideoService {

    @Autowired
    private VideoRepository videoRepository;


    /*@Override
    public Video findVideoById(long id) {
        return videoRepository.findById(id);
    }*/

    @Override
    public void save(Video video) {
        videoRepository.save(video);
    }

    @Override
    public void delete(long id) {
        videoRepository.deleteById(id);
    }
}
