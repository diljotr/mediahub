package io.dean.mediahub.service;

import io.dean.mediahub.model.Video;

import java.util.List;

public interface VideoService {

    //public List<Video> getVideoList();

    //public Video findVideoById(long id);

    public void save(Video video);

    //public void edit(Video video);

    public void delete(long id);
}
