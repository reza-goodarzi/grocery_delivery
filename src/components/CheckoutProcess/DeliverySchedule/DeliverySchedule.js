import Card from "../../UI/Card";
import Container from "../../UI/Container";

const schedules = [
	{
		type: 'تحویل فوری',
		detail: 'تحویل فوری در 90 دقیقه🔥'
	},
	{
		type: 'از ساعت 8 تا 11',
		detail: 'تحویل از 8 صبح تا 11 صبح',
	},
	{
		type: 'از ساعت 11 تا 14',
		detail: 'تحویل از 11 صبح تا 14 بعد از ظهر',

	},
	{
		type: 'از ساعت 15 تا 17',
		detail: 'تحویل از 15 بعد از ظهر تا 17 بعد از ظهر',

	},
	{
		type: 'از ساعت 17 تا 20',
		detail: 'تحویل از 5 بعد از ظهر تا 20 بعد از ظهر',

	},
	{
		type: 'روز بعد',
		detail: 'اولین تحویل روز بعد',
	},
];

function DeliverySchedule() {
	return (
		<Container
			number='2'
			title='زمان بندی تحویل'
		>
			{schedules.map(schedule => (
				<Card
					title={schedule.type}
					subtitle={schedule.detail}
					showButtons={false}
				/>
			))}
		</Container>
	);
}

export default DeliverySchedule;
