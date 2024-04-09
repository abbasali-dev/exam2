import { Dispatch, SetStateAction, useState } from 'react'

import { LogoHidden, StyledSearchBar, StyledSearchBarLine, StyledSearchBarText } from './SearchBar.styles'
import Logo from '../Logo'

type SearchBarProps = {
  setSearchValue: Dispatch<SetStateAction<string>>
}

const SearchBar = ({ setSearchValue }: SearchBarProps) => {
  const [focus, setFocus] = useState<boolean>(false)

  return (
    <>
      <LogoHidden><Logo /></LogoHidden>
      <StyledSearchBarText>
        Search
      </StyledSearchBarText>
      <StyledSearchBar
        placeholder='Keyword'
        focused={focus}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <StyledSearchBarLine />
    </>
  )
}

export default SearchBar
