import * as api from "@/api"
import { useQuery, useMutation, queryCache } from "react-query"

export const useGetPost = () => {
  return useQuery("getPost", api.getPost)
}

