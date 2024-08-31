package service;

import entity.News;

public interface StaticDataService {
    News getNewsByIdOrTitle(String text);
}
