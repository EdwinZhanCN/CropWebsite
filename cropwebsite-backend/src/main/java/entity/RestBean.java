package entity;
import lombok.Data;

@Data
public class RestBean<T> {

    private int status;
    private boolean success;
    private String message;
    private T data;

    /**
     * Constructor
     * @param status - status code
     * @param success - success or failure
     * @param message - message
     * @param data - data
     */
    private RestBean(int status, boolean success, String message, T data) {
        this.status = status;
        this.success = success;
        this.message = message;
        if(data != null){
            this.data = data;
        }
    }

    //Success
    public static <T> RestBean<T> success(){
        return new RestBean<>(200, true, null, null);
    }

    //Success with message
    public static <T> RestBean<T> success(String msg){
        return new RestBean<>(200, true, msg, null);
    }


    //Success with data and message
    public static <T> RestBean<T> success(String msg, T data){
        return new RestBean<>(200, true, msg, data);
    }

    //Failure with message
    public static <T> RestBean<T> failure(int status, String msg){
        return new RestBean<>(status, false, msg, null);
    }
}
