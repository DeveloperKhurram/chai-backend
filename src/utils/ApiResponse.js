class ApiResponse {
  constructor(statusCode, data, messsage) {
    this.statusCode = statusCode;
    this.data = data;
    this.messsage = messsage;
    this.success = statusCode < 400;
  }
}
