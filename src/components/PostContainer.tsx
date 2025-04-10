import { postApi } from "../services/PostService"
import { IPost } from "../types/IPost"
import PostItem from "./PostItem"

const PostContainer = () => {
  const { data: posts, isLoading } = postApi.useFetchAllPostsQuery(20)
  const [createPost, {}] = postApi.useCreatePostMutation()
  const [deletePost, {}] = postApi.useDeletePostMutation()
  const [updatePost, {}] = postApi.useUpdatePostMutation()

  const handleCreate = async () => {
    const title = prompt()
    await createPost({ title, body: title } as IPost)
  }

  const handleRemove = (post: IPost) => {
    deletePost(post)
  }

  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }

  return (
    <div>
      <button onClick={handleCreate}>Create post</button>
      {isLoading && <h1>Loading...</h1>}
      {posts?.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          remove={handleRemove}
          update={handleUpdate}
        />
      ))}
    </div>
  )
}

export default PostContainer
