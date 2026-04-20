export type ResourceType = 'free' | 'paid'

export type Resource = {
	title: string
	subtitle: string
	type: ResourceType
}
export type Deliverable = {
	title: string
	description: string
}
export type Step = {
	id: string
	title: string
}
export type Phase = {
	id: string
	number: number
	title: string
	months: string
	color: string
	colorSoft: string
	goals: string[]
	tools: string[]
	resources: Resource[]
	deliverable: Deliverable
	steps: Step[]
}
