module.exports = function form(post) {
  
  let destroy = post? `<form action=/posts/${ post.postID }/destroy method=post>
    <button>destroy</button>
  </form>` : ''

  let action = post? `/posts/${ post.postID }` : '/posts'
  
  return `
    <form action="${ action }" method=post>
      ${ post? `<input type=hidden name=postID value=${ post.postID }>` : '' }
      <label for=title>Title
        <input type=text name=title value="${ post? post.title : '' }" placeholder='Enter title here' required>
      </label>
      <label for=title>Content
        <textarea name=content placeholder='Enter content here' required>${ post? post.content : '' }</textarea>
      </label>
      <button>Save</button>
    </form>
  
    ${ destroy }
  `
}
