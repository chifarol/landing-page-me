"use client";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryKey,
  QueryFunction,
  MutationFunction,
  useQueries,
} from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

type keyType = string[];
type queryFxnType = QueryFunction<unknown, keyType, any>;
type mutationFxnType = MutationFunction<unknown, void>;

export function useRequestProcessor() {
  const queryClient = useQueryClient();

  function useQueryFxn(
    key: keyType,
    queryFunction: queryFxnType,
    options = {}
  ) {
    return useQuery({
      queryKey: key,
      queryFn: queryFunction,
      ...options,
    });
  }

  function useQueriesFxn(
    arr: string[],
    fetchUserById: (target: string) => void,
    key: string
  ) {
    return useQueries({
      queries: arr.map((element) => {
        return {
          queryKey: [key],
          queryFn: () => fetchUserById(element),
        };
      }),
    });
  }

  function useMutationFxn(
    key: keyType,
    setIsLoading: (isLoading: boolean) => void,
    mutationFunction: mutationFxnType,
    options = {}
  ) {
    return useMutation({
      mutationKey: key,
      mutationFn: mutationFunction,
      onMutate: () => {
        setIsLoading(true);
        // console.log("setIsLoading true");
      },
      onSettled: () => {
        queryClient.invalidateQueries(key);
        setIsLoading(false);
        // console.log("setIsLoading false");
      },
      ...options,
    });
  }

  return { useQueryFxn, useMutationFxn, useQueriesFxn };
}

export function getApiPath() {
  return `https://api.everyeventdelivery.com/v1`;
}
