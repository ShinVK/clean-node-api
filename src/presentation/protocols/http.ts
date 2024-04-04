export interface HttpResponse {
  statusCode: number
  body: any
}

// GET NAO TEM BODY POR ISSO É OPCIONAL
export interface HttpRequest {
  body?: any
}
