import { FC } from "react"
import { IPost } from "../types/IPost"

interface PostItemProps {
  post: IPost
  remove: (post: IPost) => void
  update: (post: IPost) => void
}

const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation()
    remove(post)
  }

  const handleUpdate = () => {
    const title = prompt() || ""
    update({ ...post, title })
  }

  return (
    <div onClick={handleUpdate}>
      {post.id}. {post.title}
      <button onClick={handleRemove}>Delete</button>
    </div>
  )
}

export default PostItem
