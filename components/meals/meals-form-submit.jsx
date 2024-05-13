'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import { useFormStatus } from 'react-dom';

export const MealsFormSubmit = ({ type }) => {
	const { pending } = useFormStatus();

	return (
		<button
			disabled={pending}
			type={type}>
			{pending ? 'Submitting...' : 'Share Meal'}
		</button>
	);
};
