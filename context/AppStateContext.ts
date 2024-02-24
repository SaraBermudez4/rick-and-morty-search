'use client'

import { useReducer } from 'react'
import constate from 'constate'

type AppState = {
  favoriteCharacters: number[]
}

const initialState: AppState = {
  favoriteCharacters: [],
}

type Action = {
  type: 'SET_FAVORITES'
  payload: number[]
}

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'SET_FAVORITES':
      return { ...state, favoriteCharacters: action.payload }
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

  return {
    ...state,
    setFavorites,
  }
}

const [AppStateProvider, useAppStateContext] = constate(useAppState)

export { AppStateProvider, useAppStateContext }
