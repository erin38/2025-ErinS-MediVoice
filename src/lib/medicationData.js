// Fake medication data for tracking daily dosage schedules
export const medications = [
	{
		id: 1,
		name: 'Lisinopril',
		dosage: '10mg',
		form: 'Tablet',
		frequency: 'Once daily',
		days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		times: ['08:00'],
		amount: 1,
		purpose: 'Blood pressure control'
	},
	{
		id: 2,
		name: 'Metformin',
		dosage: '500mg',
		form: 'Tablet',
		frequency: 'Twice daily',
		days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		times: ['08:00', '20:00'],
		amount: 1,
		purpose: 'Type 2 diabetes management'
	},
	{
		id: 3,
		name: 'Atorvastatin',
		dosage: '20mg',
		form: 'Tablet',
		frequency: 'Once daily (evening)',
		days: ['Monday', 'Wednesday', 'Friday', 'Sunday'],
		times: ['21:00'],
		amount: 1,
		purpose: 'Cholesterol management'
	},
	{
		id: 4,
		name: 'Vitamin D3',
		dosage: '2000 IU',
		form: 'Softgel',
		frequency: 'Once daily',
		days: ['Monday', 'Thursday', 'Sunday'],
		times: ['08:00'],
		amount: 2,
		purpose: 'Vitamin supplement'
	},
	{
		id: 5,
		name: 'Levothyroxine',
		dosage: '75mcg',
		form: 'Tablet',
		frequency: 'Once daily (morning, empty stomach)',
		days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		times: ['06:30'],
		amount: 1,
		purpose: 'Thyroid hormone replacement'
	},
	{
		id: 6,
		name: 'Omeprazole',
		dosage: '20mg',
		form: 'Capsule',
		frequency: 'Once daily (before breakfast)',
		days: ['Tuesday', 'Thursday', 'Saturday'],
		times: ['07:30'],
		amount: 1,
		purpose: 'Acid reflux prevention'
	}
];

// Helper function to get medications for a specific day
export function getMedicationsForDay(dayName) {
	return medications.filter((med) => med.days.includes(dayName));
}

// Helper function to get medications for a specific time
export function getMedicationsForTime(time) {
	return medications.filter((med) => med.times.includes(time));
}

// Helper function to get all unique times across all medications
export function getAllMedicationTimes() {
	const times = new Set();
	medications.forEach((med) => {
		med.times.forEach((time) => times.add(time));
	});
	return Array.from(times).sort();
}
