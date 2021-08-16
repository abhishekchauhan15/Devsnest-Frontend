import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

import { rootState, appDispatch } from "./store";

export const useAppDispatch = () => useDispatch<appDispatch>();
export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;
