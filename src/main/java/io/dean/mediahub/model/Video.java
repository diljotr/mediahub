package io.dean.mediahub.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Video {

    @Id
    @GeneratedValue
    @Getter @Setter
    private long id;

    @NotNull
    @Getter @Setter
    private String url;

    @NotNull
    @Getter @Setter
    private String previewUrl;

    @NotNull
    @Getter @Setter
    private String name;

    @NotNull
    @Getter @Setter
    private double rating;

}
