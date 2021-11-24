import useRestApi from "../hooks/useRestApi";
import { GET_TOP_DETAILS } from "../consts/environment";

export const GeneralTop = <T>() => {
  const { state, isLoading } = useRestApi<T>(GET_TOP_DETAILS);
  return { state, isLoading };
};

export default GeneralTop;
