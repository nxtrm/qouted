import { IconButton, useColorModeValue } from '@chakra-ui/react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'

interface Props {
    liked: boolean
    handleClick: () => void
}


const LikeButton = ({liked, handleClick}:Props) => {
    
    const gr = useColorModeValue('green.500', 'green.100')
    const bgL = useColorModeValue('gray.200', '<gray className="7"></gray>00')


  return (
    <IconButton
          bgColor={bgL}
          height={8}
          width={8}
          marginY={1}
          color={liked ? gr : undefined}
          fontSize="24px"
          onClick={handleClick}
          aria-label="Like"
          icon={liked ? <AiFillLike /> : <AiOutlineLike />}
        />
  )
}

export default LikeButton