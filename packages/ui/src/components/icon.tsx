import {
	BellIcon,
	CalendarIcon,
	CaretSortIcon,
	CheckIcon,
	ClockIcon,
	DotsHorizontalIcon,
	DotsVerticalIcon,
	GearIcon,
	HamburgerMenuIcon,
	HomeIcon,
	IdCardIcon,
	PersonIcon,
	PlusIcon,
	QuestionMarkCircledIcon,
	RocketIcon,
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
} as const;

export function Icon(props: IconProps) {
	const { name, className } = props;
	const RadixIcon = icons[name];

	return <RadixIcon className={className} />;
}
