@app
mvc

@http
get /posts # read 
get /posts/:postID # list
post /posts # create
post /posts/:postID # update 
post /posts/:postID/destroy # delete

@tables
posts
  postID *String
