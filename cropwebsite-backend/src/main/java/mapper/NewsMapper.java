package mapper;

import entity.News;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface NewsMapper {
    /**
     * Find news by id or title
     * @param text id or title
     * @return news
     */
    @Select("select * from news where id = #{text} or title LIKE CONCAT('%', #{text}, '%')")
    News findNewsByIdOrTitle(String text);
}
