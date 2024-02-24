'use client'

import { useReducer } from 'react'
import constate from 'constate'

type AppState = {
  favoriteCharacters: number[]
  searchQuery: string
}

const initialState: AppState = {
  favoriteCharacters: [],
  searchQuery: '',
}

type Action =
  | {
      type: 'SET_FAVORITES'
      payload: number[]
    }
  | {
      type: 'SET_SEARCH_QUERY'
      payload: string
    }

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'SET_FAVORITES':
      return { ...state, favoriteCharacters: action.payload }
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload }
  }
}

const useAppState = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setFavorites = (favorites: number[]) => {
    dispatch({
      type: 'SET_FAVORITES',
      payload: favorites,
    })
  }

  const setSearchQuery = (search: string) => {
    dispatch({
      type: 'SET_SEARCH_QUERY',
      payload: search,
    })
  }

  return {
    ...state,
    setFavorites,
    setSearchQuery,
  }
}

const [AppStateProvider, useAppStateContext] = constate(useAppState)

export { AppStateProvider, useAppStateContext }
