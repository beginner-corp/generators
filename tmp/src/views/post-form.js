
module.exports = function form (post) {

  let action = post? `/posts/${ post.postID}` : '/posts'
  let form = `<form action="${ action }" method=post>`

  if (post) {
    form += `<input type=hidden name=postID value=${ post.postID }>`
  }

  form += `
    <label for=title>title<input type=text name=title value=undefined required></label><label for=content>content<textarea name=content required>undefined</textarea></label>
    <button>Save</button>
  </form>`

  if (post) {
    form += `
    <form action=/posts/${ post.postID }/destroy method=post>
      <button>destroy</button>
    </form>`
  }

  return form
}