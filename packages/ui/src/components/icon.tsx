import {
	BellIcon,
	CalendarIcon,
	CaretSortIcon,
	CheckIcon,
	ChevronRightIcon,
	ClockIcon,
	CubeIcon,
	DotsHorizontalIcon,
	DotsVerticalIcon,
	EnvelopeClosedIcon,
	FileTextIcon,
	GearIcon,
	GitHubLogoIcon,
	HamburgerMenuIcon,
	HomeIcon,
	IdCardIcon,
	LayersIcon,
	Link1Icon,
	LinkBreak2Icon,
	PersonIcon,
	PlusIcon,
	QuestionMarkCircledIcon,
	RocketIcon,
	SliderIcon,
	UpdateIcon,
} from "@radix-ui/react-icons";

export interface IconProps {
	name: keyof typeof icons;
	className?: string;
}

const icons = {
	hamburger: HamburgerMenuIcon,
	home: HomeIcon,
	settings: GearIcon,
	questionMark: QuestionMarkCircledIcon,
	double_arrow: CaretSortIcon,
	bell: BellIcon,
	person: PersonIcon,
	update: UpdateIcon,
	clock: ClockIcon,
	rocket: RocketIcon,
	plus: PlusIcon,
	calendar: CalendarIcon,
	dots_vertical: DotsVerticalIcon,
	dots_horizontal: DotsHorizontalIcon,
	id_card: IdCardIcon,
	check: CheckIcon,
	link_break2: LinkBreak2Icon,
	envelope_closed: EnvelopeClosedIcon,
	chevron_right: ChevronRightIcon,
	cube: CubeIcon,
	layers: LayersIcon,
	link1: Link1Icon,
	slider: SliderIcon,
	file_text: FileTextIcon,
	github: GitHubLogoIcon,
} as const;

export function Icon(props: IconProps) {
	const { name, className } = props;
	const RadixIcon = icons[name];

	return <RadixIcon className={className} />;
}
