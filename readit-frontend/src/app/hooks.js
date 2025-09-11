import { useDispatch, useSelector } from "react-redux";

// typed hooks recommended (like useAppDispatcher/Selector)
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
