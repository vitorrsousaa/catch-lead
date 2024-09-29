import { QUERY_KEYS } from "@/config/queryKeys";
import type { Lead } from "@/entities/lead";
import { leadServices } from "@/services/lead";
import type { WithCondition } from "@/utils/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export type CacheLead = WithCondition<Lead>;

export function useGetGrowthTotalLeads() {
	const { data, isError, isLoading, isPending, isFetching } = useQuery({
		queryKey: QUERY_KEYS.GROWTH_TOTAL_LEADS,
		queryFn: leadServices.getGrowthTotal,
	});

	return {
		growthTotal: data,
		isErrorGrowthingTotal: isError,
		isLoadingGrowthTotal: isLoading || isPending,
		isFetchingGrowthTotal: isFetching,
	};
}

export function useGetAllLeads() {
	const { data, isLoading, isError } = useQuery({
		queryKey: QUERY_KEYS.ALL_LEADS,
		queryFn: async () => {
			const leads = await leadServices.getAll();

			return leads as CacheLead[];
		},
	});

	return {
		leads: data ?? [],
		isErrorLeads: isError,
		isLoadingLeads: isLoading,
	};
}

export function useCreateLead() {
	const queryClient = useQueryClient();

	const { mutateAsync, isPending } = useMutation({
		mutationFn: leadServices.create,
		onMutate: async (variables) => {
			// Optimistic update
			const tempId = Math.random().toString(36).substr(2, 9);

			const newLead: CacheLead = {
				id: tempId,
				condition: "pending",
				...variables,
			};

			queryClient.setQueryData<CacheLead[]>(QUERY_KEYS.ALL_LEADS, (oldData) =>
				oldData?.concat(newLead),
			);

			return { tempId };
		},
		onSuccess: async (data, _variables, context) => {
			// Handle success
			await queryClient.cancelQueries({
				queryKey: QUERY_KEYS.ALL_LEADS,
			});

			queryClient.setQueryData<CacheLead[]>(QUERY_KEYS.ALL_LEADS, (oldData) =>
				oldData?.map((lead) => (lead.id === context.tempId ? data : lead)),
			);
		},
		onError: async (_error, _variables, context) => {
			// Handle error
			await queryClient.cancelQueries({
				queryKey: QUERY_KEYS.ALL_LEADS,
			});

			queryClient.setQueryData<CacheLead[]>(QUERY_KEYS.ALL_LEADS, (oldData) =>
				oldData?.map((lead) =>
					lead.id === context?.tempId ? { ...lead, condition: "error" } : lead,
				),
			);
		},
	});

	return {
		createLead: mutateAsync,
		isCreatingLead: isPending,
	};
}
