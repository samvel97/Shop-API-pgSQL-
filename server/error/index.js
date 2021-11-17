class ApiError extends Error{
    constructor(status, message){
        super();
        this.status = status,
        this.message = message
    }
    static badRequest(message){
        return new ApiError(404, message) // неправельный линк
    }
    static internal(message){
        return new ApiError(500, message) // контекст неправельный
    }
    static forbidden(message){
        return new ApiError(403, message) // не имеет доступ
    }
}

module.exports = ApiError