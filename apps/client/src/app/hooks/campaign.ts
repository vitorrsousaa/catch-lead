import { QUERY_KEYS } from "@/config/queryKeys";
import type { Campaign } from "@/entities/campaign";
import { campaingServices } from "@/services/campaign";
import type { WithCondition } from "@/utils/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export type CacheCampaign = WithCondition<Campaign>;

export function useGetAllCampaigns() {
	const { data, isLoading, isError } = useQuery({
		queryKey: QUERY_KEYS.ALL_CAMPAIGNS,
		queryFn: async () => {
			const campaigns = await campaingServices.getAll();

			return campaigns as CacheCampaign[];
		},
	});
	return {
		campaigns: data ?? [],
		isLoadingCampaigns: isLoading,
		isErrorCampaigns: isError,
	};
}

export function useCreateCampaign() {
	const queryClient = useQueryClient();

	const { mutateAsync, isPending } = useMutation({
		mutationFn: campaingServices.create,
		onMutate: async (variables) => {
			// Optimistic update
			const tempId = Math.random().toString(36).substr(2, 9);

			const newCampaign: CacheCampaign = {
				id: tempId,
				condition: "pending",
				leads: 0,
				...variables,
			};

			queryClient.setQueryData<CacheCampaign[]>(
				QUERY_KEYS.ALL_CAMPAIGNS,
				(oldData) => oldData?.concat(newCampaign),
			);

			return { tempId };
		},
		onSuccess: async (data, _variables, context) => {
			// Handle success
			await queryClient.cancelQueries({
				queryKey: QUERY_KEYS.ALL_CAMPAIGNS,
			});

			queryClient.setQueryData<CacheCampaign[]>(
				QUERY_KEYS.ALL_CAMPAIGNS,
				(oldData) =>
					oldData?.map((campaign) =>
						campaign.id === context.tempId ? data : campaign,
					),
			);
		},
		onError: async (_error, _variables, context) => {
			// Handle error
			await queryClient.cancelQueries({
				queryKey: QUERY_KEYS.ALL_CAMPAIGNS,
			});

			queryClient.setQueryData<CacheCampaign[]>(
				QUERY_KEYS.ALL_CAMPAIGNS,
				(oldData) =>
					oldData?.map((campaign) =>
						campaign.id === context?.tempId
							? { ...campaign, condition: "error" }
							: campaign,
					),
			);
		},
	});

	return { createCampaign: mutateAsync, isCreatingCampaign: isPending };
}
