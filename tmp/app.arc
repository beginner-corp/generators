@app
mvc

@http
get /
get /posts
get /posts/:postID
post /posts
post /posts/:postID
post /posts/:postID/destroy

@tables
posts
  postID *String

