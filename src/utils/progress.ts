export function getPhaseProgress(
	steps: { id: string }[],
	completedSteps: string[]
) {
	const total = steps.length
	const done = steps.filter(s => completedSteps.includes(s.id)).length

	return Math.round((done / total) * 100)
}

export function getGlobalProgress(
	roadmap: { steps: { id: string }[] }[],
	completedSteps: string[]
) {
	const allSteps = roadmap.flatMap(phase => phase.steps)
	const done = allSteps.filter(p => completedSteps.includes(p.id)).length

	return Math.round((done / allSteps.length) * 100)
}
