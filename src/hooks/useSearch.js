import { useEffect, useState, useRef } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('You cannot search a empty pokemon')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('You cannot search a pokemon by a number')
      return
    }
    if (search.length < 3) {
      setError('The search must have at least 3 characters')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}
