import { StyledButtonSearch } from './Button.styled'

type SearchButtonProps = {
  name: string
  onClickHandler: () => void
}
const SearchButton = ({ name, onClickHandler }: SearchButtonProps) => {
  return (
    <StyledButtonSearch onClick={onClickHandler}>{name}</StyledButtonSearch>
  )
}

export default SearchButton