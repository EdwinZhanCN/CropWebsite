package service.imple;

import entity.News;
import jakarta.annotation.Resource;
import mapper.NewsMapper;
import org.springframework.stereotype.Service;
import service.StaticDataService;

@Service
public class StaticDataServiceImpl implements StaticDataService {
    @Resource
    private NewsMapper newsMapper;

    /**
     * Find news by id or title
     * @param text id or title
     * @return news
     */
    @Override
    public News getNewsByIdOrTitle(String text) {
        return newsMapper.findNewsByIdOrTitle(String.valueOf(text));
    }
}
