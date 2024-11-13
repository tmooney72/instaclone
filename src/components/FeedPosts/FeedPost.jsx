import PostHeader from './PostHeader'
import { Box, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'

const FeedPost = ({post}) => {
  const { isLoading, userProfile, setUserProfile} = useGetUserProfileById(post.createdBy)
  return (
    <>
    <PostHeader post={post} creatorProfile={userProfile}/>
    <Box my={2}
    borderRadius={4}

    overflow={"hidden"}
    >
        <Image src={post.imageURL} alt={"Feed Post Image"} w={500}/>
    </Box>
    <PostFooter post={post} creatorProfile={userProfile}/>
    
    </>
  )
}

export default FeedPost