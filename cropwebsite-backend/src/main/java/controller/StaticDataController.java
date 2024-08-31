package controller;

import entity.News;
import entity.RestBean;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;
import service.StaticDataService;


/**
 * StaticDataController
 */
@RestController
@RequestMapping("/api/static")
public class StaticDataController {

    // this is the service that will be used to get the news
    @Resource
    private StaticDataService service;

    /**
     * Get news by id or title
     * @param text id or title of the news
     * @return RestBean<News>
     */
    @GetMapping("/news")
    public RestBean<News> getNews(@RequestParam String text){
        News news = service.getNewsByIdOrTitle(text);
        if(news == null){
            return RestBean.failure(404, "News not found");
        }
        return RestBean.success("News found", news);
    }
}
