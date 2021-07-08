import { useState } from "react";
import { schedulesData } from "../../data/schedulesData";
import Card from "../UI/Card";
import Container from "../UI/Container";

function DeliverySchedule() {
	const [schedules, setSchedules] = useState(schedulesData);

	function onSelectHandler(index) {
		const newSchedules = schedules.map((schedule, i) => (
			i === index ?
				{ ...schedule, selected: true } :
				{ ...schedule, selected: false }
		));

		setSchedules(newSchedules);
		saveSelectedSchedule(newSchedules);
	}

	function saveSelectedSchedule(newSchedules) {
		const selectedSchedule = newSchedules.find(schedule => schedule.selected === true);
		localStorage.setItem('schedule', JSON.stringify(selectedSchedule));
	}

	return (
		<Container
			number='2'
			title='زمان بندی تحویل'
		>
			{schedules.map((schedule, index) => (
				<Card
					key={index}
					onSelect={() => onSelectHandler(index)}
					selected={schedule.selected}
					title={schedule.type}
					subtitle={schedule.detail}
					showButtons={false}
				/>
			))}
		</Container>
	);
}

export default DeliverySchedule;
