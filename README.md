# Database Structure
1. Video Scheme
   - videoId (integer)
   - urlImg (string)
   - thumbnail (string)
2. Product Scheme
   - videoId (integer)
   - productId (string)
   - linkProduct (string)
   - title (string)
   - price (integer)
4. Comment Scheme
   - videoId (integer)
   - username (string)
   - comment (string)
   - timestamp (string)
  
Each scheme connected with videoId

# API Structure 
This app using two method, GET and POST
  - GET
    '/video/:videoId' = to get video based on video id
    '/:videoId/product' = to get product based on video id
    '/:videoId/comment' = to getcomment based on video id

  - POST
    '/postComment' = to post a comment

# List API
  # GET /video/:videoId
  
    URL Params
    Required: videoId=[integer]
    Data Params
    None
    Headers
    Content-Type: application/json
    Success Response:
    Code: 200
    Content:
      {<video_object>}
    Error Response:
      Code: 500
      Content: {message: error.message}

    
  # GET /:videoId/product
  
    URL Params
    Required: videoId=[integer]
    Data Params
    None
    Headers
    Content-Type: application/json
    Success Response:
    Code: 200
    Content:
      {<product_object>}
    Error Response:
      Code: 500
      Content: {message: error.message}
      

  # GET /:videoId/comment
  
    URL Params
    Required: videoId=[integer]
    Data Params
    None
    Headers
    Content-Type: application/json
    Success Response:
    Code: 200
    Content:
      {<comment_object>}
    Error Response:
      Code: 500
      Content: {message: error.message}


  # POST /postComment/

    URL Params
    None
    Headers
    Content-Type: application/json
    Data Params
      {
        username: string,
        comment: string,
        videoId : integer
      }
    Success Response:
    Code: 200
    Content: { <user_object> }


# How to install
1. npm install
2. npm run server
